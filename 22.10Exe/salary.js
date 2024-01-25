function salary(input) {
    let index = 0;
    let openTabs = input[index];
    index++
    let salary = Number(input[index]);
    index++

    for (i = 0; i < openTabs; i++){
        let currentTab = input[index]
        index++

        if(currentTab === "Facebook"){
            salary -= 150;
        }else if(currentTab === "Instagram"){
            salary -= 100;
        }else if(currentTab === "Reddit"){
            salary -= 50;
        }
    }
    
    if(salary <= 0){
        console.log(`You have lost your salary.`)
    }else{
        console.log(salary)
    }

}

salary(["10",
"7900",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"]);