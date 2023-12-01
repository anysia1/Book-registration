const {books} = require("../db/library");

const add=(newBook)=>{
    newBook.id=books.length+1;
    books.push(newBook);

    console.log("\nNew Book added\n");
    console.log("\n Book in the system after adding\n ");
    console.log(books);
};
    const displayAll=()=>{
        console.log("\n All Books \n");
        console.log(books);
       
      };

      const update=(id,key,value)=>{
        var exists= books.find(ele=>ele.id===id);
        if (!exists) {
            console.log("book not found\n");
        }
        else{
           
            exists[key]=value;
            
            console.log("book info updated\n");
            console.log(exists);
    
        }
    }
    module.exports={
        add,
        displayAll,
        update,
     }
