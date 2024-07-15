// Function definition
export default function getFullResponseFromAPI(success) {
  const executorFunction = (resolve, reject) => {
    if (success === true) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  };

  const myPromise = new Promise(executorFunction);
  return myPromise;
}

/* export default function getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolve, reject) => {
    if (success === true) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });

  return myPromise; */
