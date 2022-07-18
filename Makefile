-include .env
export

YARN   ?= npx yarn

PACKAGE_NAME := $(shell node -p "require('./package.json').name")

.PHONY: install
stamp-yarn install:
	$(YARN) install
	# Install pre commit hook
	$(YARN) husky install
	touch stamp-yarn


clean-dist:
	rm -Rf dist/


.PHONY: clean
clean: clean-dist
	rm -f stamp-yarn
	rm -Rf node_modules/
	rm -Rf release/


.PHONY: bundle
bundle: stamp-yarn
	$(YARN) run build


# If you want to release on GitHub, make sure to have a .env file with a GITHUB_TOKEN.
# Also see:
#	https://github.com/settings/tokens
#	and https://github.com/release-it/release-it/blob/master/docs/github-releases.md#automated


release-zip: clean-dist bundle
	$(eval BUNDLE_NAME := $(subst @patternslib/,,$(subst @plone/,,$(PACKAGE_NAME))))
	$(eval PACKAGE_VERSION := $(shell node -p "require('./package.json').version"))
	@echo Creating $(BUNDLE_NAME)-bundle-$(PACKAGE_VERSION).zip
	mkdir -p release/$(BUNDLE_NAME)-bundle-$(PACKAGE_VERSION)
	-cp -R dist/* release/$(BUNDLE_NAME)-bundle-$(PACKAGE_VERSION)
	cd release/ && zip -r $(BUNDLE_NAME)-bundle-$(PACKAGE_VERSION).zip $(BUNDLE_NAME)-bundle-$(PACKAGE_VERSION)/


.PHONY: release-major
release-major:
	make release-zip && \
		npx release-it major && \
		npx release-it --github.release --github.update --github.assets=release/*.zip --no-github.draft --no-increment --no-git --no-npm && \
		git checkout CHANGES.md

.PHONY: release-minor
release-minor:
	make release-zip && \
		npx release-it minor && \
		npx release-it --github.release --github.update --github.assets=release/*.zip --no-github.draft --no-increment --no-git --no-npm && \
		git checkout CHANGES.md

.PHONY: release-patch
release-patch:
	make release-zip && \
		npx release-it patch && \
		npx release-it --github.release --github.update --github.assets=release/*.zip --no-github.draft --no-increment --no-git --no-npm && \
		git checkout CHANGES.md

.PHONY: prerelease-alpha
prerelease-alpha: clean install
	make release-zip && \
		npx release-it --preRelease=alpha && \
		npx release-it --github.release --github.update --github.assets=release/*.zip --no-github.draft --no-increment --no-git --no-npm && \
		git checkout CHANGES.md

.PHONY: prerelease-beta
prerelease-beta: clean install
	make release-zip && \
		npx release-it --preRelease=beta && \
		npx release-it --github.release --github.update --github.assets=release/*.zip --no-github.draft --no-increment --no-git --no-npm && \
		git checkout CHANGES.md
