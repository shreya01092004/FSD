console.log("fetch api");
function fetchdata(){
const response=fetch("https://dummyjson.com/recipes");
// fetch return promise
response.then(data=>{
    console.log(data);
    data.json().then((res)=>{
        // console.log(res.recipes[0].name);
        console.log(res.recipes[0]);
        let output=`$(res.recipes[0]ingridents)`;
   document.getElementById("output").innerHTML=res.recipes[0].name;
    })
})
.catch(error=>console.log(error))
.finally(()=>console.log("hi,finally close all the resource"))
}
fetchdata();
