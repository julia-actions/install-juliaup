# Local development

## 1. Clone the repo

```bash
git clone git@github.com:julia-actions/install-juliaup.git
cd install-juliaup
```

## 2. Install NodeJS

### Unix

First, make sure that you have installed [`asdf`](https://asdf-vm.com/) on your local machine.

Then, `cd` to your clone of the repo and run the following command:

```bash
make unix-asdf-install
```

This will use `asdf` to install the correct version of NodeJS.

### Windows

`asdf` does not support Windows. So on Windows, you have to install NodeJS manually.

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
