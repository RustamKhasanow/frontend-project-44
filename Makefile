install: # install
	npm ci

brain-games: # start
	node bin/brain-games.cjs

publish: # publish
	npm publish --dry-run