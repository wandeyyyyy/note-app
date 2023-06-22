const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");


getNotes().forEach((note) => {
    const noteEl = createNoteEl (note.id, note.content);
    appEl.insertBefore(noteEl, btnEl);

});

function createNoteEl(id, content) {
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder ="Empty Note";
    element.value = content;
}
element.addEventlistener("dblclick", ()=>{
const warning = confirm("Do you want to delete this note?");
if(warning){
    deleteNote(id, element);
}
})
element.addEventlistener("input", () => {
    updateNote(id, element.value);
    return element;
});

function deleteNote(id, element){
    const notes = getNotes().filter((note) =>note.id != id)
    savedNote(notes)
    appEl.removeChild(element)
}
function updateNote(id, content) {
    const notes = getNotes();
    const target = notes.filter((notes) => note.id == id)[0];
    target.content = content;
    saveNote(notes);
    appEl.removeChild(element)
}

function addedNote(id, content){
    const notes = getNotes();
    const notesObj ={
        id: Math.floor(Math.random() * 100000),
        content: "",
    };

    const noteEl = createNoteEl(noteObj.id, notesObj.content);
    appEl.insertBefore(noteEl, btnEl);

    note.push(notesObj);
    saveNote(notes);
}


function savedNote(notes) {
    localStorage.setItem("note-app", JSON.stringify(notes));

}

function getNotes() {
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}

btnEl.addEventListener("click", addedNote);