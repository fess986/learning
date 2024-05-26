import { adapter } from "./adapter.js";

const ROOT_TABLE = document.getElementById("result");

const getDataFromServer = function (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    const status = xhr.status;
    if (status === 200) {
      callback(null, JSON.parse(xhr.response));
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

getDataFromServer(`${window.location.origin}/data.json`, function (err, data) {
  

  data.map((elem) => {
    // console.log(elem)

    const adaptedData = adapter(elem);
    console.log(adaptedData);

    return (ROOT_TABLE.innerHTML += `
      <tr class="table__row table__row--blue">
          <td>
              <div class="checkbox">
                <input type="checkbox" name="checkbox-1" id="checkbox-1">
                <label for="checkbox-1"></label>
              </div>
          </td>
          <td>${adaptedData.Id}</td>
          <td>${adaptedData.state}</td>
          <td>${adaptedData.counterparty}</td>
          <td>${adaptedData.manager}</td>
      </tr>`);
  });
});
