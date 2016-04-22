/**/
/**
 * 公共Add方法
 * @param model 要操作数据库的模型
 * @param conditions 增加的条件,如{id:xxx}
 * @param callback 回调方法
 */
exports.addData = function(model,data,callback) {

    //model.collection.insert(data, callback);
    model.collection.insert(data,callback);
}
// exports.addDocumentData = function(model,data,callback) {
//     //model.collection.document.insert(data,callback);

// }
/**/
/**
 * 公共Add方法
 * @param model 要操作数据库的模型
 * @param conditions 增加的条件,如{id:xxx}
 * @param callback 回调方法
 */
exports.equalData = function(model,condition,callback) {

    //model.collection.insert(data, callback);
    model.findOne(condition,callback);
}
/**
 * 公共update方法
 * @param model 要操作数据库的模型
 * @param conditions 增加的条件,如{id:xxx}
 * @param update 更新条件{set{id:xxx}}
 * @param options 
 * @param callback
 */
exports.updateData =function(model,condition,update,callback) {

    model.update(condition, update,{ multi: true },callback);
}

/**
 * 公共find方法 非关联查找
 * @param model
 * @param conditions查找时限定的条件
 * @param options
 * @param callback
 */
exports.findData =function(model,condition,callback) {

    model.find(condition, callback);
}

// exports.findData =function(model,condition,callback) {

//     model.find(condition, callback);
// }
/**
 * 公共remove方法
 * @param model
 * @param conditions
 * @param callback
 */
exports.removeData =function(model,conditions,callback) {
    model.remove(conditions,callback);
    // model.remove(conditions, function(error,result) {
    //     if (error) {
    //         console.log(error);
    //         //res.send(500);
    //         //callback({success: 0, flag: "remove data fail"});
    //     } else {
    //         console.log('此订单已删除');
    //         //res.send(200);
    //         // if(result.result.n!=0){
    //         //     console.log('remove success!');
    //         //     callback({success: 1, flag: "remove data success"});
    //         // }
    //         // else{
    //         //     console.log('remove fail:no this data!');
    //         //     callback({success:0, flag: 'remove fail:no this data!'});
    //         // }

    //     }
    // });
}

/**
 * 公共populate find方法
 * 是关联查找
 * @param model
 * @param conditions
 * @param path :The field need to be refilled （需要覆盖的字段）
 * @param fields :select fields (name -_id,Separated by a space field,In front of the field name plus "-"said not filled in)
 * @param refmodel （关联的字段，有path可为null）
 * @param options
 * @param callback
 */
exports.findDataPopulation =function(model,conditions,path,fields,refmodel,options,callback) {
    model.find(conditions)
    .populate(path,fields, refmodel,options)
    .exec(function(err, result) {
            if(err) {
                console.log(err);
                callback({success: 0, flag: 'population find data fail'});
            } else {
                if(result.length!=0){
                    console.log('population find success!');
                    callback({success: 1, flag: 'population find data success',result:result});
                }
                else{
                    console.log('population find fail:no this data!');
                    callback({success: 0, flag: 'population find fail:no this data!'});
                }

            }

    });

}