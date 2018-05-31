var gulp = require('gulp');

gulp.task('task', ['task-1', 'task-2', 'task-3']);

gulp.task('task-1', function() {
  console.log('called task-1');
});

gulp.task('task-2', ['task-2-1', 'task-2-2']);

gulp.task('task-2-1', function() {
  console.log('called task-2-1');

  // 5秒間かかるタスク
  setTimeout(function(){
    console.log("\tcalled task-2-1_subtask");
  }, 5000);
});

gulp.task('task-2-2', function() {
  console.log('called task-2-2');

  // 3秒間かかるタスク
  setTimeout(function(){
    console.log("\tcalled task-2-2_subtask");
  }, 3000);
});

gulp.task('task-3', function() {
  console.log('called task-3');

  // 1秒間かかるタスク
  setTimeout(function(){
    console.log("\tcalled task-3_subtask");
  }, 1000);

});

gulp.task('default', ['task-normal']);
