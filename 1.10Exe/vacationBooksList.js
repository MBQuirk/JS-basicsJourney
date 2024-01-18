function vacationBooksList(input) {
    let pageCount = Number(input[0]);
    let pagePerHour = Number(input[1]);
    let days = Number(input[2]);

    let timeForReading = pageCount / pagePerHour;
    let hoursPerDay = timeForReading / days;

    console.log(hoursPerDay);
}

vacationBooksList(["432 ",
"15 ",
"4 "]);