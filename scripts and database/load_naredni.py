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

x = date.today() - timedelta(1)
def spusti_zip():
	my_file = Path("../data/" + x.strftime('%Y%m%d') + ".export.csv")
	if my_file.exists():
		print("downloaded")
	else:
		print("downloading...")
		print(x.strftime('%Y%m%d'))
		zipurl = 'http://data.gdeltproject.org/events/' + x.strftime('%Y%m%d') + '.export.CSV.zip'
		print(zipurl)
		with urlopen(zipurl) as zipresp:
			with ZipFile(BytesIO(zipresp.read())) as zfile:
				zfile.extractall('../data')
		cur = conn.cursor()
		with open('C:/Users/Stefan/Desktop/PROEKT VBS/podatoci/' + x.strftime('%Y%m%d') + '.export.csv', 'r', encoding="utf8") as f:
			next(f)  
			cur.copy_from(f, 'vbs.tmp_main_table', null='None')
		conn.commit()
		print("downloaded, extracted and set in the table tmp_main_table")
		cur.execute('select * from vbs.fill_main()')
		print ('inserted')
	return;
#schedule.every(2).minutes.do(spusti_zip)
#schedule.every().hour.do(spusti_zip)
schedule.every().day.at("14:27").do(spusti_zip)

while 1:
    schedule.run_pending()
    time.sleep(1)


			
print (x.strftime('%Y%m%d'))




