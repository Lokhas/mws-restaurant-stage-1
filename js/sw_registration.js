if ("serviceWorker" in navigator) {
    navigator.serviceWorker
    .register("/sw.js")
    .then(registration => {
        //registration is successful
      console.log(`Service Worker registration is successful`);
    })
    .catch(error => {
      // registration failed
      console.log(`Service Worker registration failed, error is: ${error}`);
    });
} 