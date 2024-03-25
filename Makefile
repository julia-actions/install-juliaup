# This is the default target:
.PHONY: pack
pack:
	npm run build
	npm run pack

# build does `npm run build`, but does not run `npm run pack`
.PHONY: build
build:
	npm run build

.PHONY: clean
clean:
	rm -rf node_modules/

.PHONY: cleanall
cleanall:
	rm -rf node_modules/
	rm -rf lib/
	rm -rf dist/

# .PHONY: check-lint
# check-lint:
# 	npx eslint .

# .PHONY: fix-lint
# fix-lint:
# 	npx eslint --fix .

.PHONY: install-packages
install-packages:
	rm -rf node_modules/
	npm ci

# asdf does not support Windows.
# On Windows, users need to install the correct version of NodeJS themselves.
.PHONY: unix-asdf-install
unix-asdf-install:
	asdf plugin add nodejs # update this list when we add more tools to `.tool-versions`
	asdf install
