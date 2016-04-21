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

	//判断是否已经收藏 相应改变收藏按钮状态
	lightHeart();
	function lightHeart(){
		var arr = [];
		var d = $('.collectId').length;//.html();
		for(var i = 0; i<d; i++){
			arr.push($($('.collectId')[i]).html());
		}
		var str = window.location.search;
		var id = str.substring(str.indexOf('=')+1);
		for(var i=0; i<arr.length;i++){
			if(id == arr[i]){
				$('.collect-info').find('span').removeClass('icon-weishoucang');
				$('.collect-info').find('span').addClass('icon-shoucangyishoucang-copy');
			}
		}
	}
	//收藏
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
				//alert('收藏成功！');
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
				//alert('取消收藏！');
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
	//获取order表中的数据 评分 评价内容
	var $str = window.location.search;
	var $id = $str.substring($str.indexOf('=')+1);
	var arr = [];
	$.ajax({
        type: "get",
        url: '/detailInfo?pid='+$id,
        dataType: "json",
        async: false,//使得ajax内部方法内的数据能在外部被访问
        success: function(data){
			if(data){  
	            //console.log(data[0]._id);
	            $.each(data,function(index){
	            	arr.push(data[index]);
	            })
	            //console.log(arr);
	            //return arr;
	        } else{  
	            alert('失败');
	        }                      
      	}
    });
    getStar(arr);
    function getStar(arr){
    	var farr = [];
    	var five = [];
    	var four = [];
    	var three = [];
    	var two = [];
    	var one = [];
    	if(arr.length>0){
    		for(var i=0,len=arr.length;i<len;i++){
	    		if(arr[i].fstatus == 1){
	    			farr.push(arr[i]);
	    			var star = arr[i].star;
	    			if(star == 5){
	    				five.push(arr[i]);
	    			}else if(star == 4){
	    				four.push(arr[i]);
	    			}else if(star == 3){
	    				three.push(arr[i]);
	    			}else if(star == 2){
	    				two.push(arr[i]);
	    			}else{
	    				one.push(arr[i]);
	    			}
	    		}
	    	}
	    	$(".level1").html(five.length+four.length);
	    	$(".levle2").html(three.length+two.length);
	    	$(".level3").html(one.length);
	    	$(".p-level1").html(((five.length+four.length)/farr.length*100).toFixed(1));

	    	$(".p-level2").html(((three.length+two.length)/farr.length*100).toFixed(1));
    		//console.log((three.length+two.length)/farr.length*100);
	    	$(".p-level3").html((one.length/farr.length*100).toFixed(1));
	    	console.log(one.length);
	    	$(".level1-line").css('width',(five.length+four.length)/farr.length*100+'%');
	    	$(".level2-line").css('width',(three.length+two.length)/farr.length*100+'%');
	    	$(".level3-line").css('width',one.length/arr.length*60+'%');
	    	$(".level").html((5*five.length+4*four.length+3*three.length+2*two.length+one.length)/farr.length);
    		//星星
    		var s = (5*five.length+4*four.length+3*three.length+2*two.length+one.length)/farr.length;
    		console.log(s/5*80);
    		$('.star-light').css('width',s/5*80+'px');
    	}
    	//已评价的
    	//console.log(farr.length);
    	//
    	//console.log('five'+five.length);
    	//console.log("three"+three.length);
    }
})