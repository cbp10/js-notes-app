(function(exports) {
  function testSingleNoteView() {
    function NoteModelDouble() {}

    NoteModelDouble.prototype.getNoteText = function() {
      return "hellooo i'm a notetext"
    }
    
    var noteModelDouble = new NoteModelDouble()
    var singleNoteView = new SingleNoteView(noteModelDouble)

    assert.isEqual(singleNoteView.htmlize(), "<div>hellooo i'm a notetext</div>", "Single Note View Spec: should return html string")
  }
  testSingleNoteView()

})(this)
