// import React from 'react';

export const PageBuilder = {
  page: '',
  promoText: '', 
  setPromo(text) { // тут мы будем сеттить по необходимости текст промо акции
    this.promoText = text;
    return this;
  },
  renderForm(callback) { // тут мы запускаем рендер получая из внешнего кода коллбэк - который будет возвращать нужную вёрстку с вызванным нами параметром, в данном случае текстом промо-акции

    return callback(PageBuilder.promoText)
    // return <>{callback(PageBuilder.promoText)}</> // можно так и так. По сути мы и так возвращаем фрагмент
  },

}