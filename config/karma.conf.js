basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'Qards/js/angular/angular.js',
  'Qards/js/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'Qards/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
