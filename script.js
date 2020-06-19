var date = new Date();

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

$(".time-block").each(function () {
    var hour = parseInt(this.getAttribute("value"));
    var timeBlock = this;
    var textArea = timeBlock.children[1];

    if (hour < date.getHours()) {
        this.classList.add("past");
    }
    else if (hour > date.getHours()) {
        this.classList.add("future");
    }
    else {
        this.classList.add("present");
    }

    this.children[2].addEventListener("click", function () {
        localStorage.setItem(timeBlock.id, textArea.value);
    });

    var savedData = localStorage.getItem(timeBlock.id);
    if (savedData) {
        textArea.value = savedData;
    }
});