function watch({hoursSelector, minuteSelector, secondSelector, daySelector, monthSelector, yearSelector,}) {
    const hours = document.querySelector(hoursSelector),
          minute = document.querySelector(minuteSelector),
          second = document.querySelector(secondSelector),
          day = document.querySelector(daySelector),
          month = document.querySelector(monthSelector),
          year = document.querySelector(yearSelector);

    function getClock() {
        const date = new Date();

        return {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
    }

    function getDate() {
        const date = new Date();

        return {
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        };
    }

    function serZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function updateDate() {
        const date = getDate();
        day.textContent = serZero(date.day);
        month.textContent = serZero(date.month);
        year.textContent = date.year;
    }

    function updateClock() {
        const time = getClock();
        let hourNum = serZero(time.hour),
            minuteNum = serZero(time.minute),
            secondNum = serZero(time.second);
        hours.textContent = hourNum;
        minute.textContent = minuteNum;
        second.textContent = secondNum;
        if(hourNum === '00' && minuteNum === '00' && secondNum === '00') {
            updateDate();
        }
    }

    updateDate();
    const clock = setInterval(updateClock, 1000);
    stopTime();

    function stopTime() {
        if (document.documentElement.clientWidth <= 576) {
            clearInterval(clock);
        }
    }

    window.addEventListener('resize', stopTime)
    
}

export default watch;