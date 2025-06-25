var startDate = new Date(2023, 12, 7)
function updateCounter() {
    var today = new Date();
    var difference = today - startDate;
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var weeks = Math.floor(days / 7);
    var startYear = startDate.getFullYear(); 
    var startMonth = startDate.getMonth();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    var months = (currentYear - startYear) * 12 + (currentMonth - startMonth);
    document.getElementById("dayCounter").innerHTML = "Days: " + days;
    document.getElementById("weekCounter").innerHTML = "Weeks: " + weeks;
    document.getElementById("monthCounter").innerHTML = "Months: " + months;
}

updateCounter();
setInterval(updateCounter, 1000);