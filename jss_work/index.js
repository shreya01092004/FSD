// console.log("Hello JS");
// const a = 12;
// if(a>10){
//     //var a = 23;
//     let b = 23;
//     c = 12;
//     console.log("a = " + a);
// }
//let is used only within the scope of the body. It is not accessible outside the body
//console.log("b = " + b); // b is declared inside the body

// function fun(a,b){
//     console.log("This is a function");
//     return a+b;
// }
// //let data = fun();
// let data = fun(2,4);
// console.log(data);



// function selectLanguage(language = "no compiler selected") {
//     let gift;
  
//     if (language === 'C') {
//       function cCompiler() {
//         return "C Compiler";
//       }
//       gift = cCompiler;
//     }
//     if (language === 'Java') {
//       function javaCompiler() {
//         return "Java Compiler";
//       }
//       gift = javaCompiler;
//     }
//     return gift;
//   }
  
//   const res = selectLanguage("C");
//   console.log(res());
//   console.dir(document);
//   const div = document.getElementsByClassName("parent");
//   console.log(div);
//   div[0].innerHTML= "<h2 style=color:purple>ABES ENGINEERING COLLEGE</h2>";
//   document.createElement("h1");
//   const h1 = document.createElement("h1");
//   h1.innerText="This is generated by DOM";
//   h1.style.backgroundColor="pink";
//   console.log(h1);
//   div[0].appendChild(h1);
//   const img = document.createElement('img');
  
//   img.src='./bg.jpg';
//   console.log(img);
//   img.setAttribute("height","200");
//   console.log(img);
//   div[0].appendChild(img);
// const btn = document.getElementById("btn");
// const disp = document.getElementById("disp");
// console.log(disp);
// function getData(){
//   console.log("get data called");
//   disp.innerHTML = "<h2> Hello, You have called get data </h2>";
// }
// btn.addEventListener("click",getData);
const promise=new Promise((resolve,reject)=>{
    let a=12;
    if(a>10){
        resolve({name:"shreya",branch:"aiml"});
    }
    else{
        reject("rej");
  
    }
});
promise.then((msg)=>console.log(msg)).catch(error=>console.log(error));