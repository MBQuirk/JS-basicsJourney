function oldBooks(input) {
    let index = 0;

    let searchedBook = input[index];
    index++
    let nextBook = input[index];
    index++

    let BookCounter = 0;
    let isFound = false;

    while(nextBook !== "No More Books"){
      
        if(searchedBook === nextBook){
            isFound = true;
            break;
        }
        BookCounter++
        
        nextBook = input[index];
        index++
        
    }

    if(isFound){
        console.log(`You checked ${BookCounter} books and found it.`)
    }else{
        console.log(`The book you search is not here!`);
        console.log(`You checked ${BookCounter} books.`)
    }

}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);