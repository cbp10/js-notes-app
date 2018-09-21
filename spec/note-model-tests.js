(function(exports) { 
  var note = new Note("hello");

  function testNoteText() {
    assert.isEqual(note.getNoteText(), "hello", "should return note text")
  }
  testNoteText();

  function testNoteId() {
    assert.isEqual(note.getNoteId(), 1, "should return note id")
  }
  testNoteId()

})(this);