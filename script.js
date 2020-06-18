var date = new Date();
console.log(date.getHours());

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