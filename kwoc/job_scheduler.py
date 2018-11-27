from crontab import CronTab

cron = CronTab(user=True)  
job = cron.new(command='python3 kwoc/gh_scraper/generate_statistics.py')  
job.minute.every(60)

cron.write()  