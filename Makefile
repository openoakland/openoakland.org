
build:
	bundle exec jekyll build

serve:
	bundle exec jekyll serve

setup:
	bundle install

test:
	bundle exec htmlproofer --check-html _site --url-ignore "https://adoptadrainoakland.com,http://www.ckan.org"


.PHONY: build serve setup test
