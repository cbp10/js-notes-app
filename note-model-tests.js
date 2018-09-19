(function(exports) {
  function testNoteText() {
    var note = new Note("hello");
    console.log("this is our note id: " + note.id)
    if (note.text !== "hello") {
      throw new Error("Text does not match")
    }
    else console.log("probably worked")
  }
  testNoteText();

  function testNoteTextMethod() {
    var note = new Note("hello");
    console.log("this is our note id: " + note.id)
    if (note.getNoteText() !== "hello") {
      throw new Error("Text does not match")
    }
    else console.log("probably worked")
  }
  testNoteTextMethod();

  function testNoteTextId() {
    var note = new Note("hello")
    console.log("this is our note id: " + note.id)
    if(note.getNoteTextId() !== 3) {
      throw new Error("Id not matching")
    } else {
      console.log("id probably worked")
    }
  }
  testNoteTextId()

})(this);