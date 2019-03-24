[![CircleCI](https://circleci.com/gh/openoakland/openoakland.org.svg?style=svg)](https://circleci.com/gh/openoakland/openoakland.org)

# openoakland.org

This site is a work in progress.


## Development

Prerequisites:

- [GNU Make](https://www.gnu.org/software/make/)
- [Ruby 2.5+](https://www.ruby-lang.org/en/)
- [bundler](https://bundler.io/)


### Setup

Install project dependencies.

    $ make setup

Build the site.

    $ make build

Run some checks.

    $ make test

Start a local server.

    $ make serve

Open your web browser to [localhost:4000](http://localhost:4000/).


## Deployment

This site is deployed automatically from the `master` branch. [CircleCI](https:)
watches for changes, verifies the site looks good, and then pushes the site to
an AWS S3 bucket using an IAM account.

[infra](https://github.com/openoakland/infra) creates the S3 bucket, DNS record,
Cloud Front distribution, and IAM user to make it all work. Once created, the
IAM credentials are generated from infra and must be added to
[CircleCI](https://circleci.com/gh/openoakland/openoakland.org/edit#env-vars)
for CircleCI to write to the S3 bucket:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCES_KEY`
