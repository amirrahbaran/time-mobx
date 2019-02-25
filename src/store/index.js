import { observable, action } from "mobx";

class Store {
  @observable time;
  
  constructor() {
    this.time = new Date();
  }
}

let store = new Store();
export default store;