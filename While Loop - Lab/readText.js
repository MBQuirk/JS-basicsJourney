function readText(input){
    let index = 0
    
    let command = input[index];
    index++

    while(command !== "Stop"){
        let text = command
        console.log(text)
        command = input[index];
        index++
    }
}
readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);