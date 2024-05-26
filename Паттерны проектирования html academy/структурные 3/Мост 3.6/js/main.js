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
    return (ROOT_TABLE.innerHTML += `
      <tr class="table__row table__row--blue">
          <td>
              <div class="checkbox">
                <input type="checkbox" name="checkbox-1" id="checkbox-1">
                <label for="checkbox-1"></label>
              </div>
          </td>
          <td>${elem.Id}</td>
          <td>${elem.state}</td>
          <td>${elem.counterparty}</td>
          <td>${elem.manager}</td>
      </tr>`);
  });
});
