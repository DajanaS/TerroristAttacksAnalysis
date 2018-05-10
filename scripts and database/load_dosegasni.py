#! python
import sys
import schedule
import time
import psycopg2
import csv
from io import BytesIO
from urllib.request import urlopen
from zipfile import ZipFile
from datetime import datetime
from datetime import date, timedelta
from threading import Timer
from pathlib import Path
conn = psycopg2.connect("host=localhost dbname=postgres user=postgres")

x = datetime.strptime('20160618', '%Y%m%d')

while 1:
		# my_file contains the path where the data (.csv file) should be downloaded
		my_file = Path("../data/" + x.strftime('%Y%m%d') + ".export.csv")
		if my_file.exists():
			print("1 is downloaded")
		else:
			print("downloading...")
			print(x.strftime('%Y%m%d'))
			zipurl = 'http://data.gdeltproject.org/events/' + x.strftime('%Y%m%d') + '.export.CSV.zip'
			print(zipurl)
			with urlopen(zipurl) as zipresp:
				with ZipFile(BytesIO(zipresp.read())) as zfile:
					zfile.extractall('../data')
			cur = conn.cursor()
			cur.execute("truncate vbs.tmp_main_table")
			with open('../data' + x.strftime('%Y%m%d') + '.export.csv', 'r', encoding="utf8") as f:
				next(f)  
				cur.copy_from(f, 'vbs.tmp_main_table', null='None')
			conn.commit()
			print("downloaded, extracted and set in the table")
			cur.execute('select * from vbs.fill_main()')
			print ('inserted')
			x += timedelta(days=1)
print (x.strftime('%Y%m%d'))





