const ROOT_TABLE = document.getElementById("result");
const MARK_AUTO_BLOCK = document.getElementById("mark");

const adapter = function (objectAuto) {
  return {
    id: objectAuto.Id || objectAuto.id,
    title: objectAuto.Title || objectAuto.title,
    data: objectAuto.Data || objectAuto.data
  };
};

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
  console.log(data)
  data.map((elem) => {
    const adaptedElem = adapter(elem);
    MARK_AUTO_BLOCK.innerHTML += `
    <tr class="table__row table__row--blue">
        <td class="table__cell">
            ${adaptedElem.title}
        </td>
    </tr>`;

    const markAutoTableRow = document.createElement("tr");
    markAutoTableRow.className = "table__row";

    adaptedElem.data.map((cell) => {
      const tableDataCell = document.createElement("td");
      tableDataCell.className = "table__cell";
      const span = document.createElement("span");
      span.innerText = cell;
      tableDataCell.appendChild(span);
      return markAutoTableRow.appendChild(tableDataCell);
    });

    return ROOT_TABLE.appendChild(markAutoTableRow);
  });
});
