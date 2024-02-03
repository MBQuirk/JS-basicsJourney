function walking(input){
    let index = 0;
    let command = input[index];
    index++

    let goal = 10000;
    let sumSteps = 0;

    while(sumSteps < goal){    
        if(command === "Going home"){
            sumSteps += Number(input[index])
            break;
        }
        let steps = Number(command)
        sumSteps += steps
        command = input[index];
        index++

    }
    if(sumSteps >= goal){
        console.log(`Goal reached! Good job!`);
        console.log(`${sumSteps - goal} steps over the goal!`);
    }else{
        console.log(`${goal - sumSteps} more steps to reach goal.`);
    }

}
walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"]);