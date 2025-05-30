import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(120 * 1000); // ⏱️ 120 seconds
