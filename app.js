console.log(firebase.database);
var unorder_item = document.getElementById('unorder')
var btuns = document.getElementById('btuns')
function add_todo(){
    var val = document.getElementById('inp')



    if(val.value == ""){
       alert("enter value")
       
    }
    else{
    
    var lst_item = document.createElement('div')
    var rowtext= document.createElement('h6')
    var list_text = document.createTextNode(val.value)
    // list_text.style.width = "20px"
    lst_item.setAttribute('class',' list_item')
    rowtext.setAttribute('class',' tabletext')
    
    rowtext.appendChild(list_text)
    lst_item.appendChild(rowtext)
    console.log(lst_item)
    
    // var obj = {
        //     todo : val.value
        // }
        // console.log(obj.todo)
        
        // key= firebase.database().ref("/TODO_list").push(obj).getKey();
        // console.log(key)
        // var key = 13;
        // firebase.database().ref(`/USER/`+key).set(obj)
        
        var edit = document.createElement('button')
        var edit_text = document.createTextNode('')
        edit.setAttribute('onclick','edit(this)')
        edit.setAttribute('class','edit_btn fas fa-pencil-alt btn btn-primary')
        
        var edit_2 = document.createElement('button')
        var edit_text_2 = document.createTextNode('')
        edit_2.setAttribute('onclick','delete_todo(this)')
        edit_2.setAttribute('class','edit_btn fas fa-trash-alt btn btn-danger')
        
        edit.appendChild(edit_text)
        edit_2.appendChild(edit_text_2)

        // lst_item.appendChild(edit)
        // lst_item.appendChild(edit_2)
        
        t1=document.createElement('table')
        t2=document.createElement('tr')
        t3=document.createElement('td')
        t4=document.createElement('td')
        // t3.setAttribute('class','tabletext')
        t1.appendChild(t2)
        t2.appendChild(t3)
        t2.appendChild(t4)
        t3.appendChild(lst_item)
        t4.appendChild(edit)
        t4.appendChild(edit_2)
        unorder_item.appendChild(t1)
        val.value=''
        


}
}

function edit(e){
    var val = e.parentNode.parentNode.childNodes[0].childNodes[0].innerText
    console.log(val)
    var inp = prompt("Enter Value",val)
    if(inp == ""){
        alert("enter value")
    }
    else{
        e.parentNode.parentNode.childNodes[0].childNodes[0].innerText = inp
    }
   
}

function delete_todo(e){
e.parentNode.parentNode.remove()
}
function add_alltodo(){
    unorder_item.innerHTML=null
}