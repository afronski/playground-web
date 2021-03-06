/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    "lint": {
      "files": ["grunt.js", "src/*.js", "test/*.js"]
    },

    "qunit": {
      "files": ["test/*.html"]
    },

    "qunit-cov": {
      "test": {
        "minimum": 0.55,
        "srcDir": "src",
        "depDirs": ["test"],
        "outDir": "test-results",
        "testFiles": ["test/*.html"]
      }
    },

    "watch": {
      "files": "<config:lint.files>",
      "tasks": "lint qunit"
    },

    "jshint": {
      "options": {
        "curly": true,
        "eqeqeq": true,
        "immed": true,
        "latedef": true,
        "newcap": true,
        "noarg": true,
        "sub": true,
        "undef": true,
        "boss": true,
        "eqnull": true,
        "browser": true
      },
      
      "globals": {}
    }
  });

  grunt.loadNpmTasks("grunt-qunit-cov");
  grunt.registerTask("default", "lint qunit qunit-cov");
};
