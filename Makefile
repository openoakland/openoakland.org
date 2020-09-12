
build:
	bundle exec jekyll build

serve:
	bundle exec jekyll serve

docker_serve:
	docker-compose up

setup:
	bundle install

test:
	bundle exec htmlproofer --check-html _site --disable-external

docker_test:
	docker-compose run --rm site make test


.PHONY: build serve setup test
