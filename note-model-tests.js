(function(exports) {
  function testNoteText() {
    var note = new Note("hello");
    if (note.text !== "hello") {
      throw new Error("Text does not match")
    }
    else console.log("probably worked")
  }
  testNoteText();

  function testNoteTextMethod() {
    var note = new Note("hello");
    if (note.getNoteText() !== "hello") {
      throw new Error("Text does not match")
    }
    else console.log("probably worked")
  }
  testNoteTextMethod();
})(this);