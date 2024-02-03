function examPreparation(input){
    let index = 0;

    let lowGrades = Number(input[index]);
    index++
    let taskName = input[index];
    index++

    let lastTaskName = "";
    let lowGradesCounter = 0;
    let taskCounter = 0;
    let taskGradeCounter = 0;

    while(taskName !== "Enough"){
        let taskGrade = Number(input[index]);
        index++
        
        taskCounter++
        taskGradeCounter += taskGrade

        if(taskGrade <= 4){
            lowGradesCounter++

            if(lowGradesCounter === lowGrades){
                break;
            }
        }
        lastTaskName = taskName

        taskName = input[index];
        index++
    }
    
    if(lowGradesCounter === lowGrades){
        console.log(`You need a break, ${lowGradesCounter} poor grades.`);
    }else{
        let avrgGrade = taskGradeCounter / taskCounter
        console.log(`Average score: ${avrgGrade.toFixed(2)}`)
        console.log(`Number of problems: ${taskCounter}`)
        console.log(`Last problem: ${lastTaskName}`)
    }

}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])