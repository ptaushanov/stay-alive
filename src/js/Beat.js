import EventEmiter from "eventemitter3";
export default class Beat extends EventEmiter{
  static get events() {
    return {
      BIT: "bit",
    };
  }

  constructor() {
    super();
    setInterval(() => {
      console.log("bit");
      this.emit(Beat.events.BIT)
    }, 600);
  }

}
