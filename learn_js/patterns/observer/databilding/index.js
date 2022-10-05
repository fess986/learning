const output = document.querySelector('span');
const input = document.querySelector('input');
const button = document.querySelector('button');

// пример двусторонней связи реализованный при помощи геттера/сеттера
const dataBilding = {
    _value: '',

    get value() {
        return this._value;
    },

    set value(newValue) {
        this._value = newValue;
        output.textContent = this._value;
        input.value = this._value;
        console.log(output)
    },
}

input.addEventListener('input', (evt) => {
  dataBilding.value = evt.target.value;
})

button.addEventListener('click', () => {
  dataBilding.value = 'hiiiiiiiiiii';
})


