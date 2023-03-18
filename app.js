const body=document.querySelector('body');
const taskTodo =document.querySelector('#task--todo');
const button = document.querySelector('.task__trigger')
const taskList= document.querySelector('.task--list')
const diceTriggerEl = document.querySelector('.dice__trigger')
const diceImageEl = document.querySelector('.dice__image')
const diceRoll = document.querySelector('.dice__roll')
const diceRollProject = document.querySelector('.dice__roll__project')
const diceClose = document.querySelector('.dice__close')


// *********** task fucntion ***********
// document.querySelector('.task--list').removeChild(document.querySelectorAll('.added')[5])
window.addEventListener('keydown', function(){
  taskTodo.focus()
})
function todo(){
  let newTask= taskTodo.value
  if(newTask.length > 0) {
    let newList = document.createElement('li')
    let done = document.createElement('button')
    let remove = document.createElement('button')
//
    newList.classList.add('added')
    done.classList.add('done','list__item__btn')
    remove.classList.add('remove','list__item__btn')
//
    done.innerHTML=('O')
    remove.innerHTML=('X')
    newList.innerHTML=(`${newTask}`)
    taskList.appendChild(newList)
    newList.appendChild(done)
    newList.appendChild(remove)
//
    done.addEventListener('click', function() {
      newList.style.textDecorationLine='line-through'
      newList.style.color='gray'
    })
    remove.addEventListener('click', function() {
      taskList.removeChild(newList)
    })
  }
  taskTodo.value= ''
}


taskTodo.addEventListener('keypress', function(e){
  if (taskTodo.value.length > 0 && e.key === 'Enter') {
    todo()
  }
})
button.onclick = function() {
  todo();
}

// ************** Dice Roll *************
diceRoll.addEventListener('click', function(){
  diceRollProject.classList.toggle('open');
})
diceClose.addEventListener('click', function(){
  diceRollProject.classList.remove('open');
})
diceTriggerEl.addEventListener('click', function(){
  diceImageEl.src = `images/dice${1 + Math.floor(Math.random() * 6)}.png`
})

// ************clock function**************

function dl (time) {
  let pt = time;
  if (pt !== new Date().toLocaleTimeString()) {
    console.log(pt)
  }
}
window.addEventListener("load", () => {
  clock();
  function clock() {
    const today = new Date();

    // get time components
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    //add '0' to hour, minute & second when they are less 10
    const hour = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;
    const second = seconds < 10 ? "0" + seconds : seconds;

    //make clock a 12-hour time clock
    const hourTime = hour > 12 ? hour - 12 : hour;

    // if (hour === 0) {
    //   hour = 12;
    // }
    //assigning 'am' or 'pm' to indicate time of the day
    const ampm = hour < 12 ? "AM" : "PM";

    // get date components
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDate();

    //declaring a list of all months in  a year
    const monthList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    //get current date and time
    const date = monthList[month] + " " + day + ", " + year;
    const time = hourTime + ":" + minute + ":" + second + ampm;

    //combine current date and time
    const dateTime = `date \n time`;

    //print current date and time to the DOM
    document.getElementById("date-time").innerHTML = time;
    setTimeout(clock, 1000);
  }
});


const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]
setInterval(function() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  document.getElementById("date").innerText = `${monthList[month]} ${day}, ${year}`;
}, 1000)