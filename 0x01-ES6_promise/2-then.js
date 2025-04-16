export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      return {
        status: 202,
        body: "success",
      };
    })
    .catch(() => {
      return { error };
    })
    .finally(() => {
      console.log("Got a response from the API");
    });
}
