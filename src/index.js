//6/23/2020 Tues
document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //const taskList = new taskList();
  const form = document.querySelector("#create-task-form")

form.addEventListener("submit", function (event) {//run this function when we submit
    event.preventDefault()//don't reload, but update

    const newTask = event.target.newTaskDescription.value  //input value ///????!!!
  
    const li = document.createElement('li') //define list 
    li.innerHTML = `${newTask}` //display newTask into li 

    const taskArea = document.getElementById("tasks");//define the location we want to add the new task
    taskArea.appendChild(li)//actually add the list to taskArea UL
})


//const taskUl = 

// taskUl.addEventListener("click", function(event){
//     if(event.target.nodeName === "BUTTON"){
//       li.remove()
//     }
//     })

// // DOM Elements
// const listingsSection = document.querySelector("#listings")

// // Render Helpers
// function renderOneListing(listingObj) {
//   // create out element with createElement
//   const outerCard = document.createElement("div")
//   outerCard.classList.add("card")

})