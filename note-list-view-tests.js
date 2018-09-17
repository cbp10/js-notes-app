(function(exports) {
  function testNoteListView() {
    noteList = new NoteList();
    noteList.addNote("Favourite food: pesto")
    noteList.addNote("Favourite drink: seltzer")
    noteListView = new NoteListView(noteList);


    htmlText = "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>"
    if (noteListView.getHTML() !== htmlText) {
      console.log(noteListView.getHTML())
      throw new Error("html not right")
    } 
    else console.log("html right")
  }

  testNoteListView();
})(this);