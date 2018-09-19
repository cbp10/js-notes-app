(function(exports) {
  function NoteListView(noteList) {
    this.list = noteList.list
    this.html = []
  }

  NoteListView.prototype.getHTML = function() {
    array = this.html
    array.push("<ul>")
    this.list.forEach(function(note) {
      array.push("<li><div>")
      text = note.getNoteText()
      array.push(text.slice(0, 19))
      array.push("...")
      array.push("</div></li>")
    })
    array.push("</ul>")
    return array.join('')
  }

  exports.NoteListView = NoteListView;
})(this);