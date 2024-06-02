# Local development

## 1. Clone the repo

```bash
git clone git@github.com:julia-actions/install-juliaup.git
cd install-juliaup
```

## 2. Install NodeJS

### Unix, using `asdf` (recommended, but not required)

First, make sure that you have installed [`asdf`](https://asdf-vm.com/) on your local machine.

Then, `cd` to your clone of the repo and run the following command:

```bash
make unix-asdf-install
```

This will use `asdf` to install the correct version of NodeJS.

### Unix, but not using `asdf`

Instead of using `asdf`, you can instead choose to install NodeJS manually.

First, check the `.tool-versions` file in this repo, and see what version of NodeJS you need. Then, install that same version of NodejS on your local machine.

### Windows

`asdf` does not (currently) support Windows. So on Windows, you have to install NodeJS manually.

First, check the `.tool-versions` file in this repo, and see what version of NodeJS you need. Then, install that same version of NodejS on your local machine.

## 3. Working locally

First, `cd` to your clone of the repo. Now you can run the following commands:

```bash
make cleanall
make install-packages

make build
make pack

make clean
```

When you are ready, you can commit your changes and push them to your PR.

## 4. Making a new release

First, go to the [Releases](https://github.com/julia-actions/install-juliaup/releases) section of this repo and create a new release using the GitHub web interface.

Once you've created the new release, you need to update the `v2` tag to point to the new release. For example, suppose that the previous release was `v2.1.0`, and suppose that you just created the new release `v2.2.0`. You need to update the `v2` tag so that it points to `v2.2.0`. Here are the steps:

```bash
git clone git@github.com:julia-actions/install-juliaup.git
cd install-juliaup
git fetch --all --prune
git fetch --all --tags

# Delete the current v2 tag locally:
git tag -d v2

# Create a new v2 tag locally, where the new v2 tag will point to the
# release that you created in the previous step.
#
# Make sure to change `v2.2.0` to the actual value for the release
# that you just created in the previous step.
git tag v2 v2.2.0

# Force-push the new v2 tag:
git push --force origin v2
```
