$(function(){
	//初始化数据
	setData();
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
		var data = getData();
		console.log(data);
		//ajax  更新数据
		$.ajax({ 
			url: '/editorBusData',
			type: 'post',
			data: data,
			success: function(data,status){ 
				if(status == 'success'){ 
					alert('修改成功！跳转页面');
					location.href = 'bus_upData';
				}
			},
			error: function(status,err){ 
				alert("post 数据 error！");
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
	var str = window.location.search;
	var id = str.substring(str.indexOf('=')+1);
	name = $('#sellerName').text();
	type = $('#type').val();//find('option:selected').
	resName = $('#resName').html();
	packageName = $('#packageName').html();
	startDate = $('#startDate').datepicker("getDate");//.toISOString().slice(0,10);
	if(startDate == null){
		startDate = $('#startDate').parent().find('span').html();
	}else{
		//console.log(startDate);
		startDate = $('#startDate').datepicker("getDate").toISOString().slice(0,10);rtDate = $('#startDate').datepicker("getDate");//.toISOString().slice(0,10);
	}
	endDate = $('#endDate').datepicker("getDate");//.toISOString().slice(0,10);
	if(endDate == null){
		endDate = $('#endDate').parent().find('span').html()
	}else {
		//endDate = $('#endDate').datepicker("getDate").toISOString().slice(0,10);
	}
	image = $('#upfile').val().lastIndexOf('\\');
	image = $('#upfile').val().substring(image+1);
	if(image == ''){
		image = $('#upfile').parent().find('span').html();
	}
	inimage1 = $('#innerImg1').val().lastIndexOf('\\');
	inimage1 = $('#innerImg1').val().substring(inimage1+1);
	if(inimage1 == ''){
		inimage1 = $('#innerImg1').parent().find('span').html();
	}
	inimage2 = $('#innerImg2').val().lastIndexOf('\\');
	inimage2 = $('#innerImg2').val().substring(inimage2+1);
	if(inimage2 == ''){
		inimage2 = $('#innerImg2').parent().find('span').html();
	}
	inimage3 = $('#innerImg3').val().lastIndexOf('\\');
	inimage3 = $('#innerImg3').val().substring(inimage3+1);
	if(inimage3 == ''){
		inimage3 = $('#innerImg3').parent().find('span').html();
	}
	oldPrice = $('#oldPrice').val();
	newPrice = $('#newPrice').val();
	mealSize = $('#mealSize').val();
	area = $('#area').val();
	address = $('#address').val();
	phoneNum = $('#phoneNum').val();
	holiday = $('input[name="holiday"]:checked').val();
	makeAppointment = $('input[name="makeAppointment"]:checked').val();
	room = $('input[name="room"]:checked').val();
	packFood = $('input[name="packFood"]:checked').val();
	wifi = $('input[name="wifi"]:checked').val();
	parkingNum = $('#parkingNum').val();
	info = $('#info').val();
	var data = {
			//"name": name,
			id: id,
			"type": type,
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
	console.log(data);
	return data;
}
//初始化数据
function setData(){
	$('#type').val($('#type').parent().find('span').html());
	$('#mealSize').val($('#mealSize').parent().find('span').html());
	console.log($('.hs').html());
	console.log($('#holiday').parent().find('span').html());
	if($('#holiday').parent().find('span').html() == 'true'){
		console.log("kkk");
		$('input[name="holiday"]:eq(0)').attr('checked','true');
	}else {
		console.log("kkkmmm");
		$('input[name="holiday"]:eq(1)').attr('checked','true');
	}
	if($('#room').parent().find('span').html() == 'true'){
		$('input[name="room"]:eq(0)').attr('checked','true');
	}else {
		$('input[name="room"]:eq(1)').attr('checked','true');
	}
	if($('#room').parent().find('span').html() == 'true'){
		$('input[name="room"]:eq(0)').attr('checked','true');
	}else {
		$('input[name="room"]:eq(1)').attr('checked','true');
	}
	if($('#packFood').parent().find('span').html() == 'true'){
		$('input[name="packFood"]:eq(0)').attr('checked','true');
	}else {
		$('input[name="packFood"]:eq(1)').attr('checked','true');
	}
	if($('#wifi').parent().find('span').html() == 'true'){
		$('input[name="wifi"]:eq(0)').attr('checked','true');
	}else {
		$('input[name="wifi"]:eq(1)').attr('checked','true');
	}
	$('#info').val($('#info').parent().find('span').html());
}