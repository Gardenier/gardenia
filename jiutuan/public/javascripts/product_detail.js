$(function(){
	$('.carousel').carousel();
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
	//收藏
	// $('#collection').click(function(){
		
	// 	console.log(id+'\n'+pna+'\n'+pdetail+'\n'+price);
	// });
	$('.collect-info').click(function(){
		var uname = $('#userName a').html();
		if(uname == "登录"){
			window.location.href = '/login';
		}else {
			var str = window.location.search;
			var id = str.substring(str.indexOf('=')+1);
			//console.log(id);
			var index = $('.resName').html().indexOf('】');
			var rna = $('.resName').html().substring(1,index);
			var pdetail = $('.packageName').html();
			var price = $('#newPrice').html();
			
			var span = $(this).find('span')
			var bool = span.hasClass('icon-weishoucang');

			if(bool){
				span.removeClass('icon-weishoucang');
				span.addClass('icon-shoucangyishoucang-copy');
				var data = {
					userName: uname,
					id: id,
					resName: rna,
					pdetail: pdetail,
					price: price
				}
				$.ajax({
					url:'/collection',
					type:'post',
					data: data,
					success: function(data,status){ 
						if(status == 'success'){ 
							alert('收藏成功！');
						}
					},
					error: function(err,status){ 
						alert(err);
					}
				});
			}else {
				span.removeClass('icon-shoucangyishoucang-copy');
				span.addClass('icon-weishoucang');
				var data = {
					id: id,
					userName: uname
				}
				$.ajax({
					url:'/uncollection',
					type:'post',
					data: data,
					success: function(data,status){ 
						if(status == 'success'){ 
							alert('取消收藏！');
						}
					},
					error: function(err,status){ 
						alert(err);
					}
				});
			}
		}
	});
})