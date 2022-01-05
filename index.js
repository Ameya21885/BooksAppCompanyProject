


// fetch API

console.log("This is my tutorial 42")


// button with id myBtn
let myBtn=document.getElementById("myBtn");

// div with id content
let content=document.getElementById("content");


// getData function
function getData() {
   console.log("Started getData")
    url="https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6";
    fetch(url).then((response)=>{
        console.log("Inside first then")  
        return response.json();
    }).then((data)=>{
        console.log("Inside second then")  
        console.log(data);
    })
}



// postData function

function postData() {
     url=" https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba";
     data='{"name": "Nandha", "company": "BooksApp"}'
     params={
         method:'post',
         Headers:{
             'Content-Type':'application/json'
         },
         body: data


     }
     fetch(url, params).then((response)=>{
         return response.json();
     }).then((data)=>{
         console.log(data);
     })
 }
 







// console.log("Before running get data")
// getData();
// console.log("After running get data")

postData();



//Dark Mode switch

// function DarkMode() {
    
// }



    
    
 

















