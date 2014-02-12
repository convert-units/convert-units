var t = new jake.TestTask('convert-units', function () {
  this.testFiles.include('test/*');
});

var d = new jake.NpmPublishTask('convert-units', function () {
  this.packageFiles.include([
    'lib/**'
  , 'test/*'
  , 'Jakefile'
  , 'package.json'
  , 'Readme.md'
    ]);
});

