(function(exports) {
  function NoteListView(noteList) {
    this.list = noteList.list
  }

  NoteListView.prototype.getHTML = function() {
    var noteArray = [];

    this.list.forEach(function(note) {
      var text = note.getNoteText()
      var id = note.getNoteId()
      var string = id + `" id="${id}">` + text
      if (text.length > 20) {
        string = id + `" id="${id}">` + text.slice(0, 19) + "..."
      }
      noteArray.push(string)
    })

    return '<ul><li><a href="#notes/' + noteArray.join('</li><li><a href="#notes/') + "</a></li></ul>"
  }


  exports.NoteListView = NoteListView;
})(this);
