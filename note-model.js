(function(exports) {
  function Note(text) {
    this.text = text
  };

  Note.prototype.getNoteText = function() {
    return this.text
  }
  
  exports.Note = Note
})(this);