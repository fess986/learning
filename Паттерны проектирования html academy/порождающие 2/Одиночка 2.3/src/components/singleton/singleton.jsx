class Singleton {
  pages = {
    main: 0,
    buy: 0,
  }


  constructor(){
    // if (typeof Singleton.instanceExists === 'object') {
    if (!!Singleton.instanceExists) {
      return Singleton.instanceExists
    }
    Singleton.instanceExists = this;
    return Singleton.instanceExists; 
  }

  increment(page) {
    this.pages[page]++
  }

  getNumber() {
    return this.pages.buy + this.pages.main;
  }

}

export default Singleton;