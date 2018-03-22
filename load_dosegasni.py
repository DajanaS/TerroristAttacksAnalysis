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
		my_file = Path("C:/Users/Stefan/Desktop/PROEKT VBS/podatoci/" + x.strftime('%Y%m%d') + ".export.csv")
		if my_file.exists():
			print("veke spusten 1")
		else:
			print("se spusta")
			print(x.strftime('%Y%m%d'))
			zipurl = 'http://data.gdeltproject.org/events/' + x.strftime('%Y%m%d') + '.export.CSV.zip'
			print(zipurl)
			with urlopen(zipurl) as zipresp:
				with ZipFile(BytesIO(zipresp.read())) as zfile:
					zfile.extractall('C:/Users/Stefan/Desktop/PROEKT VBS/podatoci')
			cur = conn.cursor()
			cur.execute("truncate vbs.tmp_main_table")
			with open('C:/Users/Stefan/Desktop/PROEKT VBS/podatoci/' + x.strftime('%Y%m%d') + '.export.csv', 'r', encoding="utf8") as f:
				next(f)  
				cur.copy_from(f, 'vbs.tmp_main_table', null='None')
			conn.commit()
			print("spusten ekstraktiran, staven vo tmp")
			cur.execute('select * from vbs.polni_main()')
			print ('tureno')
			x += timedelta(days=1)
print (x.strftime('%Y%m%d'))





