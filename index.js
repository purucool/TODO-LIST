const addbtn=document.querySelector('#button');

// const notecontainer=document.createElement('div');
// notecontainer.classList.add('notescontainer');
// document.body.appendChild(notecontainer);
// // console.log(document.getElementsByTagName('body'));


const updatedata=()=>{
    const textAreaData=document.querySelectorAll('textarea');
    const notes = [];
    textAreaData.forEach((note)=>{
        return notes.push(note.value);
    })
    localStorage.setItem('notes',JSON.stringify(notes));
}

const addNewNotes=(text="")=>{
    const note=document.createElement('div');
    
    note.classList.add('note');

    const htmldata=`
    <div class="operation">
        <button class="edit">Edit/Save</button>
        <button class="delete">Delete</button>
    </div>
    <div class="main ${text ? "":"hidden" }"></div>
    <textarea class="${text ? "hidden":"" }"></textarea> `; 
    note.insertAdjacentHTML('afterbegin',htmldata);
    // console.log(note);

    // geting refference
     
    const editbtn=note.querySelector('.edit');
    const delbtn=note.querySelector('.delete');
    const maindiv=note.querySelector('.main');
    const textArea=note.querySelector('textarea');

     delbtn.addEventListener('click',()=>{
        note.remove();
        updatedata();
     })

     textArea.value=text;
     maindiv.innerHTML=text;
     editbtn.addEventListener('click',()=>{
        maindiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
     })

     textArea.addEventListener('change',(event)=>{
            const value=event.target.value;
            // console.log(value);
            maindiv.innerHTML=value;
            updatedata();
     })
    
     document.body.appendChild(note);
}
const notes=JSON.parse(localStorage.getItem('notes'));

if(notes){
notes.forEach((note)=>{addNewNotes(note) })
}

addbtn.addEventListener('click',()=> {addNewNotes()
    // console.log(notecontainer);
    // console.log(document.getElementsByTagName('body'));
});