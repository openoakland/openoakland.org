# Contributing

Welcome to OpenOakland's website contributing guidelines!

### Code of Conduct

Please be familiar with the OpenOakland’s [Code of Conduct](https://github.com/openoakland/openoakland.org/blob/master/.github/code_of_conduct.md).

## Installation instructions

### Prerequisites:

- [GNU Make](https://www.gnu.org/software/make/)
- [Ruby 2.5+](https://www.ruby-lang.org/en/)
- [bundler](https://bundler.io/)

### Setup

Clone or fork the repository and navigate to the project folder.

Install project dependencies.

    $ make setup

Build the site.

    $ make build

Run some checks.

    $ make test

Start a local server.

    $ make serve

Open your web browser to [localhost:4000](http://localhost:4000/).

## Working with issues

- How to submit a bug:
  - Create an issue, follow the template, and make sure you add a `bug` tag to it.
- How to submit a feature request:
  - Create an issue outlining the request, follow the template, and make sure you add a `request` tag to it.
- How to contribute to an existing issue:
  - Assign the issue to yourself.
  - Once assigned, the project will move to the `In Progress` column in our [project board](https://github.com/openoakland/openoakland.org/projects).

## Working with forks and branches

- Once you’ve gotten the code set up and running, and assigned an issue to yourself, make sure you make a branch off of `master`. Please follow the guidelines for naming branches:
  - If you are working on a feature issue, name the branch `feat/{ISSUE-NAME}`
  - If you are working on a bug issue, name the branch `bug/{ISSUE-NAME}`

## Working with pull requests and reviews

- Follow the pull request template. If there are design changes, please include screenshots.
- Add [Alison](https://github.com/anlawyer) as a reviewer on the pull request.
- Add anyone else who may have relevant knowledge, or anyone you worked or spoke with, if applicable.
- Make sure the CircleCI builds and tests pass. If they don’t, go ahead and continue to work and push up additional commits. The build must be successful before your work is merged.
  - To build your code locally before pushing up your commits, run the following command in your terminal: `circleci local execute --job build`.
- Wait for feedback, or for your branch to be merged!
- We typically delete branches after the code has been merged to master, so feel free to make a new branch for each new issue you work on.

## Updating project info
To update project info that you see on the [openoakland.org/projects](openoakland.org/projects) page, find the project you want to update in `src/_data/active_projects.yml` and edit the content in the YAML block for the project.

Example project info YAML block:
```yaml
- name: Councilmatic
  image: councilmatic_300x118.png
  link: http://councilmatic.aws.openoakland.org/pc/
  leader: Howard Mattis
  slack_id: C0M89GTRT
  slack_channel: councilmatic
  description: We make the Oakland City Council meetings easily accessible to the citizens of Oakland. Using our site citizens can learn when are the upcoming city council meetings, view the agenda, put the meeting on your calendar, and send an electronic comment to the Council. Plus you can see videos of past meetings.
```

#### How to find the `slack_id` of a Slack Channel:

1. Visit [openoakland.slack.com](openoakland.slack.com) in your browser
2. Click on the channel you want to find the ID for. For example, [#oo-website](https://app.slack.com/client/T02FEGG84/CH1U5KJ48)
3. The channel's ID is the last part of the URL, following the last `/`. For #oo-website, it's `CH1U5KJ48`

## Testing

- Run `make test` in your terminal before making a pull request.

## Deployment

This site is deployed automatically from the `master` branch. [CircleCI](https://circleci.com) watches for changes, verifies the site looks good, and then pushes the site to an AWS S3 bucket using an IAM account.

[infra](https://github.com/openoakland/infra) creates the S3 bucket, DNS record, Cloud Front distribution, and IAM user to make it all work. Once created, the IAM credentials are generated from infra and must be added to
[CircleCI](https://circleci.com/gh/openoakland/openoakland.org/edit#env-vars) for CircleCI to write to the S3 bucket:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCES_KEY`
