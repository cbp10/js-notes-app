(function() {
  function testInstantiateNoteController() {
    
    function noteListDouble() {}
    
    var controller = new NoteController(noteListDouble);

    if (controller.noteListModel) {
      console.log("Test passed!");
    } else {
      throw new Error("noteListModel does not exist");
    }

  }

  testInstantiateNoteController();
})();

