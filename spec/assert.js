var assert = {
  isTrue: function(assertionToCheck, title) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy. " + "Test:" + title);
    } else {
      console.log(title + " passed")
    }
  },

  isEqual: function(assertionToCheck1, assertionToCheck2, title) {
    if (assertionToCheck1 !== assertionToCheck2) {
      throw new Error("Assertion failed: " + assertionToCheck1 + " does not equal " + assertionToCheck2 + " Test:" + title);
    } else {
      console.log(`Passed: ${title}`)
    }
  }
};