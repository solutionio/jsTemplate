var config = exports;

config['Browser'] = {
  environment: 'browser',
  sources: [
    'components/jquery/jquery.js', 
    'components/promiser/promiser.js',
    'travis.js',
  ],
  tests: [
    'tests/*.js',
  ]
};

