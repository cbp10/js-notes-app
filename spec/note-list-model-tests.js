(function(exports) {
  var noteList = new NoteList();

  function testNoteListModel() {
    assert.isEqual(noteList.getList().length, 0, "Note List Model Spec: should return note list")
  }

  testNoteListModel();

  function testAddNoteToList() {
    noteList.addNote("hello again")
    assert.isEqual(noteList.getList().length, 1, "Note List Model Spec: should add a note to note list")
  }

testAddNoteToList()
})(this);
