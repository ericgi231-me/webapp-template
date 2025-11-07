import { HELLO_WORLD } from "./constants.js";

class MessageCreator {
  private msg: string;

  constructor(msg: string) {
    this.msg = msg;
  }

  public getMessage(): string {
    return this.msg;
  }

  public getHelloWorld(): string {
    return HELLO_WORLD;
  }
}

export default MessageCreator;