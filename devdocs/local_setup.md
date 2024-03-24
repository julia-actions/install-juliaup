# Local development

## 1. Install NodeJS

### Unix

First, make sure that you have installed [`asdf`](https://asdf-vm.com/) on your local machine.

Then, run the following command:

```bash
make unix-asdf-install
```

This will use `asdf` to install the correct version of NodeJS.

### Windows

`asdf` does not support Windows. So on Windows, you have to install NodeJS manually.

First, check the `.tool-versions` file in this repo, and see what version of NodeJS you need. Then, install that same version of NodejS on your local machine.

## 2. Working locally

```bash
git clone git@github.com:julia-actions/install-juliaup.git
cd install-juliaup

# Only on Unix:
# make unix-asdf-install

make cleanall
make install-packages

make build

make pack

make clean
```
