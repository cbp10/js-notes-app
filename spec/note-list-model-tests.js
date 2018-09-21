(function(exports) {
  var noteList = new NoteList();

  function testNoteListModel() {
    assert.isEqual(noteList.getList().length, 0, "should return note list")
  }

  testNoteListModel();
  
  function testAddNoteToList() {
    noteList.addNote("hello again")
    assert.isEqual(noteList.getList().length, 1, "should add a note to note list")
  }

testAddNoteToList()
})(this);