(function(exports) {
  function NoteController(noteList) {
    this.noteListModel = noteList;
  }

  NoteController.prototype.createView = function(NoteListView) {
    var noteListView = new NoteListView(this.noteListModel);

    htmlString = noteListView.getHTML();

    document.getElementById("app").innerHTML = htmlString;

    return htmlString;
  }

  NoteController.prototype.addNote = function(text) {
    this.noteListModel.addNote(text);
  }

  NoteController.prototype.displaySingleNote = function(id) {
    var notesArray = this.noteListModel.list
    for(var note of notesArray) {
      if (note.getNoteId() === id) {
        return note.getNoteText()
      } else throw "Note not found"
    }
  };

  exports.NoteController = NoteController;
})(this);
