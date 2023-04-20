let list 
let ulList 
let liList
let input
let allTask
let doneT
let editT
let deleteT
let noTask
let doEdit
let newTask
let doOkBtn
let doNoBtn
let inputEditTask
let editInfo
let newDiv


const main = ()=>{
    //wywołujemy główne funkcji
    elementByDOM()
    doClick()
}

const elementByDOM=()=>{
//pobieramy wszystkie elementy
    ulList=document.querySelector('ul')
    list = document.querySelector('.list')
    input = document.querySelector('.input')
    checkBtn = document.querySelector('.add')
    error = document.querySelector('.error')
    doneT = document.querySelector('.done')
    editT = document.querySelector('.edit')
    deleteT = document.querySelector('.delete')
    noTask=document.querySelector('.noTask')
    doEdit=document.querySelector('#doEdit')
    doOkBtn=document.querySelector('.doOk')
    doNoBtn = document.querySelector('.doNo')
    inputEditTask=document.querySelector('.inputEditTask')
    editInfo = document.querySelector('.edit-info')
    
}

const doClick=()=>{
    //kiedy klikamy
    checkBtn.addEventListener('click', addNewTask)
    ulList.addEventListener('click', checkClick)
    deleteT.addEventListener('click', deleteTask)
    //editT.addEventListener('click', editTask)
    doOkBtn.addEventListener('click', doOkEditTask)
    doNoBtn.addEventListener('click', doNoEditTask)
    input.addEventListener('keyup', doEnter)
}

const addNewTask=()=>{
    if(input.value!==''){
        newLi= document.createElement('li')
        newLi.textContent=input.value
        ulList.append(newLi) 
        
        input.value=''
        error.textContent=''

        addNewBtn()  
  
    } else{
        input.value==''
        error.textContent='wprowadź treść zadania'
   }        
}

const addNewBtn=()=>{
newDiv=document.createElement('div')
newDiv.classList.add('btn')
newLi.append(newDiv)
    const  checkBtn=document.createElement('button')
checkBtn.textContent='✓'
checkBtn.classList.add('done')
    const editBtn=document.createElement('button')
editBtn.textContent='EDIT'
editBtn.classList.add('edit')
    const deleteBtn=document.createElement('button')
deleteBtn.textContent='✕'
deleteBtn.classList.add('delete')
newDiv.append(checkBtn, editBtn, deleteBtn)
}

const checkClick=(e)=>{
    if(e.target.matches('.done')){
         e.target.closest('li').classList.toggle('zalatwiono')
         
    }else if(e.target.matches('.edit')){
        editTask(e)
    }else if(e.target.matches('.delete')){
        deleteTask(e)
    }
}


const deleteTask=e=>{
    e.target.closest('li').remove()
allTask=document.querySelectorAll('li')
doEdit.style.display='none'
if(allTask.length==0){

    error.textContent='brak zadań na liście'   
}
}

const editTask=e=>{
    newTask = e.target.closest('li')
    inputEditTask.value=newTask.firstChild.textContent
    doEdit.style.display='block'
}

const doOkEditTask =()=>{
    if(inputEditTask.value!==''){
       newTask.firstChild.textContent=inputEditTask.value
       doEdit.style.display='none'

    } else{
        editInfo.textContent='wpisz coś'
    }
}

const doNoEditTask=()=>{
    doEdit.style.display='none'
}

const today=()=>{
    const day = new Date()
    const days= day.getDate()
    const dayMonth = day.toLocaleString('pl',{month:'long'})
    const dayYear = day.getFullYear()
    const dayWeek = day.toLocaleString('pl',{weekday: 'long' })
    const x= dayWeek.split('')
    const y = x[0].toLocaleUpperCase()
    const a = x.slice(1, dayWeek.length).join('')
 
    /*console.log(days)
    console.log(dayMonth)
    console.log(dayWeek)
    console.log(dayYear)
    */

    const todayDay = document.querySelector('.day')
    todayDay.textContent=days+' '+dayMonth+' '+dayYear + ' '+ '-'+' ' + y+a

}
today()

const doEnter=e=>{
     if(e.key==='Enter'){
        addNewTask()
        }
    }

document.addEventListener('DOMContentLoaded', main)

