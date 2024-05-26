import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

console.log('ass')

// создаем собственный компонент для показывания лоадера
Vue.component('loader', {
  template: `
  <div style='display: flex; justify-content: center; align-items: center;'>
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  `
})

new Vue({
  el: '#app',
  data: {
        form: {
          name: 'ass',
          value: '',
        },
        contacts: [],
        loading: false,
  },
  // по правильному вычисляемые значения в Vue определять в специальном поле computed
  computed: {
    canCreate() {
      return this.form.name.trim() && this.form.value.trim()
    }
  },
  methods: {
    async createContact() {
      
      const {...contact} = this.form;

      const newContact = await request('/app/contacts', 'POST', contact);
      console.log(newContact); // в итоге получаем contact с добавленным на сервере айдишником

      this.contacts.push(newContact)
      console.log(this.contacts)

      this.form.name = this.form.value = ''; // очищаем поля
    },
    async markContact(id) {
      
      const contact = this.contacts.find(cont => cont.id === id)
      
      
      const markedContact = await request(`/app/contacts/${id}`, 'PUT', {...contact, marked: 'true'}) // передаём уже измененные данные

      contact.marked = markedContact.marked; // синхронизируем с сервером

    },
    async removeContact(id) {
      await request(`/app/contacts/${id}`, 'DELETE') // передаем айдишник черес параметры запроса, можно было сделать через payload, но для разнообразия - так. 
      this.contacts = this.contacts.filter(cont => cont.id !== id)
    }
  },
  // этот метод запускается после маунта
  async mounted() {
    this.loading = true
    this.contacts = await request('/app/contacts') // мы пишем сокращенно по причине того, что мы работаем на том же порту что и сервер, если целеком, то можно написать https://localhost:3000/app/contacts
    this.loading = false;
  },
})

// напишем собственную мини-библиотеку для работы с REST-API запросами
async function request(url, method = 'GET', data = null) {
  try {

    const headers = {}
    let body

    if (data) {
      headers['Content-Type'] = 'application/json'
      body = JSON.stringify(data)
    }

    const response = await fetch(url, {
      method,
      headers,
      body
    });

    return await response.json();

  } catch(err) {
    console.warn('Error - ', err.message)
  }
}