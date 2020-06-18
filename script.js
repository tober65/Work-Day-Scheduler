var date = new Date();

const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date ) 

$("#currentDay").text(`${day}-${month}-${year }`);

$(".time-block").each(function () {
    var hour = parseInt(this.getAttribute("value"));

    if (hour < date.getHours()) {
        this.classList.add("past");
    }
    else if (hour > date.getHours()) {
        this.classList.add("future");
    }
    else {
        this.classList.add("present");
    }
})