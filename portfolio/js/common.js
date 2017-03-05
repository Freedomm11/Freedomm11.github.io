$(document).ready(function() {
	$(".top_text h1").animated("fadeInDown", "fadeOutUp"); // анимации 
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
    $(".animation_3").animated("fadeInRight", "fadeOutRight");

    $(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
    $(".right .resume_item").animated("fadeInRight", "fadeOutDown");


	


	function heightDetect() {    // высота блока будет равна высоте экрана пользователя
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	

	$(window).load(function() {  // прелоадер

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
    });

	$(".toggle_mnu").click(function() {  // кнопка менюшки
	$(".sandwich").toggleClass("active");
	});
	
	$(".toggle_mnu").click(function() {  // всплывающее меню на весь экран при клике на кнопку менюшки
	if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
	  } else {
		$(".top_text").css("opacity", ".1");	
		$(".top_mnu").fadeIn(600);
		$(".top_mnu li a").addClass("fadeInUp animated");
	};
	});

	$(".top_mnu ul a").click(function() {  
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
		}).append("<span>");


	  $(".popup").magnificPopup({type:"image"}); // Magnific Popup
	  $(".popup_content").magnificPopup({type:"inline", midClick: true});


	  $("#portfolio_grid").mixItUp(); // для работы сортировочных плиток в портфолио

	  $(".s_portfolio li").click(function() {  //  переключение li в меню порфолио
	  	$(".s_portfolio li").removeClass("active");
	  	$(this).addClass("active");
	  });

	  $(".portfolio_item").each(function(i){  // цикл для раздавания id в плитке портфолио
	  	$(this).find("a").attr("href", "#work_" + i);
	  	$(this).find(".podrt_descr").attr("id", "work_" + i);
	  });

	  $("input, select, textarea").jqBootstrapValidation(); // Валидация формы отправки

	  $(".top_mnu ul a").mPageScroll2id(); // плавный скроллинг

});