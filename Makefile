
build:
	bundle exec jekyll build

serve:
	bundle exec jekyll serve

setup:
	bundle install

test:
	bundle exec htmlproofer --check-html _site --url-ignore "/adoptadrainoakland.com/,/www.ckan.org/,/oaklandwiki.org/"


.PHONY: build serve setup test
