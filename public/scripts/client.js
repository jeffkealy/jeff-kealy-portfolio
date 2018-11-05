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
  sr.reveal('.projectsContainer h1');
  sr.reveal('.fudr-remake',{ delay: 100 });
  sr.reveal('.fudr',{ delay: 100 });
  sr.reveal('.amDS',{ delay: 100 });
  sr.reveal('.funThings',{ delay: 100 });
  sr.reveal('.styleInTheHood',{ delay: 100 });
  sr.reveal('.ttatc',{ delay: 100 });
  sr.reveal('.aboutMeContainerMobile',{ delay: 100 });

  //scroll to work div
  $("#workButton").click(function() {
    $('html, body').animate({
        scrollTop: $(".workContainer").offset().top
    }, 600);
  });
  //scroll to projects div
  $("#projectsButton").click(function() {
    $('html, body').animate({
        scrollTop: $(".projectsContainer").offset().top
    }, 600);
});
})
