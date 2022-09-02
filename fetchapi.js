// This is to get data from api.

console.log("To Fetch the data click the fetch button.");
let dataToshow = document.getElementById("output");

let data = document
  .getElementById("btn")
  .addEventListener("click", async () => {
    let url = "https://random-data-api.com/api/v2/users";
    await fetch(url)
      //First is that promise is in the pending state. Once the api response is sucessful.
      .then((resp) => {
        let jsonData = resp.json();
        return jsonData;
      })
      // if the data is successfully fetch the data the
      .then((data) => {
        console.log(JSON.stringify(data));

        let table = `
        <table>
        <th>
        <tr>
        <td>ID</td>
        <td>First Name</td>
        <td>Last Name</td>
        <td>E-Mail</td>
        </th>
        </tr>
        <tr>
        <td>${data.id}</td>
        <td>${data.first_name}</td>
        <td>${data.last_name}</td>
        <td>${data.email}</td>
        <td><img src = "${data.avatar}"></td>
        </tr>
        </table>
                                              `;
        dataToshow.innerHTML = table;

        setTimeout(() => {
          console.log("Fetched data Sucessfully!");
        }, 3000);
      })
      // if the data caught some error then move to reject state.
      .catch((error) => {
        if (error === 404) {
          console.log("The api is not valid.", error);
        }
      });
  });

// To post the data of api
