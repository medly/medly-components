# Contributing to medly-components

I am really glad that you are visiting this page. Thanks for your interest in improving medly-components.

This repo uses yarn workspaces, so you should install `yarn` as the package manager. See [installation guide](https://yarnpkg.com/en/docs/install).

## Project setup

1. Fork and clone the repo
2. Run `yarn` to install dependencies
3. Create a branch for your PR with `git checkout -b pr/your-branch-name`

> **Tip:** Keep your `master` branch pointing at the original repository and make pull requests from branches on your fork. To do this, run:
>
> ```properties
> git remote add upstream https://github.com/medly/medly-components.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will add the original repository as a "remote" called "upstream," Then fetch the git information from that remote, then set your local `master` branch to use the upstream master branch whenever you run `git pull`. Then you can make all of your pull request branches based on this `master` branch. Whenever you want to update your version of `master`, do a regular `git pull`.

## Commit messages

> This repo is [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Before committing any thing just run `yarn init:commitizen` once, so that next time whenever you run `git commit` you will be asked right set of questions about the commit.

## Development workflow

After setting the project, run yarn to fetch all the dependencies. Then, you can run several commands:

- `yarn storybook` to run storybook for local development
- `yarn lint` to run both css & ts lint
- `yarn watch` to continuously bundle the packages. This is helpful when you have linked any package with some local project.
- `yarn build` to build the packages
- `yarn test` to run tests and type check

## Unit tests

We are using [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro) and [`jest`](https://jestjs.io/) for writing unit test cases. We are trying to maintain 100% test coverage. So please make sure to add unit tests for the changes.

There are several test commands to help you run the tests:

- `yarn test` to run tests and type check
- `yarn test:update` to update snapshots
- `yarn test:jest` is used to run jest with all the compatible jest CLI commands like `yarn test:jest Modal --watch`
- `yarn test:watch` to watch all the tests

> **Tips:**
>
> If your changes are spread across multiple packages then you have to run `yarn build` before running any tests.
>
> Some helpful blogs:
>
> https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
>
> https://kentcdodds.com/blog/write-tests

## Pull request

PLease fill in all the information asked in the pull request [template](https://github.com/medly/medly-components/blob/master/.github/PULL_REQUEST_TEMPLATE.md), this will help us tto understand your changes in the PR. Before you submit a new PR, please make sure that there is no lint error and none of the tests are failing.

If there is an issue opened for your PR, please refer that issue number in your PR.
