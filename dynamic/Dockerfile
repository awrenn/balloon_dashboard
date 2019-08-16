FROM python:3.7

WORKDIR /app

COPY . /app

RUN pip3 install -r /app/reqs.txt

CMD ["gunicorn", "-b", "0.0.0.0:8080", "main"]
