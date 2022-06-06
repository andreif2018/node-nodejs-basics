import { Worker, parentPort } from 'worker_threads';
const message = 'message';
// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const worker = new Worker('./worker.js');
worker.postMessage(Math.floor(Math.random() * 10));
worker.on(message, (result) => {
  console.log(result);
});

export const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  parentPort.on(message, (inputData) => {
    parentPort.postMessage(
        inputData.map(content => {
          content = JSON.parse(content);
          return nthFibonacci(content);
        }));
  });
};

sendResult();
