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
To update the project info, like description or project leader, on [openoakland.org/projects](openoakland.org/projects), find the project you want to update in `src/_data/active_projects.yml`.

### Editing on Github
You can click through the folders in the **Code** tab on the [project repository](https://github.com/openoakland/openoakland.org) to navigate to the `active_projects.yml` file, [or click here to go straight there](https://github.com/openoakland/openoakland.org/blob/master/src/_data/active_projects.yml). In the top-right corner of the file view area, you'll see a pencil icon, <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>. Click the pencil logo to go into editor mode. Make your edits.

Below the editor you'll see a couple of fields with the heading **Commit changes**. Enter a brief message describing the changes you made, and click the radio button labeled <svg class="octicon octicon-git-pull-request text-gray mr-1 text-center" height="16" width="16" viewBox="0 0 12 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg> **Create a new branch for this commit and start a pull request**. Github will generate a branch name for you, or you can specify one. Click the green **Propose file changes** button.

You will be taken to a page titled **Open a pull request**. The message you entered on the previous page will be populated here. If your changes are to project content only, you can ignore or delete all the pull request template stuff below your message.

To make sure your pull request gets prompt attention, select @anlawyer in the **Reviewers** section of the righthand sidebar.

Click the green **Create pull request** button, and you're all done! @anlawyer or one of her multitude of minions will review your pull request, and either offer feedback or accept your changes. Thank you for your contribution!

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

### How to find the `slack_id` of a Slack Channel:

1. Visit [openoakland.slack.com](openoakland.slack.com) in your browser
2. Click on the channel you want to find the ID for, for example, [#oo-website](https://app.slack.com/client/T02FEGG84/CH1U5KJ48)
3. The channel's ID is the last part of the URL, following the last `/`. For #oo-website, it's `CH1U5KJ48`

## Testing

- Run `make test` in your terminal before making a pull request.

## Deployment

This site is deployed automatically from the `master` branch. [CircleCI](https://circleci.com) watches for changes, verifies the site looks good, and then pushes the site to an AWS S3 bucket using an IAM account.

[infra](https://github.com/openoakland/infra) creates the S3 bucket, DNS record, Cloud Front distribution, and IAM user to make it all work. Once created, the IAM credentials are generated from infra and must be added to
[CircleCI](https://circleci.com/gh/openoakland/openoakland.org/edit#env-vars) for CircleCI to write to the S3 bucket:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCES_KEY`
