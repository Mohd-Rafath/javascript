//function
//code reusability
//function add(){

    //var a = 67;
    //var b = 78;
    //document.write(a+b); printing statement
    //console.log(a+b);

//}
//add();
//Es6
const add = () => {
    var a = 60;
    var b = 70;
    document.write(a+b);
    console.log(a+b);
}
add();


const add = (a,b) => {
    const result = a+b;
    console.log(`${a} + ${b}  = ${result}`);
    return result;
}