// When document is ready

$(document).ready(function() {
  document.addEventListener('scroll', checkForBottom);
});

function checkForBottom() {
  if (document.body.scrollHeight == document.body.scrollTop + window.innerHeight) {
    document.removeEventListener('scroll', checkForBottom);
    getNextElements();
  }
}

function getNextElements() {
  // unhide the loading spinner from the DOM
  $("#spinner").show();
  // grab the ActiveRecord ID of the last object on the page
  // via its data attribute
  var thingId = $(".thing").last().data("id");

  // Make an AJAX call to your relevant route that gets the next
  // several objects. Pass that request the ID of the last thing
  // and how many you want.
  $.get("/next", {id: thingId, next: 30}).done(function(response) {
    // When you receive a response, hide the spinner
    $("#spinner").hide();

    // If there are no more results, then you'll get back an empty string
    // If that's the case, just break out of this function
    if (response === "") return

    // Convert the response into HTML and then a collection of jQuery objects.
    // This selects only the "thing" class elements.
    var $things = $($.parseHTML(response).filter(function(el) { return el.className === "thing" }));

    // Check to see if the elements you got back are already on the page
    // If so, don't append the ones from the server
    if (hasId($things, thingId)) {
      console.error("already grabbed these elements");
    } else {
      // If not, then append the response
      $("#things-container").append(response);
      // Rebind the scroll event listener that we turned off
      document.addEventListener('scroll', checkForBottom);
    }
  })
}

// Helper function to see whether the response elements
// are already on the page.
function hasId(things, id) {
  for (var i = 0; i < things.length; i++) {
    if (things.eq(i).data("id") === id) {
      return true
    }
  }
  return false;
}
