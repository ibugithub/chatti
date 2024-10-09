export const readFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // Resolve the promise once the file is loaded
    reader.onload = (event) => {
      resolve(event.target.result);
    };

    // Reject the promise in case of an error
    reader.onerror = (error) => {
      reject(error);
    };

    // Start reading the file
    reader.readAsDataURL(file);
  });
};