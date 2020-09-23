const request = require("request");
const fs = require("fs");
const {recommendTable} = require("./recommendTable")//引入数据库表

request({
    method:"GET",
    // pc端首页爬取
    // url:"https://u.y.qq.com/cgi-bin/musics.fcg",
    // qs:{
    //     _: "recom8952437019065209",
    //     g_tk: "5381",
    //     sign: "zzad2wnzdpusesm7eeff15c4441255ee9ef959d8dacccc3f88",
    //     loginUin: 0,
    //     hostUin: 0,
    //     format: "json",
    //     inCharset: "utf8",
    //     outCharset: "utf-8",
    //     notice: 0,
    //     platform: "yqq.json",
    //     needNewCode: 0,
    //     data:`{"comm":{"ct":24},"category":{"method":"get_hot_category","param":{"qq":""},"module":"music.web_category_svr"},"recomPlaylist":{"method":"get_hot_recommend","param":{"async":1,"cmd":2},"module":"playlist.HotRecommendServer"},"playlist":{"method":"get_playlist_by_category","param":{"id":8,"curPage":1,"size":40,"order":5,"titleid":8},"module":"playlist.PlayListPlazaServer"},"new_song":{"module":"newsong.NewSongServer","method":"get_new_song_info","param":{"type":5}},"new_album":{"module":"newalbum.NewAlbumServer","method":"get_new_album_info","param":{"area":1,"sin":0,"num":20}},"new_album_tag":{"module":"newalbum.NewAlbumServer","method":"get_new_album_area","param":{}},"toplist":{"module":"musicToplist.ToplistInfoServer","method":"GetAll","param":{}},"focus":{"module":"music.musicHall.MusicHallPlatform","method":"GetFocus","param":{}}}`
    // }

    //移动端首页爬取
    url:"https://u.y.qq.com/cgi-bin/musicu.fcg",
    qs:{
        cgiKey: "GetHomePage",
        _: "1600803996655" ,
        data:`{"comm":{"g_tk":5381,"uin":"","format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"h5","needNewCode":1},"MusicHallHomePage":{"module":"music.musicHall.MusicHallPlatform","method":"MobileWebHome","param":{"ShelfId":[101,102,161]}},"hotkey":{"module":"tencent_musicsoso_hotkey.HotkeyService","method":"GetHotkeyForQQMusicMobile","param":{"remoteplace":"txt.miniapp.wxada7aab80ba27074","searchid":"1559616839293"}}}`
    }
},async(err,res,body)=>{
    //写入数据
    // fs.writeFile(`${__dirname}/demo1.json`,body,{
    //     encoding:"utf8"
    // },(err)=>{
    //     if (err) throw err;
    //     console.log("写入成功")
    // })

    //删除前一天的数据
    await  recommendTable.deleteMany({});
    let data =JSON.parse(body).MusicHallHomePage.data.v_shelf;//获取所有的推荐分区信息
    data.forEach((item)=>{
        let category=item.title_template; //获取分区的名称
        let categoryList=item.v_niche[0].v_card;//获取该分区里面的详细歌单列表
        let categoryListArr=[];//存放歌单的id,cover,title,plays
        categoryList.forEach((list)=>{
            if(list.time){
                return
            }else{
                categoryListArr.push({
                    id:list.id,
                    title:list.title,
                    cover:list.cover,
                    cnt:list.cnt
                })
            }
        })
        if(categoryListArr.length !== 0) {
            recommendTable.create({
                category: category,
                categoryList: categoryListArr
            }).then(() => {
                console.log("写入数据成功!!!")
            }).catch((err) => {
                console.log("写入数据失败!!!");
                throw err;
            })
        }
    })
})