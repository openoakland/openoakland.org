
build:
	bundle exec jekyll build

serve:
	bundle exec jekyll serve

setup:
	bundle install

test:
	bundle exec htmlproofer --check-html _site --disable-external


.PHONY: build serve setup test
