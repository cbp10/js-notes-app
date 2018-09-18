(function(exports) {
  function NoteController(noteListModel) {
    this.noteListModel = new NoteList()
  }

  NoteController.prototype.addNote = function(text) {
    this.noteListModel.addNote(text)
  }

  NoteController.prototype.createView = function() {
    var noteListView = new NoteListView(this.noteListModel)
    htmlString = noteListView.getHTML()
    document.getElementById('app').innerHTML = htmlString
  }


  exports.NoteController = NoteController
// console.log(document.getElementById('app'))

})(this)


