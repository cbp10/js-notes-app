(function(exports) {
  function NoteList() {
    this.list = []
  };

  NoteList.prototype.getList = function() {
    return this.list
  }

  NoteList.prototype.addNote = function(text) {
    note = new Note(text)
    this.list.push(note)

  }

  exports.NoteList = NoteList;
})(this);