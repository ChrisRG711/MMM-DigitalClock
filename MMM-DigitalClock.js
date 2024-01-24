Module.register("MMM-DigitalClock", {
  defaults: {},

  getStyles: function () {
    return ["modules/MMM-DigitalClock/MMM-DigitalClock.css"];
  },

  start: function () {
    this.updateClock();
  },

  updateClock: function () {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  },

  updateTime: function () {
    // Your existing JavaScript logic here
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    let hh = document.getElementById('hh');
    let ss = document.getElementById('ss');
    let mm = document.getElementById('mm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? 'PM' : 'AM';

    if (h > 12) {
      h = h - 12;
    }
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    document.getElementById('h_dot').style.transform = `rotate(${h * 30}deg)`;
    document.getElementById('m_dot').style.transform = `rotate(${m * 6}deg)`;
    document.getElementById('s_dot').style.transform = `rotate(${s * 6}deg)`;
  },

  getDom: function () {
    const wrapper = document.createElement("div");
    wrapper.className = "digital-clock-container";

    const timeContainer = document.createElement("div");
    timeContainer.className = "time";
    timeContainer.id = "time";

    // Insert your actual HTML structure here
    timeContainer.innerHTML = `
      <div class="circle" style="--clr: #ff2972">
        <div id="h_dot" class="dots dots__hours"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="hh"></circle>
        </svg>
        <div class="hours" id="hours">00</div>
      </div>
      <div class="circle" style="--clr: #fee800">
        <div id="m_dot" class="dots dots__minutes"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="mm"></circle>
        </svg>
        <div class="minutes" id="minutes">00</div>
      </div>
      <div class="circle" style="--clr: #04fc43">
        <div id="s_dot" class="dots dots__seconds"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="ss"></circle>
        </svg>
        <div class="seconds" id="seconds">00</div>
      </div>
      <div class="ap">
        <div class="ampm" id="ampm">AM</div>
      </div>
    `;

    wrapper.appendChild(timeContainer);
    return wrapper;
  },
});
