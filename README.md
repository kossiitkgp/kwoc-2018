# KWoC 2017

This repo contains the server code for Kharagpur Winter of Code 2017.

If you have access to the secrets repository, clone appending the `--recursive` option.

Used the following tutorial to set up the server - https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-uwsgi-and-nginx-on-ubuntu-16-04

## Development Workflow

To launch the server locally, follow the below steps:

### For the first time
```
# Run these commands in the root folder of the project
pip install pipenv
pipenv shell --three
pipenv install --dev
gunicorn kwoc.app:app
```

If you want the server to update to code changes without restarting the server, use a `--reload` parameter.

```
gunicorn kwoc.app:app --reload  # live code changes
```

### For subsequent usage

```
pipenv shell
gunicorn kwoc.app:app # --reload for live code changes
```


To add cronjob :
```
crontab -e          # A file will open, type the following
*/60 * * * * python3 /path/to/kwoc/gh_scrapper/stats/generate_statistics.py
```


## Workflow for updating the projects list

* Add the projects details to `/path/to/kwoc/gh_scrapper/projects.csv`. Make sure that you dont remove the column headings in the first line.

* Add the GITHUB_TOKEN for authenticating API to your environment.

* Go to `/path/to/kwoc/tag_scrapper/` and run the command `python3 main.py` to generate tags

* Go to `/path/to/kwoc/gh_scrapper/` and run the command `python3 project_gen.py` to generate the desired template
