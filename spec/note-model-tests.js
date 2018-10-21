(function(exports) {
  var note = new Note("hello");

  function testNoteText() {
    assert.isEqual(note.getNoteText(), "hello", "Note Model Spec: should return note text")
  }
  testNoteText();

  function testNoteId() {
    assert.isEqual(note.getNoteId(), 1, "Note Model Spec: should return note id")
  }
  testNoteId()

})(this);
