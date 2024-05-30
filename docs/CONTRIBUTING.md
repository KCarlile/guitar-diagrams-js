# Guitar Diagrams JS contributing guide <!-- omit in toc -->

Thank you for your interest in contributing to Guitar Diagrams JS! As an open source project, contributions to the project will be attributed to contributors investing your time in contributing to our project! Any contribution you make will be reflected on the project's [README.md](../README.md) page. :sparkles:

Read our [Code of Conduct](CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

## New contributor guide

To get an overview of the project, read the [README](../README.md) file. Here are some resources to help you get started with open source contributions:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

## Getting started

Start by familiarizing yourself with the documentation, including:

- [`docs/index.md`](./index.md): API usage documentation
- [`docs/examples/index.html`](./examples/index.html): usage examples
- [`docs/CODE_OF_CONDUCT.md`](docs/CODE_OF_CONDUCT.md): code of conduct for contributing members

There are many ways you can contribute to the project, including opportunities that do not involve code, such as testing the project or reviewing documentation.

### Issues

#### Create a new issue

If you find a bug or have a feature request, first [search to see if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). If a related issue doesn't exist, you can open a new issue using a relevant [issue form](https://github.com/KCarlile/guitar-diagrams-js/issues/new/choose).

#### Solve an issue

Scan through our [existing issues](https://github.com/KCarlile/guitar-diagrams-js/issues) to find one that interests you. You can narrow down the search using `labels` as filters. See "[Label reference](https://docs.github.com/en/contributing/collaborating-on-github-docs/label-reference)" for more information.
As a general rule, we don't assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.

### Make Changes

#### Make changes locally

1. Fork the repository.
   - Using GitHub Desktop:
     - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
     - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!
     - Using the command line:
        - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.
1. You can use whatever local development environment you prefer, but we recommend using [Microsoft VS Code](https://code.visualstudio.com/) with the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for easy previews.
1. Create a working branch and start with your changes!

### Commit your update

Commit the changes once you are happy with them. Don't forget to use the "[Self review checklist](https://docs.github.com/en/contributing/collaborating-on-github-docs/self-review-checklist)" to speed up the review process :zap:.

### Pull Request

When you're finished with the changes, create a pull request (PR) from _your fork's branch_ into the main project's `develop` branch.

- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.
Once you submit your PR, a code owner will review your proposal. (Also, please update the issue with a comment and a link to your PR.) We may ask questions or request additional information.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- If you run into any merge issues, checkout this [git tutorial](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.
