import toDoList from './modules/toDoList';
import watch from './modules/watch';

window.addEventListener("DOMContentLoaded", () => {
    watch({
        daySelector: '#day',
        monthSelector: '#month',
        yearSelector: '#year',
        hoursSelector: '#hour',
        minuteSelector: '#minute',
        secondSelector: '#second'
    });
    toDoList();

    const greetings = document.querySelector('.greetings');
    setInterval(() => greetings.style.opacity = '0',1500);
    setInterval(() => greetings.style.display = 'none',2000);

});