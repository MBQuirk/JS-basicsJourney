function passwordGuess(input) {
    let password = input[0];
    let phrase = "s3cr3t!P@ssw0rd"
    if (password !== phrase) {
        console.log("Wrong password!");
    } else {
        console.log("Welcome");
    }

}

passwordGuess(["s3cr3t!P@sfctjikf"]);