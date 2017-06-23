## React-Redux-Webpack Sails Setup

### File Structure
* Frontend React-Redux views are stored in **app** directory

* **app/index.js** is the root component. It is responsible for rendering our react application

* **app/index.html** is only used in development. It should be the same as index.handlebars with layout.handlebars in views directory. In production, **views/index|layout.handlebars** will be rendered by **api/controllers/appController.js**. Routes for appController can be found in  config/routes.js.

* Frontend routing is found in App.jsx. Backend server will serve index.html for any given routes except admin/cms routes, browser will detect the current path and render the right view based on frontend routing.

* Assets remained stored in the respective **assets** directory.

* Frontend styling is done within **app/scss** directory and needs to be required in its respective component in order to be included.

### Webpack Configuration

* There are two webpack configurations: Development & Production. Webpack configurations can be found in **webpack_config** directory.

* In development, running ```npm run dev ``` would start both webpack-dev-server and sails server would start. Webpack-dev-server would serve up index.html with bundle.js in memory and hotloading & browsersync will be enabled.

* In production, running ```npm run start``` would only run the sails server. Webpack would bundle our app in **assets/js/bundle.js**. Bundle.js is being used in index.handlebars.

* Webpack is a bundler that bundles not only javascript, but sass, files (images), html and more. It is configured using loaders & plugins.

    * Babel loader uses .babelrc. Dev settings in babelrc is enabled by setting BABEL_ENV=dev.

    * Eslint loader uses rules set in .eslintrc.json. If you wish to exclude certain rules from the linter, simply add the rules in that json file.

### React-Redux Architecture
