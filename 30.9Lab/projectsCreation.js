function projectsCreation(input) {
    let name = input[0];
    let projects = Number(input[1]);
    let hrs = 3 * projects;

    console.log(`The architect ${name} will need ${hrs} hours to complete ${projects} project/s.`);

}

projectsCreation(["Martin", "4"]);