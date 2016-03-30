module.exports = { 
	user:{ 
		name:{type: String, required: true},
		password:{type: String, required: true}
	},
	BUser:{ 
		name:{type: String, required: true},
		password:{type: String, required: true}
	},
	sellContent:{ 
		name:{type: String, required: true},
		type:{type: String, required: true},
		resName:{type: String, required: true},
		packageName:{type: String, required: true},
		oldPrice:{type: String, required: true},
		newPrice:{type: String, required: true},
		startDate:{type:String, required: true},
		endDate:{type: String, required: true},
		packageNumber:{type: String, required: true},
		address:{type: String, required: true},
		mealSize:{type: String, required: true},
		info:{type: String, required: true},
		holiday:{type: String, required: true},
		image:{type: String, required: true},
		makeAppointment:{type: String, required: true},
		room:{type: String, required: true},
		packFood:{type: String, required: true},
		wifi:{type: String, required: true},
		parkingNum:{type: String, required: true}
	}
};


// PersonSchema.methods.findSimilarTypes = function(cb){
//     return this.model('Person').find({type:this.type},cb);
// }