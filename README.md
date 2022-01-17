# Product Customize App

This repo contains an Product Customization App, build in Vue 3, with component tests written with vue-test-utils and Jets, and using Pinia Store for state management.

### [Online Demo](https://product-customize.vercel.app/)

### 1. Project Setup

If you want to experiment with running this project in Continous Integration, cloned it first.

For that run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/im-dalex/ProductCustomize.git
## cd into the cloned repo
cd product-customize-app
## install the node_modules
npm install
## start the local webserver
npm run serve
```

The `npm run serve` script will spawn a webserver on port `3000` which hosts the Product Customize app.

You can verify this by opening your browser and navigating to: [`http://localhost:3000`](http://localhost:3000)

You should see the Product Customize app up and running.

### 2. Run tests

After setup this project, run these commands to manage the test suite:

```bash
## update the components snapshots
npm run test:snapshot
## run unit tests
npm run test:unit
## run a specific component test
npm run test:unit <component-name>
## collect tests coverage
npm run test:coverage
```
