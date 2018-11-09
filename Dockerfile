FROM python:3

COPY . /app
WORKDIR /app

ENV http_proxy http://172.16.2.30:8080/
ENV https_proxy http://172.16.2.30:8080/

RUN pip install pipenv
RUN pipenv install --system --deploy

EXPOSE 8000

CMD [ "gunicorn", "-b0.0.0.0:8000", "kwoc.app:app" ]