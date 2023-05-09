#!/bin/bash

docker compose run --rm  certbot certonly -m admin@open-models-iecho.io --agree-tos --webroot --webroot-path /var/www/certbot/ -d $1
