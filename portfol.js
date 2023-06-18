let timer = document.querySelector('.timer');
let timerhi = document.querySelector('.timerhi');
let logo = document.querySelector('.logo');
let secret = document.querySelector('.secret');
let levo = document.querySelector('.levo');
let pravo = document.querySelector('.pravo');
let slide = document.querySelector('.slider');
let hour = timer.innerHTML;
logo.addEventListener('click', function() {
  secret.style.display = 'block';
  setTimeout (function() {
    secret.style.display = 'none';
  }, 2000);
})
class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
        timer.innerHTML = output;
        console.log(output);
        if (hours >= 5 && hours <= 12) {
          timerhi.innerHTML = 'Доброе утро';
        } else if (hours >= 13 && hours <= 17) {
          timerhi.innerHTML = 'Добрый день';
        } else if (hours >= 18 && hours <= 21) {
          timerhi.innerHTML = 'Добрый вечер';
        } else if (hours >= 22 || hours <= 4) {   

          timerhi.innerHTML = 'Доброй ночи';
    } 
  }
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }

  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
  levo.addEventListener('click', function Levo(event) {
    changeSlide('next');
  });
  
  pravo.addEventListener('click', function Pravo(event) {
    changeSlide('prev');
  });
  let w = 0;
  function changeSlide(direction) {
    if (direction === 'next') {
      if (w === -3400) {
        w = 0;
      } else {
        w -= 1700;
      }
    } else if (direction === 'prev') {
      if (w === 0) {
        w = -3400;
      } else {
        w += 1700;
      }
    }
    slide.style.left = w + 'px';
  }
setInterval(function() {
    changeSlide('next');
  }, 4000);
