function andProcessors(input){
    let plannedCpuCount = Number(input[0]);
    let workersCount = Number(input[1]);
    let workingDays = Number(input[2]);

    let totalHours = workersCount * workingDays * 8;
    
    let madeCpu = Math.floor(totalHours / 3);
    let pricePerCpu = 110.10;


    if(madeCpu >= plannedCpuCount){
        console.log(`Profit: -> ${((madeCpu - plannedCpuCount) * pricePerCpu).toFixed(2)} BGN`);
    }else{
        console.log(`Losses: -> ${((plannedCpuCount - madeCpu) * pricePerCpu).toFixed(2)} BGN`);
    }

}
andProcessors(["500",
"8",
"20"])