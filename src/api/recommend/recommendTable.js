const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/jinse",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

//新建表规则
let recommendSchema = new Schema({
    category:{
        type:String,
        required:true
    },
    categoryList:[
        {
            id:{
                type:String,
                required:true
            },
            cover:{
                type:String,
                required:true
            },
            title:{
                type:String,
                required:true
            },
            cnt:{//播放数量
                type:Number,
                required:true
            }
        }
    ]
})

//新建表
let recommendDatas = mongoose.model("recommendDatas",recommendSchema);

module.exports={
    recommendTable:recommendDatas
}