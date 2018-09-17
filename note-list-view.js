(function(exports) {
  function NoteListView(noteList) {
    this.list = noteList.list
  }

  NoteListView.prototype.getHTML = function() {

    return "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>"
  }

  exports.NoteListView = NoteListView;
})(this);