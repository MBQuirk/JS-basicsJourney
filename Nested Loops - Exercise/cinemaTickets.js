function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++

    let standardTicket = 0; let studentTicket = 0; let kidTicket = 0;

    while (command !== "Finish") {
        let movieName = command;
        let freeSeats = Number(input[index]);
        index++
        let ticketType = input[index];
        index++
        let soldTickets = 0

        while (ticketType !== "End") {
            switch (ticketType) {
                case "standard": standardTicket++; break;
                case "student": studentTicket++; break;
                case "kid": kidTicket++; break;

            }
            soldTickets++

            if (soldTickets >= freeSeats) {
                break;
            }

            ticketType = input[index];
            index++
        }

        let percentage = soldTickets / freeSeats * 100;
        console.log(`${movieName} - ${percentage.toFixed(2)}% full.`);


        command = input[index];
        index++
    }

    let totalTickets = standardTicket + studentTicket + kidTicket;
    console.log(`Total tickets: ${totalTickets}`);

    let studentPerc = studentTicket / totalTickets * 100;
    console.log(`${studentPerc.toFixed(2)}% student tickets.`);

    let standardPerc = standardTicket / totalTickets * 100;
    console.log(`${standardPerc.toFixed(2)}% standard tickets.`);

    let kidPerc = kidTicket / totalTickets * 100;
    console.log(`${kidPerc.toFixed(2)}% kids tickets.`);

}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])