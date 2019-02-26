const workerpool = require("./index.js");
const path = require("path");

const pool = workerpool.pool(path.join(__dirname, "long-running-worker.js"));
Promise.all([
  pool.execWithMsg("longRunningWorker", [2], msg => {
    console.log("message from the first longRunningWorker", msg);
  }),
  pool.execWithMsg("longRunningWorker", [10], msg => {
    console.log("message from the second longRunningWorker", msg);
  })
]).then(([res1, res2]) => {
  console.log("results: res1", res1, "res2", res2);
});
