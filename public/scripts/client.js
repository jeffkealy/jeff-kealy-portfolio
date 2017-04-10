$(document).ready(function(){
  console.log("hello");
  //scroll to top button
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "fast");
    return false;
  });
  //scroll appear
  window.sr = ScrollReveal({reset: true});
  sr.reveal('.workContainer h1');
  sr.reveal('.fudr');
  sr.reveal('.amDS');
  sr.reveal('.funThings');
  sr.reveal('.styleInTheHood');
  //scroll to work div
  $("#workButton").click(function() {
    $('html, body').animate({
        scrollTop: $(".workContainer").offset().top
    }, 600);
});
})
