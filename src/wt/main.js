import {Worker} from "worker_threads";
import * as operationSystem from 'os'

const performCalculations = async () => {
    const numberOfWorkers = operationSystem.cpus().length;
  const result = [];
  for (let index = 10; index < 10 + numberOfWorkers; index++) {
    console.log("send to worker number: ", index);
    const worker = new Worker('./worker.js');
    worker.postMessage(index);
    worker.on('message', (data) => {
      result.push({ status: 'resolved', data: data });
    });
    worker.on('error', error => {
      result.push({ status: 'resolved', data: null });
    });
  }
  setTimeout(() => console.log(result), 3000);
  return result;
};

await performCalculations();