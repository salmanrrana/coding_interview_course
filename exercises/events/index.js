// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    //take eventname and add it to the event object
    //want to make sure that it conatins a value of an array
    // if some value already exists(truth value is returned)
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      // if this is the first event added to the event object
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    //look at events object at events key
    if (this.events[eventName]) {
      for (let callback of this.events[eventName]) {
        callback();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    // delete property off of the object
    delete this.events[eventName];
  }
}

module.exports = Events;
