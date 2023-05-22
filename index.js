function submitData(name, email) {
 return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
   "Content-type": "application/json",
   Accept: "application/json",
  },
  body: JSON.stringify({ name: name, email: email }),
 })
  .then((response) => response.json())
  .then((data) => {
   const userId = data.id;
   appendUserId(userId);
  })
  .catch((error) => {
   appendErrorMessage(error.message);
  });
}

function appendUserId(userId) {
 const userIdElement = document.createElement('p');
 userIdElement.textContent = `User ID: ${userId}`;

 const main = document.querySelector('main');
 main.appendChild(userIdElement);
}

function appendErrorMessage(errorMessage) {
 const errorElement = document.createElement('p');
 errorElement.textContent = `Error: ${errorMessage}`;

 const main = document.querySelector('main');
 main.appendChild(errorElement);
}




