(function(exports) {
  function NoteController(noteList) {
    this.noteListModel = noteList;
  };

  NoteController.prototype.createView = function(NoteListView) {
    var noteListView = new NoteListView(this.noteListModel);

    htmlString = noteListView.getHTML();

    document.getElementById("app").innerHTML = htmlString;

    return htmlString;
  };

  NoteController.prototype.addNote = function(text) {
    this.noteListModel.addNote(text);
  };

  NoteController.prototype.getSingleNote = function(id) {
    var notesArray = this.noteListModel.list
    for(var note of notesArray) {
      if (note.getNoteId() === id) {
        return note.getNoteText()
      }
    }
    throw "Note not found"
  };

  NoteController.prototype.setEventListener = function() {
    window.addEventListener("hashchange", this.hashchangeEvent.bind(this))
  };

  NoteController.prototype.hashchangeEvent = function() {
    this.displaySingleNote()
  };

  NoteController.prototype.displaySingleNote = function() {
    var id = this.getIdFromUrl(window.location)
    document.getElementById("app").innerHTML = this.getSingleNote(id)
  };

  NoteController.prototype.getIdFromUrl = function(location) {
    return parseInt(location.hash.split("#")[1].split("/")[1])
  };

  NoteController.prototype.setSubmitEvent = function() {
    var text = document.getElementById("text")
    text.addEventListener("submit", this.submitEvent.bind(this))
  }

  NoteController.prototype.submitEvent = function(e) {
    e.preventDefault()
    this.addNote(e.target[0].value)
    this.createView(NoteListView)
  }

  exports.NoteController = NoteController;
})(this);
