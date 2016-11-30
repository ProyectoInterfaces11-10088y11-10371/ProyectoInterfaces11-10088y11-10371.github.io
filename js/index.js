jQuery(document).ready(function() {
  jQuery(".trigger").click(function() {
    jQuery(".menu").toggleClass("active"); 
  });
});

jQuery('input').toggle(
    function(){
        jQuery('img').attr('src', '10dollars.png');
    }, function() {
        jQuery('img').attr('src', '10lts');
    }
);

