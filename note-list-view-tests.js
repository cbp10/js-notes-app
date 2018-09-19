(function(exports) {
  function testNoteListView() {
    noteList = new NoteList();
    noteList.addNote("Favourite food: pesto")
    noteList.addNote("Favourite drink: seltzer")
    noteListView = new NoteListView(noteList);


    htmlText = "<ul><li><div>Favourite food: pes...</div></li><li><div>Favourite drink: se...</div></li></ul>"
    if (noteListView.getHTML() !== htmlText) {
      throw new Error("html not right")
    } 
    else console.log("html right")
  }

  testNoteListView();
})(this);