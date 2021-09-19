# FashionShop

```
ng new fashion-shop
```

- select Yes for the routing
- select scss

# Install eslint

https://github.com/angular-eslint/angular-eslint#readme

```
ng add @angular-eslint/schematics
```

## Verify

```
ng lint
```

# Install prettier

https://prettier.io/docs/en/install.html

```
yarn add --dev --exact prettier
echo {}> .prettierrc.json
```

create a .prettierignore

```
# Ignore artifacts:
build
coverage
```

## Verify

```
yarn prettier --write .
```

# Install husky (commit hook)

```
yarn add --dev husky
```

## Install pretty-quick to run with husky

https://prettier.io/docs/en/precommit.html#option-2-pretty-quickhttpsgithubcomazzpretty-quick

```
npx husky-init # add --yarn2 for Yarn 2
yarn add --dev pretty-quick
yarn husky set .husky/pre-commit "npx pretty-quick --staged"
```
