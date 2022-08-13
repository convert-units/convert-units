# Contributing to `convert-units`

Thanks for taking the time and effort to contribute! 

## Getting started

    git clone https://github.com/convert-units/convert-units
    cd convert-units
    npm ci  # avoid using npm install

That's it! The project does not have a development server or anything like that.

## Creating a new issue

Whether it's for a bug, suggestion, feature request, please provide as much detail as possible.

### Bug

Please provide the following information in the body of the issue:

- Version of `convert-units` being used
- Code examples showing the issue
    - Using [codesandbox.io](https://codesandbox.io) is preferred
- Any other relevant information

### Features requests and suggestions

Please provide an explanation on why you'd like this feature and what it is meant to do. The more details the better!

## Before submitting a PR

Here are a few things to consider before submitting a PR:

- If you're submitting changes to the definitions (systems, measures, units, etc) then you can submit a PR without creating an issue.
- If you're looking to fix a bug or improve the code base (refactoring is an example), please submit an issue so that a discussion can be had. This way others (not just the maintainers) can have an opportunity to give their opinions on the matter.

## Submitting a PR

Before submitting a PR make sure the follow has been completed:

- The linter and formatter has been ran against your changes (see [Linting](#linting))
- Run all tests and that they all pass (see [Testing](#testing))
- All TS type checks pass (see [Typescript](#typescirpt))
- No changes to `package-lock.json` are included.
    - Only PRs meant to update the dependencies versions should contain changes to this file. And those updates should be the only changes in the PR.

If you're submitting new measures, systems, and/or units, please also provide resources for any conversions and units. This greatly speeds up the review process.

## Linting

To run the linter and formatter on the code base, run the following commands:

    npm run lint
    npm run format

> These should be ran before submitting a PR!

## Typescript

Any changes made should pass all types checks. You're editor on choice should be able to warn you about issues. Though, the check can be ran manually with the following command:

    npx tsc -p ./tsconfig.json --noEmit

> Note: `--noEmit` command flag is used to tell TS to only check the files and not to compile them.

## Testing

To run the tests use the following command:

    npm test

To run and watch the tests (makes testing new changes easier) use the following command:

    npm run test:watch
