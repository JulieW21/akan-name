function generateAkonNameFromInput() {
    // the Year digits
    var yy = document.getElementById("yy")
        .value;
    // the Month
    var mm = document.getElementById("mm")
        .value;
    // the Day of the month
    var dd = document.getElementById("dd")
        .value;
    // the selected gender. true if gender = male
    var male = document.getElementById("male")
        .checked;
    // the selected gender. true if gender = female
    var female = document.getElementById("female")
        .checked;
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var birthDate = new Date(mm + '/' + dd + '/' + yy);
    var dayOfTheWeek = birthDate.getDay();
    if (dd <= 0 || dd > 31) {
        document.getElementById("error")
            alert("Enter a valid date!");
    } else if ((mm === "September" || mm === "April" || mm === "June" || mm === "November") && (dd <= 0 || dd > 30)) {
        document.getElementById("error")
            alert("Enter a valid date!");
    } else if (mm === "--Select--") {
        document.getElementById("error")
    } else if (yy <= 0 || yy > 2021) {
        document.getElementById("error")
            alert("Enter a valid year!")
    } else if ((mm === "February") && (dd <= 0 || dd > 29) && (0 == yy % 4)) {
        document.getElementById("error")
    } else if ((mm === "February") && (dd <= 0 || dd > 28) && (0 != yy % 4)) {
        document.getElementById("error")
            alert("Enter a valid date!");
        document.getElementById("error")
    } else if (male === true) {
        document.getElementById("result")
            .innerHTML = "You were born on a " + weekdays[dayOfTheWeek] + ".\n" + "Your Akan name is " + maleNames[dayOfTheWeek] + "!"
        document.getElementById("result")
    } else if (female === true) {
        document.getElementById("result")
            .innerHTML = "You were born on a " + weekdays[dayOfTheWeek] + ".\n" + "Your Akan name is " + femaleNames[dayOfTheWeek] + "!"
