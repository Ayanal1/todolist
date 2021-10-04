

firebase.database().ref('/USER/').on('child_added',function(smit){
    var data = smit.val()
    


        var lst_item = document.createElement('div')
        var rowtext= document.createElement('h6')
        var list_text = document.createTextNode(data.todo)
       
        // lst_item.setAttribute('class',' list_item')
        rowtext.setAttribute('class',' tabletext')
        
        rowtext.appendChild(list_text)
        lst_item.appendChild(rowtext)
      

        
        var edit = document.createElement('button')
        var edit_text = document.createTextNode('')
        edit.setAttribute('onclick','edit(this)')
        edit.setAttribute('class','edit_btn fas fa-pencil-alt btn btn-primary')
        edit.setAttribute('id',data.key)

        var edit_2 = document.createElement('button')
        var edit_text_2 = document.createTextNode('')
        edit_2.setAttribute('onclick','delete_todo(this)')
        edit_2.setAttribute('class','edit_btn fas fa-trash-alt btn btn-danger')
        edit_2.setAttribute('id',data.key)
        
        
        edit.appendChild(edit_text)
        edit_2.appendChild(edit_text_2)
        
        
        
        t1=document.createElement('table')
        t2=document.createElement('tr')
        t3=document.createElement('td')
        t4=document.createElement('td')
        t3.setAttribute('class','list_item')
        t4.setAttribute('class','btns')
        
        
        t1.appendChild(t2)
        t2.appendChild(t3)
        t2.appendChild(t4)
        t3.appendChild(lst_item)
        t4.appendChild(edit)
        t4.appendChild(edit_2)
        unorder_item.appendChild(t1)
        // val.value=''







})


var unorder_item = document.getElementById('unorder')
var btuns = document.getElementById('btuns')



function add_todo(){
    var val = document.getElementById('inp')



    if(val.value == ""){
       alert("enter value")
       
    }
    else{



        NEW= firebase.database().ref().push().getKey();
        
        var obj = {
                todo : val.value,
                key : NEW, 
            }
            
            firebase.database().ref(`/USER/`+NEW).set(obj)
            
            
            
            
    val.value=''

       

}
}

function edit(e){
    var val = e.parentNode.parentNode.childNodes[0].childNodes[0].innerText
   
    var inp = prompt("Enter Value",val)
    if(inp == ""){
        alert("enter value")
    }
    else{
        firebase.database().ref('/USER/').child(e.id).set({
            todo:inp,
            key:e.id})
            e.parentNode.parentNode.childNodes[0].childNodes[0].innerText = inp
    }
    }
   


function delete_todo(e){

firebase.database().ref("/USER/"+e.id).remove()
e.parentNode.parentNode.remove()

}
function add_alltodo(){
    firebase.database().ref("/USER/").remove()
    unorder_item.innerHTML=null
}
