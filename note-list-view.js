(function(exports) {
  function NoteListView(noteList) {
    this.list = noteList.list
    this.html = []
  }

  NoteListView.prototype.getHTML = function() {
    array = this.html
    array.push("<ul>")
    console.log(this.list);
    this.list.forEach(function(note) {
      array.push("<li><div>")
      array.push(note.getNoteText())
      array.push("</div></li>")
    })
    array.push("</ul>")
    return array.join('')
  }

  exports.NoteListView = NoteListView;
})(this);