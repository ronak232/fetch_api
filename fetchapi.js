console.log("To Fetch the data click the fetch button.");

let data = document.getElementById("btn").addEventListener("click", () => {
  let url = "https://random-data-api.com/api/v2/users";
  fetch(url)
    //First is that promise is in the pending state .
    .then((resp) => {
      return resp.json();
    })
    // if the data is successfully fetch the data the
    .then((data) => {
      console.log(data);
    })
    // if the data caught some error then move to reject state.
    .catch((error) => {
      if (error === 404) {
        console.log("The api is not valid.", error);
      }
    });
    setTimeout(() => {
      console.log("Fetched data Sucessfully!");
    }, 3000);
});

// fetchData();

