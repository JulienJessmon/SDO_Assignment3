FROM python:3.10-slim

WORKDIR /app

ARG NEW_RELIC_LICENSE_KEY
ENV NEW_RELIC_LICENSE_KEY=$NEW_RELIC_LICENSE_KEY
ENV NEW_RELIC_APP_NAME="LMS System - Backend"
ENV NEW_RELIC_ENVIRONMENT=production
ENV NEW_RELIC_CONFIG_FILE=newrelic.ini

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN echo "[newrelic]" > newrelic.ini && \
    echo "license_key = $NEW_RELIC_LICENSE_KEY" >> newrelic.ini && \
    echo "app_name = LMS System - Backend" >> newrelic.ini && \
    echo "monitor_mode = true" >> newrelic.ini && \
    echo "log_level = info" >> newrelic.ini && \
    echo "log_file = stderr" >> newrelic.ini && \
    echo "distributed_tracing.enabled = true" >> newrelic.ini

EXPOSE 4000

CMD ["newrelic-admin", "run-program", "python", "app.py"]
