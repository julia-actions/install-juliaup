# Local development

## 1. Clone the repo

```bash
git clone git@github.com:julia-actions/install-juliaup.git

cd install-juliaup
```

## 2. Install NodeJS

### Using `mise` (recommended, but not required)

First, make sure that you have installed [`mise`](https://mise.jdx.dev) on your local machine.

Then, `cd` to your clone of the repo and run the following command:

```bash
make mise-install
```

This will use `mise` to install the correct version of NodeJS.

### Not using `mise`

Instead of using `mise`, you can instead choose to install NodeJS manually.

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
