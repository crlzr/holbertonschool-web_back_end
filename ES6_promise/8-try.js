export default function divideFunction(numerator, denominator) {
  const executorFunction = (resolve, reject) => {
    if (denominator !== 0) {
      return resolve(numerator / denominator);
    }
    return reject(Error('cannot divide by 0'));
  };
  const myPromise = new Promise(executorFunction);
  return myPromise;
}
