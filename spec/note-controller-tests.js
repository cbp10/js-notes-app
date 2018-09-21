(function() {

    // MOCKING  
    function noteDouble() {}

    noteDouble.prototype.getNoteText = function() {
      return "Some text";
    }

    function noteListDouble() {
      this.list = [new noteDouble()];
    }

    var addNoteCounter = 0

    noteListDouble.prototype.addNote = function() {
      addNoteCounter++
    }

    function noteListViewDouble() {}

    noteListViewDouble.prototype.getHTML = function() {
      return "<ul><li><div>Some text</div></li><ul>";
    }

    function MockElement() {
      this.innerHTML = "Hello";
    }

    function DocumentMock() {}

    DocumentMock.prototype.getElementByID = function(id) {
      return new MockElement
    }

    // NEW INSTANCE OF MODEL TO BE TESTED
    var controller = new NoteController(new noteListDouble());
    

  function testInstantiateNoteController() {
    
    if (controller.noteListModel) {
      console.log("Test passed!");
    } else {
      throw new Error("noteListModel does not exist");
    }
  }
  testInstantiateNoteController();

  function testCreateView() {

    if (controller.createView(noteListViewDouble) === "<ul><li><div>Some text</div></li><ul>") {
      console.log("Test passed!"); 
    } else {
      throw new Error("Generated HTML doesn't match.");
    }
    
  }
  testCreateView();

  function testAddNote() {
    controller.addNote("text")
    if ( addNoteCounter === 1 ) {
      console.log("Test passed!"); 
    } else {
      throw new Error("note not added");
    }

  }
  testAddNote();
})();

