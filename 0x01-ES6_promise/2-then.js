export default function handleResponseFromAPI(promise) {
  promise.then(() => ({
    status: 202,
    body: 'success',
  }))
    .catch()
    .finally(() => {
      console.log('Got a response from the API');
    });
}
