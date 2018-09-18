(function(exports) {
  function NoteController(noteList) {
    this.noteListModel = new noteList();
  }

  exports.NoteController = NoteController;
})(this);

