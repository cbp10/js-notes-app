(function(exports) {
  var idcounter = 1

  function Note(text) {
    this.id = idcounter++
    this.text = text
  };

  Note.prototype.getNoteText = function() {
    return this.text
  }

  Note.prototype.getNoteTextId = function() {
    return this.id
  }
  
  exports.Note = Note
})(this);