
# Bind address for `make serve`. Defaults to loopback for normal local dev;
# the Docker sandbox sets JEKYLL_HOST=0.0.0.0 so its published port is
# actually reachable from the host browser.
JEKYLL_HOST ?= 127.0.0.1

build:
	bundle exec jekyll build

serve:
	bundle exec jekyll serve --host $(JEKYLL_HOST)

docker_serve:
	docker-compose up --build

setup:
	bundle install

test:
	bundle exec htmlproofer --check-html _site --disable-external

docker_test:
	docker-compose run --rm site make test


.PHONY: build serve setup test
