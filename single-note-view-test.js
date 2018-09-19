(function(exports) {
  function testSingleNoteView() {
    function DoubleNoteModel() {}

    DoubleNoteModel.prototype.getNoteText = function() {
      return "hellooo i'm a notetext"
    }

    var doubleNoteModel = new DoubleNoteModel()
    var singleNoteView = new SingleNoteView(doubleNoteModel)

    console.log("note view test " + singleNoteView.htmlize())
    if(singleNoteView.htmlize() === "<div>hellooo i'm a notetext</div>") {
      console.log("note htmlized");  
    } else {
      throw new Error("this is not working!")
    }
  }
  testSingleNoteView()
})(this)