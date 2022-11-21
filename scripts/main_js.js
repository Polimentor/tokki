$('.language').click(function(){
	$('.language').toggleClass('active');
});

$("#click_video_0, #click_video_1, .video_place").click(function(){
	$('.full_video').addClass('view');
	return false;
});


$('.click_btn_toogle_menu').click(function(){
	$('.media_menu').addClass('active');
});

$('.btn_close_video').click(function(){
	$('.full_video').removeClass('view'),
	$('.media_menu').removeClass('active'),
	$('.contact_modal').removeClass('active'),
	$('.contact_modal_buy').removeClass('active');
	return false;
});

$("#btn_modal_contact, #contact_form_second_btn").click(function(){
	$('.contact_modal').addClass('active');
	return false;
});


$(".ord_a, .for_price, .foot_btn, #burg_buy_afiry").click(function(){
	$('.contact_modal_buy').addClass('active');
	return false;
});

//--------scroll menu------------------

var h = $(window).height();
$(window).scroll(function(){
	if ( ($(this).scrollTop()+h - 50) >= $(".section_2").offset().top) {
		$('.btn_fixed_menu').addClass('active');
	}
	else {
		$('.btn_fixed_menu').removeClass('active');
	}
	
});

var animated = $(window).height();
$(window).scroll(function(){
	if ( ($(this).scrollTop()+animated) >= $("#prod_tabs").offset().top) {
		$(".items_nth").addClass('slideInLeft');
		$(".self_img").addClass('flipInY');
		$(".mini_description").addClass('flipInY');

	}
	
});

var animatedDown = $(window).height();
$(window).scroll(function(){
	if ( ($(this).scrollTop()+animatedDown) >= $(".place_for_price").offset().top) {
		$(".price_self").addClass('slideInDown');

	}
	
});

//------menu toogle-------------

$(document).ready(function(){
	$("nav, .bottom_select, .section_right, .center_section, .btn_fixed_menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

//-----------timer-----------------

var _Seconds = +$('.timer').text();
function go() {  
	if (_Seconds > 0) {
		_Seconds++;
		$('.timer').text(_Seconds.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "+");
	}
	var millisec = Math.ceil(Math.random()*10) * 500;
	setTimeout(go, millisec);
}
go();

$('.center_section').on('click', 'a', function(){
	$('.media_menu').removeClass('active');
});