$(function(){
  $('.toggle').click(function(){
	$(this).next('.menu1').toggleClass('visible');
	$(this).toggleClass('visible');
	$('.toggle2').removeClass('visible2');
  });

  $('.toggle2').click(function(){
	$(this).toggleClass('visible2');
  $(this).siblings().removeClass('visible2');
  });

  $('.closeMenu').click(function(){
    // var thisParent = $(this).parent().parent();
    //     console.log(thisParent.attr('class'));
    $('.menu1').removeClass('visible');
    });

    $('.backToMenu1').click(function(){
      // var thisParent = $(this).parent().parent();
      //     console.log(thisParent.attr('class'));
      $('.menu2').removeClass('visible');
      });

  $('.selectMenu').click(function(){
    // Close the menu
    var firstToggle = $(this).parent().parent().parent().parent();
    // var check = $(this).parent().parent();
    // console.log($(this).children());

    firstToggle.removeClass('visible');
 
    // Get task name and category from text in menus
    var taskCategory = $(this).parent().parent().siblings().text();
    // console.log($(this).parent().parent().siblings().text());
    
    // get category number to add to class
    // var categoryImg = $(this).parent().parent().siblings().text();
    var categoryName = $(this).prev("div").attr('class');   
    console.log(categoryName);

    
    var taskName = this.textContent ;
    // console.log(taskName);
    // var taskLabel = "<div class=" + categoryName + "></div><p class='taskLabel'>" + taskName +"</p>" ;
    // console.log(taskCategory + " > " + taskName );
    var taskLabel = taskCategory + " > " + taskName ;


    // put text from menu in to the input field
    // document.selectTask.inputTask.value = taskLabel; 
    document.getElementById("changethis").innerHTML = `<div class="center list-item__center list-item--chevron__center">` +taskLabel+ `</div>` ;
    });

});
