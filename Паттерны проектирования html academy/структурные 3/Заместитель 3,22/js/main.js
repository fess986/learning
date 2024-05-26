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

// напишем класс-прокси, который будет принимать в себя ф-цию и возвращать её только при определенных условиях.
class SequrityProxy {

  validate(func) {  // ф-я проверки по времени работы
    const timeNow = new Date().getHours();
    if (timeNow > 5 && timeNow < 21) { 
      return func
    } else {
      alert('Условия не выполнены')
    }
  }

  constructor(func){
    this.proxy = this.validate(func); // помещаем эту функцию в свойство
  }
}

const sequrityProxyGetData = new SequrityProxy(getDataFromServer); // проксируем

// вызываем проксирующий метод который уже решает возвращать функцию или нет
sequrityProxyGetData.proxy(`${window.location.origin}/data.json`, function (err, data) {
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
