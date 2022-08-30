install: # install
	npm ci

brain-games: # start
	node bin/brain-games.js

publish: # publish
	npm publish --dry-run

lint:
	npx eslint

brain-even:
	node bin/brain-even.js