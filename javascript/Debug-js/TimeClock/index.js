// var clock = new Vue({
//     el: '#clock',
//     data: {
//         time: '',
//         date: ''
//     }
// // });

// var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// var timerID = setInterval(updateTime, 1000);
// updateTime();
// function updateTime() {
//     var cd = new Date();
//     clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
//     clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
// };

// function zeroPadding(num, digit) {
//     var zero = '';
//     for(var i = 0; i < digit; i++) {
//         zero += '0';
//     }
//     return (zero + num).slice(-digit);
// }

var hoursContainer = document.querySelector('.hours')
var minutesContainer = document.querySelector('.minutes')
var secondsContainer = document.querySelector('.seconds')
var tickElements = Array.from(document.querySelectorAll('.tick'))

var last = new Date(0)
last.setUTCHours(-1)

var tickState = true

function updateTime () {
  var now = new Date
  
  var lastHours = last.getHours().toString()
  var nowHours = now.getHours().toString()
  if (lastHours !== nowHours) {
    updateContainer(hoursContainer, nowHours)
  }
  
  var lastMinutes = last.getMinutes().toString()
  var nowMinutes = now.getMinutes().toString()
  if (lastMinutes !== nowMinutes) {
    updateContainer(minutesContainer, nowMinutes)
  }
  
  var lastSeconds = last.getSeconds().toString()
  var nowSeconds = now.getSeconds().toString()
  if (lastSeconds !== nowSeconds) {
    //tick()
    updateContainer(secondsContainer, nowSeconds)
  }
  
  last = now
}

function tick () {
  tickElements.forEach(t => t.classList.toggle('tick-hidden'))
}

function updateContainer (container, newTime) {
  var time = newTime.split('')
  
  if (time.length === 1) {
    time.unshift('0')
  }
  
  
  var first = container.firstElementChild
  if (first.lastElementChild.textContent !== time[0]) {
    updateNumber(first, time[0])
  }
  
  var last = container.lastElementChild
  if (last.lastElementChild.textContent !== time[1]) {
    updateNumber(last, time[1])
  }
}

function updateNumber (element, number) {
  //element.lastElementChild.textContent = number
  var second = element.lastElementChild.cloneNode(true)
  second.textContent = number
  
  element.appendChild(second)
  element.classList.add('move')

  setTimeout(function () {
    element.classList.remove('move')
  }, 990)
  setTimeout(function () {
    element.removeChild(element.firstElementChild)
  }, 990)
}

setInterval(updateTime, 100)