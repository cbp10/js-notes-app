(function() {

  function noteDouble() {}

  noteDouble.prototype.getNoteText = function() {
    return "Some text";
  };

  noteDouble.prototype.getNoteId = function() {
    return 1;
  };

  function noteListDouble() {
    this.list = [new noteDouble()];
  };

  var addNoteCounter = 0

  noteListDouble.prototype.addNote = function() {
    addNoteCounter++
  };

  function noteListViewDouble() {}

  noteListViewDouble.prototype.getHTML = function() {
    return '<ul><li><a href="#notes/1" id="1">Some text</a></li></ul>';
  };

  function MockElement() {
    this.innerHTML = "Hello";
  };

  function MockDocument() {}

  MockDocument.prototype.getElementByID = function(id) {
    return new MockElement
  };

  var controller = new NoteController(new noteListDouble());

  function testInstantiateNoteController() {
    assert.isEqual(controller.constructor.name, "NoteController", "Note Controller Spec: instantiates a note controller")
   }
   testInstantiateNoteController();

  function testCreateView() {
    assert.isEqual(controller.createView(noteListViewDouble), '<ul><li><a href="#notes/1" id="1">Some text</a></li></ul>', "Note Controller Spec: should return html string")
  };
  testCreateView();

  function testAddNote() {
    controller.addNote("text")
    assert.isEqual(addNoteCounter, 1, "Note Controller Spec: should increase note counter when note added")
  }
  testAddNote();


  function testShowSingleNoteForCurrentPage() {
    assert.isEqual(controller.getSingleNote(1), 'Some text', "Note Controller Spec: should return single note text")
  }

  testShowSingleNoteForCurrentPage();


  function testSetEventListener() {

    var text = document.getElementById('app').innerText

    controller.setEventListener()
    document.getElementById('1').click()
    assert.isEqual(text, "Some text", "Note Controller Spec: listens for hashchange to display single note")

  }

  testSetEventListener();

  function testSetSubmitEvent() {
    var note = document.getElementById("note")
    var text = document.getElementById("text")
    var html = document.getElementById("app").innerHTML

    note.value = "Some text"
    controller.setSubmitEvent()
    text['submit'].click()

    assert.isEqual(html, '<ul><li><a href="#notes/1" id="1">Some text</a></li></ul>', "Note Controller Spec: should return html string of new note submitted by form")

  }

  testSetSubmitEvent()


})();
