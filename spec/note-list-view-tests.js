(function(exports) {

  function NoteDouble() {}

  NoteDouble.prototype.getNoteText = function() {
    return "Favourite food: pesto"
  }
  NoteDouble.prototype.getNoteId = function() {
    return 1
  }

  var note = new NoteDouble

  function NoteListDouble() {
    this.list = [note]
  }
  noteList = new NoteListDouble

  var noteListView = new NoteListView(noteList);

  function NoteControllerDouble() {}


  function testNoteListView() {
    var htmlText = '<ul><li><a href="#notes/1">Favourite food: pes...</a></li></ul>'

    assert.isEqual(noteListView.getHTML(), htmlText, "Note List View Spec: should return html for list view")

  }

  testNoteListView();

})(this);
