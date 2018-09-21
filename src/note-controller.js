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


  exports.NoteController = NoteController;
})(this);

