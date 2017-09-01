//jshint strict: false
module.exports = function(config) {
    config.set({

        basePath: './app',

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/lodash/dist/lodash.js',
            'bower_components/jquery/dist/jquery.js',
            'modules/**/*.js',
            'modules/**/*.html'
        ],

        preprocessors: {
            "**/*.html": ["ng-html2js"]
        },

        ngHtml2JsPreprocessor: {
            moduleName: "app.templates"
        },

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
