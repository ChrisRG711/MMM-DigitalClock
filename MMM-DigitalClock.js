Module.register("MMM-DigitalClock", {
  // Default module configuration
  defaults: {
    updateInterval: 1000, // Update interval in milliseconds (1 second)
  },

  // Override start method.
  start: function () {
    this.updateClock();
    setInterval(() => {
      this.updateClock();
    }, this.config.updateInterval);
  },

  // Function to update the clock
  updateClock: function () {
    let hours = this.formatTime(new Date().getHours());
    let minutes = this.formatTime(new Date().getMinutes());
    let seconds = this.formatTime(new Date().getSeconds());
    let ampm = hours >= 12 ? 'PM' : 'AM';

    this.updateDom(0); // Trigger redrawing of the module

    // Your existing code for updating the clock visuals
    // ...

    this.updateDom(1000); // Redraw again after 1 second
  },

  // Function to format time (add leading zeros)
  formatTime: function (time) {
    return time < 10 ? '0' + time : time;
  },

  // Override dom generator.
  getDom: function () {
    // Create and return the DOM structure of your clock
    // You can use document.createElement, appendChild, etc.
    // ...

    let wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <div class="time" id="time">
        <!-- Your existing HTML structure goes here -->
        <div class="hours" id="hours">${this.hours}</div>
        <div class="minutes" id="minutes">${this.minutes}</div>
        <div class="seconds" id="seconds">${this.seconds}</div>
        <div class="ampm" id="ampm">${this.ampm}</div>
        <!-- Additional elements if needed -->
      </div>
    `;

    return wrapper;
  },
});
