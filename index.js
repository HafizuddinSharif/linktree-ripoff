const phrase = ['Woot', 'Ma man', 'Sick animation', 'Logo']

// EVENT HANDLERS

$(".color-change").hover(function(){
  $(this).css("background-color", "white");
  }, function(){
  $(this).css("background-color", "#A3D8FF");
});

$(".click-animation").click(function() {
  $(this).animate({top: '20px', left: '20px'})
})

$(".logo-animation").click(function() {

  let current = $(this)
  let random = Math.floor(Math.random() * 4)

  $(".phrase").text(`"Sick animation, eh?"`)

  current.animate({top: '20px', left: '20px'})

  setTimeout(function() {
    current.animate({top: '0', left: '0'})
    current.css("background-color", "#A3D8FF");
    $(".phrase").text("")
  }, 1000)

})

$(".blue3").click(function() {

  let current = $(this)
  current.animate({top: '20px', left: '20px'})

  setTimeout(function() {
    $(".email").text("Copied!!")
  }, 450)

  setTimeout(function() {
    current.animate({top: '0', left: '0'})
    current.css("background-color", "#A3D8FF");
  }, 1000)

  setTimeout(function() {
    $(".email").text("hafizuddinshariff@gmail.com")
  }, 1000)

})

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
