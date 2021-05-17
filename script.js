  //LANGUAGE DROPDOWN
  $(".option").click(function() {
   $(".langtitle").text($(this).text()); 
   $(".list").hide();
});

$(".option").click(function() {
   $(".langtitle").text($(this).text()); 
});

$(".langtitle").click(function() {
   $(this).addClass('opened-lang')
   $("#lang_dropdown ul").show();
});

//Hide selected language in dropdown
var hideLang = function() {
   $('.list a').each(function(i, li) {
      var title =  $('.langtitle');
      if(li.innerText === title.text()) {
         li.parentElement.style.display = "none";
      } else {
         li.parentElement.style.display = "block";
      }
   })
};
setInterval(hideLang, 0);