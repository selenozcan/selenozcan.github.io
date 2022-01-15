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
    // $("#button-cv").click(function () {
    //   setTimeout(function() {
    //     $(".cv").fadeIn();}, 500);
    //   $(".home").fadeOut();
    //   $(".timeline").fadeOut();
    //   $(".skills").fadeOut();
    //   $(".projects").fadeOut();
    // });
    $("#button-home").click(function () {
      setTimeout(function() {
        $(".home").fadeIn();}, 500);
      $(".timeline").fadeOut();
      $(".skills").fadeOut();
      $(".projects").fadeOut();
      $(".cv").fadeOut();
    });
    
    var pythonTooltip = "Python&#xa;&#xa;Experience with Django,&#xa;Flask, Pandas, Tensorflow,&#xa;BeautifulSoup";
    $(".python").attr("tooltip", $.parseHTML(pythonTooltip)[0].data);
    var javaTooltip = "Java";
    $(".java").attr("tooltip", $.parseHTML(javaTooltip)[0].data);
    var cplusplusTooltip = "C++";
    $(".cplusplus").attr("tooltip", $.parseHTML(cplusplusTooltip)[0].data);
    var cTooltip = "C";
    $(".c").attr("tooltip", $.parseHTML(cTooltip)[0].data);
    var csharpTooltip = "C#"
    $(".csharp").attr("tooltip", $.parseHTML(csharpTooltip)[0].data);
    var html5Tooltip = "HTML"
    $(".html5").attr("tooltip", $.parseHTML(html5Tooltip)[0].data);
    var css3Tooltip = "CSS"
    $(".css").attr("tooltip", $.parseHTML(css3Tooltip)[0].data);
    var javascriptTooltip = "Javascript"
    $(".javascript").attr("tooltip", $.parseHTML(javascriptTooltip)[0].data);
  });


  