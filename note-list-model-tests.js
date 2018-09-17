(function(exports) {
  function testNoteListModel() {
    noteList = new NoteList();

    if (noteList.getList().length !== 0) {
      throw new Error("List not empty")
    }
    else console.log("list retrieved")
  }

testNoteListModel();
  
  function testAddNoteToList() {
    noteList = new NoteList();
    noteList.addNote("hello again")

    if (noteList.getList().length === 1) {
      console.log("Note added")
    }
    else throw new Error("LNote added")
  }

testAddNoteToList()
})(this);