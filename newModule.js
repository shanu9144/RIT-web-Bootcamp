function doSomething(){
    console.log("***** doSomething called from newModuke.js**********")
}

function againDoSomething(){
    console.log("***** doSomething called from newModuke.js**********")
}

let arr =[];

function create(element){
    arr.push(element);
    return arr;
}
function read(){
    return arr;
}
function update(index, element){
    arr[index] = element;
    return arr;

}
function deletefun(index){
    arr.splice(index ,1);
    return arr;

}











module.exports = {
    doSomething,
    againDoSomething,
    create,read,update, deletefun

};