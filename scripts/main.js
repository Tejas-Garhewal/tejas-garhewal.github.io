const myImage=document.querySelector("img");

myImage.addEventListener("click", ()=>{
    const mySrc=myImage.getAttribute("src");
    if (mySrc==="./images/machine_learning.jpg"){
        myImage.setAttribute("src", "images/machine-learning-2.png");
    } else if (mySrc==="images/machine-learning-2.png"){
        myImage.setAttribute("src", "images/machine-learning-3.webp");
    } else{
        myImage.setAttribute("src", "./images/machine_learning.jpg");
    }
});

let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");

function setUserName(){
    let myName=prompt("Please enter your name");
    while (!myName || myName===""){
        // setUserName();
        myName=prompt("Please enter your name");
    }
    localStorage.setItem("name", myName);
    myHeading.textContent=`Machine learning is (or atleast AI is) cool, ${myName}`;
}


if (!localStorage.getItem("name")){
    setUserName();
} else{
    const storedName=localStorage.getItem("name");
    myHeading.textContent=`Machine learning is (or atleast AI is) cool, ${storedName}`;
}

myButton.addEventListener("click", ()=>{setUserName();});