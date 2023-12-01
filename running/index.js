const {add,displayAll,update} =require("../controller/bookRegistration");

const newBook={
    title: 'The Good Gatsby',
    author: 'E. Scotts Fitzgeralds',
    year: 2004 
};

add(newBook);
displayAll();
update(1,"The Good Gatsby","E. Scotts Fitzgeralds",2004);

const tobeupd={
    
    title: 'The Bad Gatsby',
    year: 1999,

};
updateMany(4,tobeupd);
remove(2)