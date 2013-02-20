var config = exports;

config['Browser'] = {
  environment: 'browser',
  sources: [
    'components/jquery/jquery.js', 
    'JSTemplate.js',
    'JSTemplate.load.js'
  ],
  tests: [
    'tests/*.js',
  ]
};

