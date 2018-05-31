var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('task', function(callback) {
  runSequence('task-1', 'task-2', 'task-3', callback);
});

gulp.task('task-1', function() {
  console.log('called task-1');
});

gulp.task('task-2', ['task-2-1', 'task-2-2']);

gulp.task('task-2-1', function(callback) {
  console.log('called task-2-1');

  // 5秒間かかるタスク
  setTimeout(function(){
    console.log("\tcalled task-2-1_subtask");
    callback();
  }, 5000);
});

gulp.task('task-2-2', function(callback) {
  console.log('called task-2-2');

  // 3秒間かかるタスク
  setTimeout(function(){
    console.log("\tcalled task-2-2_subtask");
    callback();
  }, 3000);
});

gulp.task('task-3', function(callback) {
  console.log('called task-3');

  // 1秒間かかるタスク
  setTimeout(function(){
    console.log("\tcalled task-3_subtask");
    callback();
  }, 1000);

});

gulp.task('default', ['task-sync-fail-2']);
