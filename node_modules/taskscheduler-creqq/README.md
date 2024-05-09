```markdown
# Task Scheduler

A simple task scheduling library for Node.js applications.

## Installation

You can install the Task Scheduler package via npm:

```bash
npm install task-scheduler-js
```

## Usage

```javascript
const TaskScheduler = require('task-scheduler-js');

// Create a new instance of TaskScheduler
const scheduler = new TaskScheduler();

// Define a task function
function myTask() {
  console.log('Task executed at:', new Date());
}

// Schedule the task to run 5 seconds from now
const fiveSecondsFromNow = Date.now() + 5000;
scheduler.scheduleTask(myTask, fiveSecondsFromNow);

// Cancel all tasks
// scheduler.cancelAllTasks();
```

## API

### `TaskScheduler()`

Creates a new instance of TaskScheduler.

### `scheduleTask(task, time)`

Schedules a task to run at the specified time.

- `task`: The task function to be executed.
- `time`: The time at which the task should be executed (in milliseconds since the Unix epoch).

### `cancelAllTasks()`

Cancels all scheduled tasks.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
