install:
	npm install

run:
	npm run babel-node -- ./src/bin/page_loader.js $(1)

lint:
	npm run eslint ./

test:
	npm test

test-watch:
	npm run test-watch

build:
	rm -rf dist
	npm run build

publish:
	npm publish

.PHONY: test