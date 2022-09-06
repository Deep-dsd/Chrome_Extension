let myLeads =[];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const delEl = document.getElementById("del-btn")
const tabBtn = document.getElementById("tab-btn")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}



tabBtn.addEventListener("click",function(){
    //GRAB THE CURRENT TAB
    chrome.tabs.query({active: true,currentWindow: true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)

    })
   
})

inputBtn.addEventListener("click",function(){
    
    myLeads.push(inputEl.value)
    inputEl.value = " "
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads)
   
})

function renderLeads(leads){
    let listItems = ""
    for(let i = 0;i<leads.length;i++){

        // listItems += "<li><a href = '"+ myLeads[i] +"' target = '_blank'> " + myLeads[i] + "</a></li>" 
        //this upper process is fucking weired
        //instead use template string--
        listItems += `
        <li id = "li-el">
            <a href = '${myLeads[i]}' target = '_blank'>${myLeads[i]}</a>
        </li>`
    
    //alternate way of doing it--
    // const li = document.createElement("li")
        //creating the HTML tag
    // li.textContent = myLeads[i]
        //inserting desired data
    // ulEl.append(li)
        //appending it to the html/JS DOM
}
ulEl.innerHTML = listItems

}

delEl.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
    
})


