const workerpool = require("./index.js");

function longRunningTaskWithStatus(n, send) {
  return new Promise(resolve => {
    send({ msg: `recieved input parameter ${n}`, status: 0 });
    setTimeout(() => {
      send({
        msg: `status after one second of execution with parameter ${n}`,
        status: 50
      });
    }, 1000);
    setTimeout(() => {
      send({
        msg: `status after 2 seconds of execution with parameter ${n}`,
        status: 80
      });
    }, 2000);
    setTimeout(() => {
      resolve({ msg: `done task with parameter ${n}`, status: 100 });
    }, 3000);
  });
}

workerpool.worker({ longRunningWorker: longRunningTaskWithStatus });
