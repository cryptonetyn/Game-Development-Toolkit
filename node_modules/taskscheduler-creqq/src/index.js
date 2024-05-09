// task-scheduler.js

class TaskScheduler {
    constructor() {
      this.tasks = [];
      this.timer = null;
    }
  
    scheduleTask(task, time) {
      const taskObject = { task, time };
      this.tasks.push(taskObject);
      this.tasks.sort((a, b) => a.time - b.time);
      this.startScheduler();
    }
  
    startScheduler() {
      if (!this.timer && this.tasks.length > 0) {
        const currentTime = Date.now();
        const nextTaskTime = this.tasks[0].time;
        const delay = Math.max(0, nextTaskTime - currentTime);
        this.timer = setTimeout(() => this.runTask(), delay);
      }
    }
  
    runTask() {
      const taskObject = this.tasks.shift();
      const task = taskObject.task;
      task();
      this.timer = null;
      this.startScheduler();
    }
  
    cancelAllTasks() {
      clearTimeout(this.timer);
      this.tasks = [];
      this.timer = null;
    }
  }
  
  module.exports = TaskScheduler;
  