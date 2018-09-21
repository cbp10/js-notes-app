(function(exports) {
  function SingleNoteView(noteModel){
    this.noteModel = noteModel
  }


  SingleNoteView.prototype.htmlize = function() {
    // '<div>' + noteModel.getNoteText() + '</div>'
    return `<div>${this.noteModel.getNoteText()}</div>`
  }

  exports.SingleNoteView = SingleNoteView
})(this)