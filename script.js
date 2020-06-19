var date = new Date();

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

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