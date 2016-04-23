$(function(){
	//组件调用 start
	var start_date =new Date();
	$('.choice-date').datepicker({
		format: 'mm/dd/yyyy',//设置日期显示样式
		language: 'zh-CN',//设置语言
		startDate: new Date(),//所有日期控件可选日期>=当日日期
		zIndexOffset: '999'//控制日期控件z-index
	});
	//组件调用 end

	$("#submit").click(function(){ 
		//表单验证
		post_form();

		//var name = $('#sellerName').text();
		var type = $('#type').val();
		var city = $('#city').val();
		var resName = $('#resName').val();
		var area = $('#area').val();
		var startDate = $('#startDate').datepicker("getDate").toISOString().slice(0,10);
		var endDate = $('#endDate').datepicker("getDate").toISOString().slice(0,10);
		var image = $('#upfile').val().lastIndexOf('\\');
		image = $('#upfile').val().substring(image+1);// var packageNumber = $('#packageNumber').val();
		var inimage1 = $('#innerImg1').val().lastIndexOf('\\');
		inimage1 = $('#innerImg1').val().substring(inimage1+1);
		var inimage2 = $('#innerImg2').val().lastIndexOf('\\');
		inimage2 = $('#innerImg2').val().substring(inimage2+1);
		var inimage3 = $('#innerImg3').val().lastIndexOf('\\');
		inimage3 = $('#innerImg3').val().substring(inimage3+1);

		var oldPrice = $('#oldPrice').val();
		var newPrice = $('#newPrice').val();
		var mealSize = $('#mealSize').val();
		var packageName = $('#packageName').val();
		var address = $('#address').val();
		var phoneNum = $('#phoneNum').val();
		var holiday = $('input[name="holiday"]:checked').val();
		var makeAppointment = $('input[name="makeAppointment"]:checked').val();
		var room = $('input[name="room"]:checked').val();
		var packFood = $('input[name="packFood"]:checked').val();
		var wifi = $('input[name="wifi"]:checked').val();
		var parkingNum = $('#parkingNum').val();
		var info = $('#info').val();

		var data = {
			//"name": name,
			"type": type,
			"city": city,
			"resName": resName,
			"packageName": packageName,
			'startDate':startDate,
			'endDate':endDate,
			"image": image,
			'inimage1': inimage1,
			'inimage2': inimage2,
			'inimage3': inimage3,
			'oldPrice':oldPrice,
			'newPrice':newPrice,
			'mealSize':mealSize,
			'area':area,
			'address':address,
			'holiday':holiday,
			'makeAppointment':makeAppointment,
			'room':room,
			'packFood':packFood,
			'wifi':wifi,
			'parkingNum':parkingNum,
			'info':info,
			'phoneNum':phoneNum
		};
		console.log(
			"type"+type+'\n'+
			"city"+city+'\n'+
			"resName"+resName+'\n'+
			"packageName"+packageName+'\n'+
			'startDate'+startDate+'\n'+
			'endDate'+endDate+'\n'+
			"image"+image+'\n'+
			'oldPrice'+oldPrice+'\n'+
			'newPrice'+newPrice+'\n'+
			'mealSize'+mealSize+'\n'+
			'area'+area+'\n'+
			'address'+address+'\n'+
			'holiday'+holiday+'\n'+
			'makeAppointment'+makeAppointment+'\n'+
			'room'+room+'\n'+
			'packFood'+packFood+'\n'+
			'wifi'+wifi+'\n'+
			'parkingNum'+parkingNum+'\n'+
			'info'+info+'\n'+
			'phoneNum'+phoneNum
			);
		$.ajax({ 
			url: '/busData',
			type: 'post',
			data: data,
			success: function(data,status){ 
				if(status == 'success'){ 
					location.href = 'busData';
					//alert('成功');
				}
			},
			error: function(status,err){ 
				alert("此套餐已存在！");
				location.href = 'busData';
				//console.log('error html');
					//location.href = 'register';
			}
		}); 
	});
})
//日期比较
function checkDate(obj1,obj2,boolean){ 
	var a = $(obj1).datepicker("getDate").toISOString().slice(0,10);
	var b = $(obj2).datepicker("getDate").toISOString().slice(0,10); 
	a = parseInt(a.replace("-", "").replace("-", ""));
	b = parseInt(b.replace("-", "").replace("-", "")); 
	if(!boolean){//两日期不可相等
		if(a<b){
			return 1;
		}else{
			return -1;
		}
	}else{//两日期可相等
		return 0;
	}
}

//没有数据,判空、报错
function noData(obj,string){
	obj.parent().append("<label class='tips2'>"+string+"</label>");
	obj.focus();
}
// //验证表单  认为每一项都是必填
function post_form(){
	//var name = $('#sellerName');
	var resName = $('#resName');//.val();
	var type = $('#type');
	var city = $('#city');
	var packageName = $('#packageName');
	var packageNumber = $('#packageNumber');
	var oldPrice = $('#oldPrice');
	var newPrice = $('#newPrice');
	var mealSize = $('#mealSize');
	var startDate = $('#startDate');
	var endDate = $('#endDate');
	var address = $('#address');
	var info = $('#info');
	var holiday = $('#holiday');
	var image = $('#upfile');
	var inimage1 = $('#innerImg1');
	var inimage2 = $('#innerImg2');
	var inimage3 = $('#innerImg3');
	//移除所有错误提示
	$('.tips2').remove();
	//v_resname = name.text();
	var v_type = type.val();
	var v_city = city.val();
	var v_resName = resName.val();
	var v_packageName = packageName.val();
	var v_packageNumber = packageNumber.val();
	var v_oldPrice = oldPrice.val();
	var v_newPrice = newPrice.val();
	var v_startDate = startDate.datepicker("getDate");//.toISOString().slice(0,10);
	var v_endDate = endDate.datepicker("getDate");//.toISOString().slice(0,10);
	var v_address = address.val();
	var v_mealSize = mealSize.val();
	var v_info = info.val();
	var v_holiday = $('input[name="holiday"]:checked').val();
	var v_image = $('#upfile').val().lastIndexOf('\\');
	v_image = $('#upfile').val().substring(image+1);
	var v_inimage1 = $('#innerImg1').val().lastIndexOf('\\');
	v_inimage1 = $('#innerImg1').val().substring(inimage1+1);
	var v_inimage2 = $('#innerImg2').val().lastIndexOf('\\');
	v_inimage2 = $('#innerImg2').val().substring(inimage2+1);
	var v_inimage3 = $('#innerImg3').val().lastIndexOf('\\');
	v_inimage3 = $('#innerImg3').val().substring(inimage3+1);
	if(v_resName == ""){
		noData(resName,"未填写店铺名称");
		return false;
	}
	// if(v_type == "请选择商家类别"){
	// 	noData(type,"未选择商家名称");
	// 	return false;
	// }
	if(v_startDate == null){
		noData(startDate,"未选择开始日期");
		return false;
	}
	if(v_endDate == null){
		noData(endDate,"未选择结束日期");
		return false;
	}else{
		bool = checkDate('#startDate','#endDate',false);
		if(bool == 0 || bool == -1){
			noData($('#endDate'),"结束日期不能早于或等于开始日期");
			return false;
		}
	}
	if(v_packageName == ""){
		noData(packageName,"未填写套餐名称");
		return false;
	}
	if(v_image == ''){
		noData(image,"未上传图片");
		return false;
	}
	if(v_inimage1 == ''){
		noData(iinmage1,"未上传图片1");
		return false;
	}
	if(v_inimage2 == ''){
		noData(inimage2,"未上传图片2");
		return false;
	}
	if(v_inimage3 == ''){
		noData(inimage3,"未上传图片3");
		return false;
	}
	if(v_oldPrice ==''){
		noData(oldPrice,"未填写商品原价");
		return false;
	}
	if(v_newPrice == ''){
		noData(newPrice,"未填写商品现价");
		return false;
	}
	if(v_mealSize == ''){
		noData(address,"未填写套餐规格");
		return false;
	}
	if(v_packageNumber == ""){
		noData(packageNumber,"未填写套餐数量");
		return false;
	}
	if(v_address == ''){
		noData(address,"未填写店铺地址");
		return false;
	}
	if(v_info == ''){
		// noData($('#edito1'),"未填写描述");
		$("#info").parent().append("<label class='tips2'>未填写描述</label>");
		return false;
	}
	console.log();
}

//获取数据
function getData(){
	name = $('#sellerName').text();
	type = $('#type').val();//find('option:selected').
	resName = $('#resName').val();
	packageName = $('#packageName').val();
	packageNumber = $('#packageNumber').val();
	oldPrice = $('#oldPrice').val();
	newPrice = $('#newPrice').val();
	//startDate = $('#startDate').datepicker("getDate").toISOString().slice(0,10);
	//endDate = $('#endDate').datepicker("getDate").toISOString().slice(0,10);
	address = $('#address').val();
	mealSize = $('#mealSize').val();//find('option:selected').
	info = $('#info').val();
	holiday = $('input[name="holiday"]:checked').val();
	image = $('#upfile').val().lastIndexOf('\\');
	image = $('#upfile').val().substring(image+1);
	
}