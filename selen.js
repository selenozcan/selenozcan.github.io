$(function () {
    $("#button-timeline").click(function () {
      setTimeout(function() {
        $(".timeline").fadeIn();}, 500);
      $(".home").fadeOut();
      $(".skills").fadeOut();
      $(".projects").fadeOut();
      $(".cv").fadeOut();
      
    });
    $("#button-skills").click(function () { 
      setTimeout(function() {
        $(".skills").fadeIn();}, 500);
      $(".home").fadeOut();
      $(".timeline").fadeOut();
      $(".projects").fadeOut();
      $(".cv").fadeOut();
      
    });
    $("#button-projects").click(function () {
      setTimeout(function() {
        $(".projects").fadeIn();}, 500);
      $(".home").fadeOut();
      $(".timeline").fadeOut();
      $(".skills").fadeOut();
      $(".cv").fadeOut();
    });
    $("#button-cv").click(function () {
      setTimeout(function() {
        $(".cv").fadeIn();}, 500);
      $(".home").fadeOut();
      $(".timeline").fadeOut();
      $(".skills").fadeOut();
      $(".projects").fadeOut();
    });
    $("#button-home").click(function () {
      setTimeout(function() {
        $(".home").fadeIn();}, 500);
      $(".timeline").fadeOut();
      $(".skills").fadeOut();
      $(".projects").fadeOut();
      $(".cv").fadeOut();
    });
    
    var pythonTooltip = "Line 1.&#xa;Line 2";
    $(".python").attr("tooltip", $.parseHTML(pythonTooltip)[0].data);
  });


  