// Function to fetch random user data
function fetchRandomUser(callback) {
    fetch('https://randomuser.me/api/')
      .then(response => response.json()) // Parse JSON from the response
      .then(data => {
        // Pass the data to the callback function
        callback(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }
  
  // Callback function to handle the fetched data
  function handleUserData(data) {
    console.log('User data:', data);
    const user = data.results[0];
    console.log(`Email: ${user.email}`);
    console.log(`Location: ${user.location.city}, ${user.location.country}`);
  }
  
  // Call the function and pass the callback
  fetchRandomUser(handleUserData);
  