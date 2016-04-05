$(function(){
	$("#add").click(function(){
		var n = parseInt($("#pNumber").val());
		n +=1;
		$("#pNumber").val(n);
	});
	$("#cut").click(function(){
		var n =parseInt($("#pNumber").val());
		if(n > 1) {
			n -=1;
			$("#pNumber").val(n);
		}
		
	});
	$('.collect-info').click(function(){
		var span = $(this).find('span')
		var bool = span.hasClass('icon-weishoucang');
		if(bool){
			span.removeClass('icon-weishoucang');
			span.addClass('icon-shoucangyishoucang-copy');
		}else {
			span.removeClass('icon-shoucangyishoucang-copy');
			span.addClass('icon-weishoucang');
		}
		
	});
})