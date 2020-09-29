//Write your Typescript code here

document.getElementById("addButton").addEventListener('click',addGoods);
let elementInput:HTMLInputElement = <HTMLInputElement>document.getElementById('newGoods');

function addGoods(e:MouseEvent){
    console.log("In the addgoods function");
    let inputText = (<HTMLInputElement>elementInput).value;
    console.log("the input text is : " + inputText);

    let listUnhealthy = document.getElementById("listUnhealthy");
    let newLi:HTMLLIElement = document.createElement('li');
    let newText:Text = document.createTextNode(inputText)
    newLi.appendChild(newText);
    newLi.setAttribute('class','unhealthy');

    listUnhealthy.appendChild(newLi);

   

}