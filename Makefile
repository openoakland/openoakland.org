
build:
	bundle exec jekyll build

serve:
	bundle exec jekyll serve

setup:
	bundle install

test:
	bundle exec htmlproofer --check-html _site --url-ignore "/adoptadrainoakland.com/,/www.ckan.org/,/oaklandwiki.org/,/theatlanticcities.com/"


.PHONY: build serve setup test
