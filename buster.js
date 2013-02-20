var config = exports;

config['Browser'] = {
  environment: 'browser',
  sources: [
    'components/jquery/jquery.js', 
    'components/async-load/load.js', 
    'JSTemplate.js',
    'JSTemplate.load.js'
  ],
  tests: [
    'tests/*.js',
  ]
};

