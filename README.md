![Logo](docs/logo.png)

Contains:

* ES6 - 7 Support with Babel
* Routing
* Webpack hot reload
* Babel and Webpack production build
* Styled components
* eslint
* much more...

## Demo

![Logo](docs/demov2.gif)

## Run the app

    $ yarn install
    $ yarn run build
    $ yarn run start:dev

*The build step is needed even when running `start:dev` so the `webpack-dev-middleware` can fetch the static `index.html` file*

## Build the app
```yarn run build```

This will build the app into the `build/public` and your server to `build/lib` directory. The `build` directory will be located at the root of the project. It will contain all code ready for production.

After built, you can use ```yarn start``` in your production server.

## License

Licensed under <a href="http://siedler.mit-license.org/">The MIT License</a>
Redistributions of files must retain the above copyright notice.

## Author

Gabriel Siedler - gabrielsiedler[at]gmail.com
