# KWoC 2017

This repo contains the server code for Kharagpur Winter of Code 2017.

If you have access to the secrets repository, clone appending the `--recursive` option.

Used the following tutorial to set up the server - https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-uwsgi-and-nginx-on-ubuntu-16-04

## Development Workflow

To launch the server locally, follow the below steps:
### Run inside a virtual environment:

```
$ pip install pipenv
$ cd /path/to/project
$ pipenv shell --three
$ pipenv install --dev
$ gunicorn kwoc.app:app
```

### Run inside a Docker container
```
$ sudo docker build -t kwoc-app .
$ sudo docker run -p 8000:8000 kwoc-app
```
# Run these commands in the root folder of the project
pip install pipenv
pipenv shell --three
pipenv install --dev
gunicorn kwoc.app:app
```

If you want the server to update to code changes without restarting the server, use a `--reload` parameter.

```
gunicorn kwoc.app:app --reload  // live code changes
```
