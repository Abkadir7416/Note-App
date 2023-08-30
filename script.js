const createButton = document.querySelector('.createButton');

createButton.addEventListener(
    "click",
    function () {
        console.log('add notes');
        addNote()
    }
)

const saveNotes = () =>{
    const notes = document.querySelectorAll(".content textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    // console.log(data)
    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}

const addNote = (text = "") => {
    const contentBox = document.querySelector('.content-box');
    console.log('clicked');
    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = `
    <header class="header">
        <i class="fa-solid fa-floppy-disk saveButton"  id="saveButton"></i>
        <i class="fa-solid fa-trash deleteButton"></i>
        </header>
    <div class="note">
    <textarea name="" id="" >${text}</textarea>
    </div>
    `
    // div.querySelector('#deleteButton').addEventListener('click', (e) => {
        //         const contentItem = document.querySelector('.content');
        //         console.log('deleteButton clicked out', e.target);
        //         div.parentElement.remove();
        //     })
        
        
    contentBox.appendChild(content);
    
    content.querySelector('.deleteButton').addEventListener('click', ()=>{
        content.remove();
        saveNotes();
    })
    
    content.querySelector(".saveButton").addEventListener(
        "click",
        function () {
            saveNotes()
        })

    content.querySelector("textarea").addEventListener(
        "focusout",
        function () {
            saveNotes()
        }
    )
     
    saveNotes();
        
        
}
// -----------------------


// const elements = document.querySelectorAll('.deleteButton');

// elements.forEach((element) => {

//     element.addEventListener('click', (e) => {
//         console.log('clicked outside');
//         e.target.parentElement.remove();
//     })
// })


(
    function () {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes === null) {
            addNote()
        } else {
            lsNotes.forEach(
                (lsNote) => {
                    addNote(lsNote)
                }
            )
        }

    }
)()