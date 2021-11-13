let inputs = document.querySelectorAll ("input")

let nameOfTask = inputs[0] 
let description = inputs[1]
let start = inputs[2]
let end = inputs[3] 
let add = document.querySelector(`form`)

let tasksArr = []

add.addEventListener(`submit`, addTask)

function addTask(e) {
    e.preventDefault()
    let counter = 0
    for (let i = 0; i < inputs.length-1; i++) {
        //if (inputs[i].value !== ``) {
            counter++
        //}
    }
    //console.log(counter) */
    if (counter === 4) {
        let taskObj = {}
        taskObj.name = nameOfTask.value
        taskObj.description = description.value
        taskObj.start = start.value
        taskObj.end = end.value
        tasksArr.push(taskObj)
        console.log(tasksArr)
        localStorage.setItem("tasks", JSON.stringify(tasksArr))
    }
} 