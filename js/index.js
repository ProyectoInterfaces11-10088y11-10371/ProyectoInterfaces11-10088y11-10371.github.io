$(document).ready(function() {
  $(".trigger").click(function() {
    $(".menu").toggleClass("active"); 
  });
});

$('input').toggle(
    function(){
        $('img').attr('src', '10dollars.png');
    }, function() {
        $('img').attr('src', '10lts');
    }
);

