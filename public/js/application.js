$(document).ready(function() {
  
});

document.addEventListener('scroll', function (event) {
  if (document.body.scrollHeight == 
    document.body.scrollTop +        
    window.innerHeight) {
    alert("Bottom!");
  }
});
