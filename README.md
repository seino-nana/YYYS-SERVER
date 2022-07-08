# 接口文档

## 业务组

### 获取轮播图

简要描述：

- 获取轮播图

请求URL：

- `https://www.3154movie.com/banners`

请求方式：

- GET

参数：

| 参数名    | 必选 | 类型   | 说明                          |
| :-------- | :--- | :----- | ----------------------------- |
| category3 | 是   | string | 二级分类(动作、科幻、喜剧...) |
| num       | 是   | number | 5                             |
| page      | 是   | number | 1                             |

调用例子：`https://www.3154movie.com/banners?category3=动作C&num=5&page=1`

返回示例：

```
[
    {
        "id": 180,
        "title": "记忆2022",
        "imgURL": "http://43.138.156.234:8001/1654149821938.jpg",
        "image_desc": "最新",
        "movieID": "110028",
        "category3": "动作片",
        "introduction": "2022年上映的动作惊悚电影，马丁坎贝尔担任导演，改编自2003年电影《杀手的记忆》",
        "create_time": "2022-06-02T06:03:42.000Z",
        "update_time": "2022-06-02T06:15:30.000Z"
    },
    {
        "id": 127,
        "title": "神秘海域",
        "imgURL": "http://43.138.156.234:8001/1653829384900.jpg",
        "image_desc": "最新",
        "movieID": "103114",
        "category3": "动作片",
        "introduction": "改编自知名游戏ip神秘海域，荷兰弟主演",
        "create_time": "2022-05-29T13:03:04.000Z",
        "update_time": "2022-06-02T06:15:20.000Z"
    },
    {
        "id": 182,
        "title": "暗夜博士：莫比亚斯",
        "imgURL": "http://43.138.156.234:8001/1654150297866.jpg",
        "image_desc": "最新",
        "movieID": "103516",
        "category3": "动作片",
        "introduction": "首次把漫威宇宙中最另类的暗黑超级英雄莫比亚斯呈现于大银幕。由奥斯卡最佳男配得主杰瑞德·莱托饰演莫比亚斯博士",
        "create_time": "2022-06-02T06:11:37.000Z",
        "update_time": "2022-06-02T06:12:22.000Z"
    },
    {
        "id": 181,
        "title": "北欧人",
        "imgURL": "http://43.138.156.234:8001/1654150090554.jpg",
        "image_desc": "最新",
        "movieID": "103479",
        "category3": "动作片",
        "introduction": "一名年轻的维京王子，为了遭到谋杀的父亲，踏上一场冒险的复仇之路。",
        "create_time": "2022-06-02T06:08:10.000Z",
        "update_time": "2022-06-02T06:09:02.000Z"
    },
    {
        "id": 126,
        "title": "新蝙蝠侠",
        "imgURL": "http://43.138.156.234:8001/1653829120652.jpg",
        "image_desc": "最新",
        "movieID": "103014",
        "category3": "动作片",
        "introduction": "由马特·里夫斯执导的科幻犯罪电影，于2022年3月4日在北美上映，2022年3月18日在中国大陆上映",
        "create_time": "2022-05-29T12:58:41.000Z",
        "update_time": "2022-06-02T05:53:27.000Z"
    }
]
```

返回参数说明：[{},{},{},{},{}]

备注：

### 上传轮播图(后台)

简要描述：

- 上传轮播图

请求URL：

- `https://www.3154movie.com/upload/banners`

请求方式：

- POST

参数：

| 参数名       | 必选 | 类型   | 说明   |
| :----------- | :--- | :----- | ------ |
| filename     | 是   | string | 文件名 |
| originalname | 是   | string | 后缀名 |

调用例子：`https://www.3154movie.com/upload/banners`

返回示例：

```
'保存'
```

返回参数说明：无

备注：

### 编辑轮播图(后台)

简要描述：

- 编辑轮播图

请求URL：

- `https://www.3154movie.com/banners/update`

请求方式：

- PATCH

参数：

| 参数名       | 必选 | 类型   | 说明                          |
| :----------- | :--- | :----- | ----------------------------- |
| title        | 是   | string | 电影名                        |
| movieID      | 是   | number | 电影id                        |
| category3    | 是   | string | 二级分类(动作、科幻、喜剧...) |
| introduction | 是   | string | 剧情介绍                      |
| image_desc   | 是   | string | 封面路径                      |
| id           | 是   | number | 轮播图id                      |

调用例子：`https://www.3154movie.com/banners/update`

返回示例：

```
'编辑成功'
```

返回参数说明：无

备注：

### 根据id删除轮播图(后台)

简要描述：

- 根据id删除轮播图

请求URL：

- `https://www.3154movie.com/banners/:bannerId`

请求方式：

- DELETE

参数：

| 参数名   | 必选 | 类型   | 说明     |
| :------- | :--- | :----- | -------- |
| bannerId | 是   | number | 轮播图id |

调用例子：`https://www.3154movie.com/banners/1`

返回示例：

```
'删除成功'
```

返回参数说明：无

备注：

### 根据id查询电影

简要描述：

- 通过id获取该片信息

请求URL：

- `https://www.3154movie.com/movies/detail`

请求方式：

- GET

参数：

| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| id     | 是   | number | 电影id |

调用例子：`https://www.3154movie.com/movies/detail?id=77777`

返回示例：

```
[
    {
        "id": 77777,
        "name": "国宝迷踪",
        "category1": "电影",
        "category2": "9",
        "category3": "剧情片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/211227/0ca25e6aca665c38.jpg",
        "image_desc": "HD",
        "actors": "马刚",
        "director": "马德林",
        "language": "普通话/国语",
        "area": "中国大陆",
        "year": "2007",
        "introduction": "老腔传唱于陕西关中一带，已经有上千年的历史。老腔的第十二代传人王宁利痛心于老腔的衰败，而让他更加痛心的是，儿子军娃只想着打工赚钱，没兴趣继承这门传统艺术。同时老腔班社的王满军和王宝来也因为各自生活上的原因，准备出门去打工，这让一心想复兴老腔的王宁利陷入了困境。\n世代以盗墓为生的马新科带着自己的侄子马栓财和郭宾此时来到了杨家村，经过勘探后，他们在杨家村的农田里发现了一处窖藏文物，而这片农田正好就是王宁利家的，就在他们准备盗窃这批文物时，被王宁利等人无意中撞见了。文物的出现霎时间打乱了村里每个人的生活，是上缴还是自己留下，王宁利等人展开了激烈的争论。而马新科一伙又怎能甘心，他们决定抢回文物，可却意外失手。无意中他们从电视里看到了记者采访王宁利介绍老腔的新闻。马新科顿时有了一个大胆的计划。\n省文化部来人考察老腔了，并声称准备将它入选国家非物质文化遗产名录，这个消息轰动了杨家村。村长敏感的意识到这是村里对外宣传的一个好机会，在村长积极的引见下，文化部的人很快就见到了王宁利，当然这个所谓的文化部的主任正是马新科假扮的。马新科假借考察老腔的名义，乘机住进了王宁利家。在欢迎大会上，马新科的慷慨陈词深深感动了王宁利，使他对老腔、对文物都有了全新的认识，他甚至开始为自己的自私而惭愧。于是下决心要把文物的事告诉马新科。\n王宁利如实说出了文物的下落，并表示要将其上缴国家，马新科异常惊喜，他以上缴政府为借口将文物装上了车，带着王宁利离开了村子。此时在村办公室里，电视台的记者意外发现了马新科一伙的异常举动，一群人顿时明白了马新科的真实目的。\n马新科等人最终被抓获，这件事情也给了王宁利等人一次深刻的教训，好在珍贵的文物没有丢失，而老腔也被载入了非物质文化遗产名录。第二年，在亲友们的祝福声中，王宁利和他的老腔班社踏上了进京演出的火车。\n精彩视点:\n影片《国宝迷踪》是一部展示陕西独特风情、风貌，浓缩关中悠久历史、文化，歌颂新一代三秦儿女的影片。该剧以几年前发生在眉县杨家村的5位农民挖出27件窖藏国宝级青铜器并将其上缴国家这一真实事件为基本线索，将渭南华阴一带流传了上千年的老腔有机融合，讲述了几位热爱老腔艺术的农民与盗墓贼之间斗智斗勇的故事。全片诙谐幽默、高潮迭起、扣人心弦，堪称“农村版的《疯狂的石头》”。\n影片的拍摄主场地选择在了拥有千年文化底韵，至今还流传着剪纸、皮影、工艺品等文化形式，保留着关中西府浓厚文化风格的陕西省千阳县南寨镇邓家塬村。南寨镇的灯盏头碗碗腔曾被列入第一批非物质文化遗产保护。邓家塬村则保存着一个清朝时期的大戏楼，至今仍是全村群众唱戏、赶庙会等文化活动的重要场所。2002年，导演杨建生在该村拍摄的农村题材电影《正月十五唱大戏》，曾获得了中国第三届电视电影“百合奖”十佳影片奖。",
        "now_movie": "https://v2.dious.cc/20201028/MJ3A7AS8/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T06:48:19.000Z",
        "update_time": "2022-05-25T06:48:19.000Z"
    }
]
```

返回参数说明：

| 参数名       | 类型   | 说明           |
| :----------- | :----- | -------------- |
| id           | number | 电影id         |
| name         | string | 电影名         |
| category1    | string | 一级分类       |
| category2    | number | 二级分类(编号) |
| category3    | string | 二级分类       |
| image_thumb  | string | 封面地址       |
| image_desc   | string | 封面关键词     |
| actors       | string | 演员           |
| director     | string | 导演           |
| language     | string | 语言           |
| area         | string | 地区           |
| year         | string | 年份           |
| introduction | string | 剧情介绍       |
| now_movie    | string | 播放地址       |
| create_time  | string | 创建时间       |
| update_time  | string | 修改时间       |
| play_count   | number | 播放量         |

备注：

### 添加+编辑电影(后台)

简要描述：

- 添加或修改

请求URL：

- `https://www.3154movie.com/movies/update`

请求方式：

- POST

参数：

| 参数名       | 类型   | 说明           |
| :----------- | :----- | -------------- |
| id           | number | 电影id         |
| name         | string | 电影名         |
| category1    | string | 一级分类       |
| category2    | number | 二级分类(编号) |
| category3    | string | 二级分类       |
| image_thumb  | string | 封面地址       |
| image_desc   | string | 封面关键词     |
| actors       | string | 演员           |
| director     | string | 导演           |
| language     | string | 语言           |
| area         | string | 地区           |
| year         | string | 年份           |
| introduction | string | 剧情介绍       |
| now_movie    | string | 播放地址       |

调用例子：`https://www.3154movie.com/movies/update`

返回示例：

```
"添加成功"
“编辑成功”
```

返回参数说明：无

备注：传递参数时需要封装到movie数组中，携带id时为编辑状态，否则为添加。

### 根据id删除电影(后台)

简要描述：

- 通过id删除该片信息

请求URL：

- `https://www.3154movie.com/movies/:movieId`

请求方式：

- DELETE

参数：

| 参数名  | 必选 | 类型   | 说明   |
| :------ | :--- | :----- | ------ |
| movieId | 是   | number | 电影id |

调用例子：`https://www.3154movie.com/movies/77776`

返回示例：

```
"添加成功"
“编辑成功”
```

返回参数说明：无

备注：无

### 分类查询(深度查询)

简要描述：

- 通过category2查找分类

请求URL：

- `https://www.3154movie.com/movies/category2/deep`

请求方式：

- GET

参数：

| 参数名 | 必选 | 类型   | 说明           |
| :----- | :--- | :----- | -------------- |
| type   | 是   | string | 二级分类(编号) |
| num    | 是   | number | 页容量         |
| page   | 是   | number | 页码           |

调用例子：`https://www.3154movie.com/movies/category2/deep?type=1&num=5&page=1`

返回示例：

```
[
    {
        "id": 103014,
        "name": "新蝙蝠侠",
        "category1": "电影",
        "category2": "1",
        "category3": "动作片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220311/83ec65093d6fc78e.jpg",
        "image_desc": "HD官方中英",
        "actors": "罗伯特·帕丁森",
        "director": "马特·里夫斯",
        "language": "英语",
        "area": "美国",
        "year": "2022",
        "introduction": "布鲁斯·韦恩（罗伯特·帕丁森 饰）化身蝙蝠侠于哥谭市行侠仗义两年后，罪犯皆闻风丧胆，他也因此深入接触到哥谭市的阴暗面。他潜行于哥谭市腐败的政要名流关系网中，身边仅有的几个值得信赖的盟友——管家阿尔弗雷德·潘尼沃斯（安迪·瑟金斯 饰）与詹姆斯·戈登警长（杰弗里·怀特 饰）。这位独行的“义警侠探”在哥谭市民心中已成为“复仇”二字最当仁不让的代名词。",
        "now_movie": "https://new.iskcd.com/20220418/5h9H99gO/index.m3u8",
        "player": null,
        "play_count": 2,
        "create_time": "2022-05-25T07:32:17.000Z",
        "update_time": "2022-06-22T00:56:33.000Z"
    },
    {
        "id": 103114,
        "name": "神秘海域",
        "category1": "电影",
        "category2": "1",
        "category3": "动作片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220310/ad09a7fc6d0dad8b.jpg",
        "image_desc": "HD",
        "actors": "汤姆·赫兰德",
        "director": "鲁本·弗雷斯彻",
        "language": "英语,西班牙语",
        "area": "美国",
        "year": "2022",
        "introduction": "足智多谋的内森·德雷克（汤姆·赫兰德 饰）和经验丰富的寻宝者维克多·苏利文（马克·沃尔伯格 饰）组成搭档，追寻费迪南·麦哲伦500年前遗失的宝藏。一开始，这似乎只是个简单的寻宝工作，但很快演变成了一场惊险刺激、横跨全球的竞赛。他们必须赶在冷酷无情的蒙卡达（安东尼奥·班德拉斯 饰）之前寻得宝藏。蒙卡达坚信他和他的家族才是宝藏的正当继承人。若内森和苏利文能破译线索，解开这世界上最古老的谜团，他们便能找到价值50亿美元的宝藏，甚至还可能找到内森失踪已久的哥哥……但首先，他们必须学会通力合作。",
        "now_movie": "https://new.iskcd.com/20220423/TqCLD78X/index.m3u8",
        "player": null,
        "play_count": 4,
        "create_time": "2022-05-25T07:32:27.000Z",
        "update_time": "2022-06-11T02:56:12.000Z"
    },
    {
        "id": 110028,
        "name": "记忆2020",
        "category1": "电影",
        "category2": "1",
        "category3": "动作片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220526/43013ef3d443f0bd.jpg",
        "image_desc": "HD中字",
        "actors": "连姆·尼森,莫妮卡·贝鲁奇",
        "director": "马丁·坎贝尔",
        "language": "英语",
        "area": "美国",
        "year": "2022",
        "introduction": "该片改编自2003年丹麦影片《冷面赤心》。\n　　讲述亚历克斯·刘易斯（连姆·尼森 饰）是一位以谨慎精准著称的刺客专家。亚历克斯在拒绝完成一个危险的犯罪组织的任务后，他成为了被刺杀的目标，他必须去追杀那些想要他死的人。美国联邦调查局资深探员文森特·塞拉（盖·皮尔斯 饰）、琳达·阿米斯蒂德（塔伊·阿特沃尔 饰）和墨西哥情报联络员雨果·马克斯（哈罗德·托雷斯 饰）被请来调查那些被刺杀的尸体的踪迹，他们由此更接近亚历克斯，但也引来当地科技大亨达瓦娜·西尔曼（莫妮卡·贝鲁奇 饰）的愤怒。在犯罪集团和美国联邦调查局的紧追不舍下，亚历克斯有能力逃开，但他正与严重失忆作斗争，这影响了他的一举一动。随着细节的模糊和敌人的逼近，亚历克斯开始质疑自己的一举一动，以及他最终能信任谁。",
        "now_movie": "https://new.iskcd.com/20220601/dvxqVQwk/index.m3u8",
        "player": null,
        "play_count": 14,
        "create_time": "2022-06-02T06:00:18.000Z",
        "update_time": "2022-06-10T08:36:59.000Z"
    },
    {
        "id": 104606,
        "name": "刀马镇之永贞",
        "category1": "电影",
        "category2": "1",
        "category3": "动作片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/211228/1ae58b298499dfff.jpg",
        "image_desc": "HD",
        "actors": "陈亚雷",
        "director": "饶仿",
        "language": "汉语普通话",
        "area": "中国大陆",
        "year": "2018",
        "introduction": "本片讲述的是民国初年，上海风云人物永贞去上海之前发生的一段永贞之父为了守护刀谱和宝藏的秘密，最后惨死在土匪手下，失去父亲的永贞不得不和母亲一起逃亡所展开的故事。",
        "now_movie": "https://cdn.zoubuting.com/20220514/YaHNc3EO/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T07:35:02.000Z",
        "update_time": "2022-05-25T07:35:02.000Z"
    },
    {
        "id": 104596,
        "name": "双面劫匪国语",
        "category1": "电影",
        "category2": "1",
        "category3": "动作片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220525/3d1a65a9099c1dee.jpg",
        "image_desc": "HD",
        "actors": "杰弗里·迪恩·摩根",
        "director": "斯科特·曼",
        "language": "普通话",
        "area": "美国",
        "year": "2017",
        "introduction": "　沃恩为挽救病重女儿被迫成劫匪，与搭档抢劫了赌场大亨教皇300万美金不料接应的同伙临阵脱逃，他们被迫劫持了一辆载着孕妇、小孩、老人等一众乘客的巴士。在全美及媒体的时刻关注下，他们受到了以克丽丝为首的特警追捕，与此同时，赌场派来的杀手也在步步逼近……面对失控的局面、乘客安危和医院缴费期限，沃恩能否在12小时内挑战不可能，在疯狂暴走的同伴、接连不断的特警攻击中成功拿走巨额劫款并解救人质生命？",
        "now_movie": "https://cdn.zoubuting.com/20220514/Di2DWs4l/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T07:35:01.000Z",
        "update_time": "2022-05-25T07:35:01.000Z"
    }
]
```

返回参数说明：[{},{},{},{},{}]

备注：无

### 关键词查找电影名

简要描述：

- 关键词查找电影名

请求URL：

- `https://www.3154movie.com/search/name`

请求方式：

- GET

参数：

| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| query  | 是   | string | 关键词 |
| num    | 是   | number | 页容量 |
| page   | 是   | number | 页码   |

调用例子：`https://www.3154movie.com/movies/search/name?query=神秘海域&num=5&page=1`

返回示例：

```
[
    {
        "id": 103114,
        "name": "神秘海域",
        "category1": "电影",
        "category2": "1",
        "category3": "动作片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220310/ad09a7fc6d0dad8b.jpg",
        "image_desc": "HD",
        "actors": "汤姆·赫兰德",
        "director": "鲁本·弗雷斯彻",
        "language": "英语,西班牙语",
        "area": "美国",
        "year": "2022",
        "introduction": "足智多谋的内森·德雷克（汤姆·赫兰德 饰）和经验丰富的寻宝者维克多·苏利文（马克·沃尔伯格 饰）组成搭档，追寻费迪南·麦哲伦500年前遗失的宝藏。一开始，这似乎只是个简单的寻宝工作，但很快演变成了一场惊险刺激、横跨全球的竞赛。他们必须赶在冷酷无情的蒙卡达（安东尼奥·班德拉斯 饰）之前寻得宝藏。蒙卡达坚信他和他的家族才是宝藏的正当继承人。若内森和苏利文能破译线索，解开这世界上最古老的谜团，他们便能找到价值50亿美元的宝藏，甚至还可能找到内森失踪已久的哥哥……但首先，他们必须学会通力合作。",
        "now_movie": "https://new.iskcd.com/20220423/TqCLD78X/index.m3u8",
        "player": null,
        "play_count": 4,
        "create_time": "2022-05-25T07:32:27.000Z",
        "update_time": "2022-06-11T02:56:12.000Z"
    }
]
```

返回参数说明：[{},{},{},{},{}]

备注：无

### 关键词查找演员

简要描述：

- 关键词查找电影名

请求URL：

- `https://www.3154movie.com/search/actors`

请求方式：

- GET

参数：

| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| query  | 是   | string | 关键词 |
| num    | 是   | number | 页容量 |
| page   | 是   | number | 页码   |

调用例子：`https://www.3154movie.com/movies/search/actors?query=小栗旬&num=5&page=1`

返回示例：

```
[
    {
        "id": 74396,
        "name": "人间失格：太宰治和三个女人们",
        "category1": "电影",
        "category2": "9",
        "category3": "剧情片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/211228/3d68751d115315c9.jpg",
        "image_desc": "HD",
        "actors": "小栗旬",
        "director": "蜷川实花",
        "language": "日语",
        "area": "日本",
        "year": "2019",
        "introduction": "太宰治與蜷川實花的組合，一字記之曰：色。蜷川並不服膺於太宰治半自傳小說《人間失格》的隔靴搔癢，借書之名直接拍他本人和三個女人的故事。太宰治的妻子美知子、有志成為作家的情人靜子和他最後一位情人富榮，分別由演技派女優宮澤理惠、澤尻英龍華和二階堂富美飾演，襯托著蜷川分別為三女精心設計的主題色調，色彩濃烈絢麗的畫面是一場流動的視覺盛宴。為了對抗生命的無力感，太宰治沉溺於女人與酒精，在靡爛晦暗的生活中追逐死亡之光。在蜷川的鏡頭下，他既是才子，亦是賤男，他的不堪，反而折射出人間的脆弱和美好。",
        "now_movie": "https://s1.zoubuting.com/20210810/cYdvUFNG/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T06:41:15.000Z",
        "update_time": "2022-05-25T06:41:15.000Z"
    },
    {
        "id": 74505,
        "name": "恶魔蛙男",
        "category1": "电影",
        "category2": "8",
        "category3": "犯罪片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220215/42fdb15c13418a9c.jpg",
        "image_desc": "HD",
        "actors": "小栗旬",
        "director": "大友启史",
        "language": "日语",
        "area": "日本",
        "year": "2016",
        "introduction": "大雨瓢泼的都市，邪恶欲望肆意横行。不经意间残忍而血腥的猎奇案件接连发生，有的人被饿犬撕咬而死，有的人被割掉和出生时同样重量的肉而死掉，有的被平均切成两半分送给妻子与情人，有的则被冻在冰柜中永葆不老的青春，更有人嘴里被塞满了大大小小的钉子。正为家庭矛盾所苦恼的搜查一课刑警泽村久志（小栗旬 饰）受命追查此事，随着调查的深入，他发现凶手全系一人所为，而且热衷在雨天行凶作案，之后他更发现所有死者全与许多年前的一起案件有关，偏偏泽村离家出走的妻子（尾野真千子 饰）也被卷入其中。争分夺秒的追查，凶手已对泽村亮出獠牙……\n　　本片根据日本漫画家巴亮介的同名原作改编。",
        "now_movie": "https://s1.zoubuting.com/20210816/r9W4sB75/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T06:41:28.000Z",
        "update_time": "2022-05-25T06:41:28.000Z"
    },
    {
        "id": 74567,
        "name": "信长协奏曲电影版",
        "category1": "电影",
        "category2": "6",
        "category3": "喜剧片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220215/bdbeba28d956b687.jpg",
        "image_desc": "HD",
        "actors": "小栗旬",
        "director": "松山博昭",
        "language": "日语",
        "area": "日本",
        "year": "2016",
        "introduction": "懵懵懂懂的21世纪日本高中生三郎（小栗旬 饰），在意外穿越了时空后，居然来到了风起云涌的战国时代。不知为何和他长得一模一样的织田信长与之交换了身份，从此三郎便以一代霸主的尊荣行走战国。历经无数磨难，他逐渐取得家臣的信任和爱戴，而斋藤道三的女儿归蝶（柴崎幸 饰）似乎也对他用情更深。然而在得知自己死期临近之际，三郎内心倍受打击，历史看似无法逆转。与此同时，羽柴秀吉（山田孝之 饰）和真正的织田信长——明智光秀（小栗旬 饰）合谋，正准备断送第六天魔王的霸业。所谓的本能寺之变一天天临近，三郎的命运以及战国的命运到了最终决断的时刻……\n　　本片根据石井あゆみ的漫画原作改编，该漫画在“2012年全国书店店员强烈推荐”榜单中位列第7名。2014年作为富士电视台开播55周年纪念作品推出真人日剧，本片是该剧的电影版。",
        "now_movie": "https://s1.zoubuting.com/20210819/32RW5zE6/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T06:41:36.000Z",
        "update_time": "2022-05-25T06:41:36.000Z"
    },
    {
        "id": 76500,
        "name": "恶魔蛙男",
        "category1": "电影",
        "category2": "9",
        "category3": "剧情片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/211228/398956c5aab3e9a9.jpg",
        "image_desc": "HD",
        "actors": "小栗旬",
        "director": "大友启史",
        "language": "日语",
        "area": "日本",
        "year": "2016",
        "introduction": "大雨瓢泼的都市，邪恶欲望肆意横行。不经意间残忍而血腥的猎奇案件接连发生，有的人被饿犬撕咬而死，有的人被割掉和出生时同样重量的肉而死掉，有的被平均切成两半分送给妻子与情人，有的则被冻在冰柜中永葆不老的青春，更有人嘴里被塞满了大大小小的钉子。正为家庭矛盾所苦恼的搜查一课刑警泽村久志（小栗旬 饰）受命追查此事，随着调查的深入，他发现凶手全系一人所为，而且热衷在雨天行凶作案，之后他更发现所有死者全与许多年前的一起案件有关，偏偏泽村离家出走的妻子（尾野真千子 饰）也被卷入其中。争分夺秒的追查，凶手已对泽村亮出獠牙…… 本片根据日本漫画家巴亮介的同名原作改编。",
        "now_movie": "https://video.dious.cc/20200807/JDK8Uieu/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T06:45:38.000Z",
        "update_time": "2022-05-25T06:45:38.000Z"
    },
    {
        "id": 76633,
        "name": "牛郎俱乐部",
        "category1": "电影",
        "category2": "9",
        "category3": "剧情片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/211228/642e86fe901e672b.jpg",
        "image_desc": "BD高清中字",
        "actors": "小栗旬",
        "director": "西村了",
        "language": "日语",
        "area": "日本",
        "year": "2006",
        "introduction": "实业家小雪（须贺贵匡 饰）、篮球运动员庆太（森本亮治 饰）、协调员进太郎（葛山信吾 饰）、厨师铁平（平山浩行 饰）等七个年轻人均遭遇了人生滑铁卢，无奈之下，穷的只剩下身体的七人怀着侥幸的心理应聘起了牛郎的工作，没想到均被录用。在用身上仅剩的钱支付了保证金后，带着喜悦的心情的七人决定在新的战场上重振雄风。 令七人没有想到的是，上班的第一天便出了事故，店长卷走了全部家当人间蒸发，只留下空空如也的店铺。明白了人生掌握在自己手中的道理，走投无路的七人决定联手，就这样，名为“DOGDAYS”的牛郎店开张了。容纳了众人梦想的小小店铺，会有多少有笑有泪的故事发生在其中呢？",
        "now_movie": "https://video.dious.cc/20200809/seRrnPMg/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T06:45:56.000Z",
        "update_time": "2022-05-25T06:45:56.000Z"
    }
]
```

返回参数说明：[{},{},{},{},{}]

备注：无

### 关键词查找导演

简要描述：

- 关键词查找导演

请求URL：

- `https://www.3154movie.com/search/director`

请求方式：

- GET

参数：

| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| query  | 是   | string | 关键词 |
| num    | 是   | number | 页容量 |
| page   | 是   | number | 页码   |

调用例子：`https://www.3154movie.com/movies/search/director?query=姜文&num=5&page=1`

返回示例：

```
[
    {
        "id": 70437,
        "name": "一步之遥",
        "category1": "电影",
        "category2": "6",
        "category3": "喜剧片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220421/ecb7ab80b71ddfcb.jpg",
        "image_desc": "HD",
        "actors": "姜文",
        "director": "姜文",
        "language": "汉语普通话,英语,上",
        "area": "中国大陆,美国,中国香港",
        "year": "2014",
        "introduction": "北洋政府统治时期，盘踞上海的军阀武大帅之子武七（文章 饰）为洗刷耻辱，辗转找到了前清遗老马走日（姜文 饰）求助。在此之后，马走日和在法租界当警督的发小项飞田（葛优 饰）联手策划了名为“花域总统选举”的大型选美活动，和马从小就认识的现总统完颜英（舒淇 饰）成功卫冕。谁知就在繁华喧嚣的最顶点，命运之车竟急转直下驶向深渊。在一个平凡的早上，完颜陈尸郊野，张皇失措的马走日找到武七的姐姐武六（周韵 饰）及其母亲齐老师（洪晃 饰），希望通过大帅帮自己洗刷杀人犯的罪名，结果却盲打误撞救下了险些被整死的项飞田。背负杀人犯之名的马绝路逃亡，而武六则以该事件拍摄了名为《枪毙马走日》的电影，马的命运愈加扑朔迷离……\n　　本片根据民国奇案“阎瑞生案”改编。",
        "now_movie": "https://v4.cdtlas.com/20220420/abL84Boc/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T06:33:19.000Z",
        "update_time": "2022-05-25T06:33:19.000Z"
    },
    {
        "id": 72213,
        "name": "邪不压正",
        "category1": "电影",
        "category2": "9",
        "category3": "剧情片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220215/5915a8889a9a96b5.jpg",
        "image_desc": "HD",
        "actors": "姜文",
        "director": "姜文",
        "language": "国语",
        "area": "内地",
        "year": "2018",
        "introduction": "北洋年间，北京以北。习武少年李天然目睹师兄朱潜龙勾结日本特务根本一郎，杀害师父全家。李天然侥幸从枪下逃脱，被美国医生亨德勒救下。李天然伤愈后，赴美学医多年，并同时接受特工训练。1937年初，李天然突然受命回国。“七七事变”前夜，北平，这座国际间谍之城，华洋混杂，山头林立。每时每刻充满诱惑与杀机。一心复仇的李天然，并不知道自己被卷入了一场阴谋，亦搅乱了一盘棋局。彼时彼刻，如同李小龙闯进了谍都卡萨布兰卡。前朝武人蓝青峰，神秘莫测，与朱潜龙、根本一郎关系紧密，更与亨德勒情同手足。是敌是友？面目不清。随着中日危机不断升级，各方博弈愈演愈烈。多次为谎言蛊惑、错失时机的李天然，终于下定决心，在红颜帮助下开启复仇行动。且看负有国恨家仇且智勇双全之李天然，如何荡涤这摊污泥浊水！",
        "now_movie": "https://cdn.zoubuting.com/20210704/rxZmrQOS/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T06:36:47.000Z",
        "update_time": "2022-05-25T06:36:47.000Z"
    },
    {
        "id": 73493,
        "name": "恰逢那年花开",
        "category1": "电影",
        "category2": "2",
        "category3": "爱情片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220215/668959c66b5c01b2.jpg",
        "image_desc": "HD",
        "actors": "韩昀珊",
        "director": "姜文",
        "language": "普通话",
        "area": "内地",
        "year": "2019",
        "introduction": "电影通过大学校园的一场爱情故事，大学校园的生活，反映了现实生活中大学生存在的一些问题影片中影射现实大学生，要拼搏，不要攀比，每个人都有独一无二的美，更不要投机取巧，异想天开，只要肯努力就会有所收获。影片告诫我们要珍惜自己的生活，要努力积极向上，不随波逐流，要做社会中积极地一份子，不要因为自己的私欲而去污染这个社会。我们恰逢生活在这个如花一般美好的社会，更要感恩这个国家给予我们的一切希望，发愤图强。要坚持好的品格，讲责任，有爱心。爱情是美好的，但爱情不应该是盲目的，我们应该为了心中那份美好的感情而去努力，不应该因为爱情而堕落。影片也警告了那些试图破坏社会秩序的人，一定会受到该有的惩戒。",
        "now_movie": "https://cdn.zoubuting.com/20210717/EuYEWg4b/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T06:39:23.000Z",
        "update_time": "2022-05-25T06:39:23.000Z"
    },
    {
        "id": 76284,
        "name": "让子弹飞",
        "category1": "电影",
        "category2": "1",
        "category3": "动作片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/211228/f5ac67bacced11d4.jpg",
        "image_desc": "HD",
        "actors": "姜文",
        "director": "姜文",
        "language": "汉语普通话",
        "area": "中国大陆",
        "year": "2010",
        "introduction": "民国年间，花钱捐得县长的马邦德（葛优 饰）携妻（刘嘉玲 饰）及随从走马上任。途经南国某地，遭劫匪张麻子（姜文 饰）一伙伏击，随从尽死，只夫妻二人侥幸活命。马为保命，谎称自己是县长的汤 师爷。为汤师爷许下的财富所动，张麻子摇身一变化身县长，带着手下赶赴鹅城上任。有道是天高皇帝远，鹅城地处偏僻，一方霸主黄四郎（周润发 饰）只手遮天，全然不将这个新来的县长放在眼里。张麻子痛打了黄的武教头（姜武 饰），黄则设计害死张的义子小六（张默 饰）。原本只想赚钱的马邦德，怎么也想不到竟会被卷入这场土匪和恶霸的角力之中。鹅城上空愁云密布，血雨腥风在所难免……\n本片根据马识途的小说《夜谭十记》中的《盗官记》一章改编。",
        "now_movie": "https://video.dious.cc/20200731/C2UsTzdC/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T06:45:11.000Z",
        "update_time": "2022-05-25T06:45:11.000Z"
    },
    {
        "id": 82813,
        "name": "阳光灿烂的日子",
        "category1": "电影",
        "category2": "2",
        "category3": "爱情片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/211227/5ac8430d5e63e0b7.jpg",
        "image_desc": "HD",
        "actors": "夏雨",
        "director": "姜文",
        "language": "汉语普通话",
        "area": "中国大陆,中国香港",
        "year": "1994",
        "introduction": "20世纪70年代初的北京，忙着“闹革命”大人无空理会小孩，加上学校停课无事可做，以军队大院男孩为突出代表的少年人便自找乐子，靠起哄、打架、闹事、拍婆子等方式挥霍过量的荷尔蒙。马小军（夏雨饰）就是这样的少年，他的嗜好之一是趁别人家无人用万能钥匙将其锁打开，溜进去耍玩一番，正是用这样的方式，少女米兰（宁静饰）的照片先于其人入了马小军的双眼。通过院里的“头儿”刘忆苦（耿乐饰），马小军又见到之前在炮局偶然瞥见过一眼的米兰，开始正式将其当作梦中情人，然而在米兰眼中，马小军不过是毛孩一个，她中意的人是成熟、稳重、帅气的刘忆苦。自此，马小军迎来五味混杂的青春期生活。本片改编自王朔短篇小说《动物凶猛》。夏雨凭此片获得第51届威尼斯国际电影节最佳男演员（银狮奖）。",
        "now_movie": "https://v3.dious.cc/20210120/gWHfg5pc/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T06:58:06.000Z",
        "update_time": "2022-05-25T06:58:06.000Z"
    }
]
```

返回参数说明：[{},{},{},{},{}]

备注：无

### 按条件分类查询

简要描述：

- 用于app的分类页面

请求URL：

- `https://www.3154movie.com/search/category`

请求方式：

- GET

参数：

| 参数名   | 必选 | 类型   | 说明                                    |
| :------- | :--- | :----- | --------------------------------------- |
| category | 否   | string | 二级分类(科幻、喜剧、动作...)           |
| area     | 否   | string | 地区(中国大陆、中国香港、美国、日本...) |
| year     | 否   | string | 年份(2022、2021、2020...)               |
| sort     | 否   | string | 排序方式(最热、最新)                    |
| num      | 是   | number | 页容量                                  |
| page     | 是   | number | 页码                                    |

调用例子：`https://www.3154movie.com/movies/search/category?page=1&num=5&category=动作&area=中国大陆&year=2022`

返回示例：

```
[
    {
        "id": 103807,
        "name": "黄金蜘蛛城",
        "category1": "电影",
        "category2": "1",
        "category3": "动作片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220521/065272094ffd82f6.jpg",
        "image_desc": "HD",
        "actors": "刘林城",
        "director": "代艺霖",
        "language": "汉语普通话",
        "area": "中国大陆",
        "year": "2022",
        "introduction": "故事讲述了思玛聪被泰国富商襄爷要挟前往野人山地下一万米处寻找黄金蜘蛛城的下落。在探险途中，思玛聪遇到了从墓室血丝圆棺中逃出的天才小伙八爷，两个天差地别的小青年，逐渐为了探索地底秘密而结盟，萌生出患难情谊。而此时，突然出现在地下的反派襄爷爆出八爷的真实身份竟然是思玛聪失踪多年的父亲思玛辉，地下黄金蜘蛛城也揭开了它来自外星文明的神秘面纱.....",
        "now_movie": "https://new.iskcd.com/20220521/KClJoDdE/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T07:33:42.000Z",
        "update_time": "2022-05-25T07:33:42.000Z",
        "count": 47
    },
    {
        "id": 103665,
        "name": "九叔归来3：魁蛊婴",
        "category1": "电影",
        "category2": "1",
        "category3": "动作片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220519/c5900d365d3b3a56.jpg",
        "image_desc": "HD",
        "actors": "葛帅",
        "director": "王建闯",
        "language": "汉语普通话",
        "area": "中国大陆",
        "year": "2022",
        "introduction": "民国初期，军阀混乱，玄术界争斗不休。制霸南洋的萨摩邪师以一己之私重启禁术，不远万里来到聚阴之地“巫狼山”，把内怀有身孕的母狼作为培养魁蛊婴的孕体，以处子之血喂食，用蛇蝎虫蚁炼化。嗜血残暴的魁蛊婴在萨摩邪师的控制下残虐村民、杀人成性。为保全镇平安，九叔带着徒弟与萨摩邪师斗智斗勇，而这背后又藏着哪些不为人知的秘密？\n　　一场茅山法术与南洋邪术、九叔师徒与魁蛊婴的正邪大战一触即发...",
        "now_movie": "https://new.iskcd.com/20220519/IxtpfknE/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T07:33:27.000Z",
        "update_time": "2022-05-25T07:33:27.000Z",
        "count": 47
    },
    {
        "id": 103433,
        "name": "九龙笔之神兵觉醒",
        "category1": "电影",
        "category2": "1",
        "category3": "动作片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220511/c85eb5921bbc8501.jpg",
        "image_desc": "HD",
        "actors": "祁圣翰",
        "director": "曾庆杰",
        "language": "汉语普通话",
        "area": "中国大陆",
        "year": "2022",
        "introduction": "大理寺少卿祁凌再次接到皇上密诏，奉旨追查拥有灵异法力的“九龙笔”，并破解其中机密。祁凌多番查探后发现此物竟与死去的父亲有关，随着九龙笔的机关被层层打开，案件也逐渐明朗，但此时朝中各股势力也在暗潮涌动，一切都没有那么简单。",
        "now_movie": "https://new.iskcd.com/20220511/Q9u8zlph/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T07:33:00.000Z",
        "update_time": "2022-05-25T07:33:00.000Z",
        "count": 47
    },
    {
        "id": 103371,
        "name": "悟空之小圣传",
        "category1": "电影",
        "category2": "1",
        "category3": "动作片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220509/6f3bc1637eeccf31.jpg",
        "image_desc": "HD",
        "actors": "王宁",
        "director": "王斌",
        "language": "None",
        "area": "中国大陆",
        "year": "2022",
        "introduction": "千年前，齐天大圣在护送玄奘西天取经的路上，大败金翅大鹏。千年后，孙小圣继孙悟空之志惩恶扬善，和兄弟无名踏上杀妖除魔之路。然而千年恩怨羁绊，命运纠葛缠绕，好兄弟无名竟是天煞金小鹏，二人从生死搭档到刀剑相向，迎来因果循环的一战。",
        "now_movie": "https://new.iskcd.com/20220509/N6NAoQUY/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T07:32:54.000Z",
        "update_time": "2022-05-25T07:32:54.000Z",
        "count": 47
    },
    {
        "id": 103314,
        "name": "入魂：津门玄案",
        "category1": "电影",
        "category2": "1",
        "category3": "动作片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220506/0d14e1271d744e31.jpg",
        "image_desc": "HD",
        "actors": "张峻鸣",
        "director": "朱江",
        "language": "汉语普通话",
        "area": "中国大陆",
        "year": "2022",
        "introduction": "民国时期，鱼龙混杂的津门码头风云再起，漕运与青龙帮为争夺生意大打出手。扁鹊神针传人秦凡前去当和事佬，却失手“打死”两个帮派兄弟，被扣上杀人偷尸越狱的恶徒之名，遭到警察和两个帮派合力追捕。完全不记得自己如何逃出大牢的秦凡决定亲自查出偷尸者以及两个小弟的真正死因来自证清白，在抽丝剥茧的查证过程中，他发现帮派火拼的背后是洋人想要暗度陈仓将大量毒品运进中国的诡计。大烟馆布满了整个码头，洋人的祸国阴谋不断残害百姓，秦凡能否安然脱身？又该如何制止洋人的恶行？",
        "now_movie": "https://new.iskcd.com/20220506/7QoSsIlP/index.m3u8",
        "player": null,
        "play_count": 0,
        "create_time": "2022-05-25T07:32:48.000Z",
        "update_time": "2022-05-25T07:32:48.000Z",
        "count": 47
    }
]
```

返回参数说明：[{},{},{},{},{}]

备注：无

### 增加点击量

简要描述：

- 增加点击量的接口

请求URL：

- `https://www.3154movie.com/addPlayCount`

请求方式：

- GET

参数：

| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| id     | 是   | string | 电影id |

调用例子：`https://www.3154movie.com/movies/addPlayCount?id=69785`

返回示例：

```
69785+1
```

返回参数说明：无

备注：无

### 获取热度排行榜

简要描述：

- 热度排行榜

请求URL：

- `https://www.3154movie.com/movies/hot`

请求方式：

- GET

参数：

| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| num    | 是   | number | 页容量 |
| page   | 是   | number | 页码   |

调用例子：`https://www.3154movie.com/movies/hot?page=1&num=5`

返回示例：

```
[
    {
        "id": 110028,
        "name": "记忆2020",
        "category1": "电影",
        "category2": "1",
        "category3": "动作片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220526/43013ef3d443f0bd.jpg",
        "image_desc": "HD中字",
        "actors": "连姆·尼森,莫妮卡·贝鲁奇",
        "director": "马丁·坎贝尔",
        "language": "英语",
        "area": "美国",
        "year": "2022",
        "introduction": "该片改编自2003年丹麦影片《冷面赤心》。\n　　讲述亚历克斯·刘易斯（连姆·尼森 饰）是一位以谨慎精准著称的刺客专家。亚历克斯在拒绝完成一个危险的犯罪组织的任务后，他成为了被刺杀的目标，他必须去追杀那些想要他死的人。美国联邦调查局资深探员文森特·塞拉（盖·皮尔斯 饰）、琳达·阿米斯蒂德（塔伊·阿特沃尔 饰）和墨西哥情报联络员雨果·马克斯（哈罗德·托雷斯 饰）被请来调查那些被刺杀的尸体的踪迹，他们由此更接近亚历克斯，但也引来当地科技大亨达瓦娜·西尔曼（莫妮卡·贝鲁奇 饰）的愤怒。在犯罪集团和美国联邦调查局的紧追不舍下，亚历克斯有能力逃开，但他正与严重失忆作斗争，这影响了他的一举一动。随着细节的模糊和敌人的逼近，亚历克斯开始质疑自己的一举一动，以及他最终能信任谁。",
        "now_movie": "https://new.iskcd.com/20220601/dvxqVQwk/index.m3u8",
        "player": null,
        "play_count": 14,
        "create_time": "2022-06-02T06:00:18.000Z",
        "update_time": "2022-06-10T08:36:59.000Z"
    },
    {
        "id": 103479,
        "name": "北欧人",
        "category1": "电影",
        "category2": "9",
        "category3": "剧情片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220512/260cc56f8b0d3b43.jpg",
        "image_desc": "HD",
        "actors": "亚历山大·斯卡斯加德",
        "director": "罗伯特·艾格斯",
        "language": "英语",
        "area": "美国",
        "year": "2022",
        "introduction": "一名年轻的维京王子踏上为父复仇之路。",
        "now_movie": "https://new.iskcd.com/20220513/H1nmrwrZ/index.m3u8",
        "player": null,
        "play_count": 6,
        "create_time": "2022-05-25T07:33:04.000Z",
        "update_time": "2022-06-13T08:47:19.000Z"
    },
    {
        "id": 69785,
        "name": "陈真传奇",
        "category1": "电影",
        "category2": "2",
        "category3": "爱情片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220215/55bea61882594cd8.jpg",
        "image_desc": "HD",
        "actors": "杨建平（Tiger）",
        "director": "陆春伟",
        "language": "普通话",
        "area": "内地",
        "year": "2018",
        "introduction": "民国初期的经济中心上海暗潮汹涌，各国势力均集中在此日本驻上海领事馆大佐井田龙川妄图不费一兵一卒把上海变成日方占时经济特区，绑架了上海市长骆书彰。21世纪少年秦放因偶然机会触碰了“怪”爷爷研究的穿梭机器穿越到此时，因缘际会救了被日本兵追捕的上海市长义女小雪，在小雪的介绍下加入了精武门，并拜陈真为师。在精武门秦放认识了温柔善良的苏然，与精武门的师兄弟们一同习武，岁月静好。井田为了分化中国各方力量，借日本武士松本浩介频频挑战各个中国武馆，武馆皆败北，最后矛头指向了精武门。井田为了让陈真比武输给松本，并借此彰显自己势力，以骆书彰为要挟而让陈真不得不参加松本的挑战……",
        "now_movie": "https://cdn.zoubuting.com/20220514/H2cT5wXu/index.m3u8",
        "player": null,
        "play_count": 5,
        "create_time": "2022-05-25T06:32:04.000Z",
        "update_time": "2022-06-22T02:22:36.000Z"
    },
    {
        "id": 109885,
        "name": "刺猬索尼克2",
        "category1": "经典动漫",
        "category2": "10",
        "category3": "动画片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220505/0319cce8f6f553ee.jpg",
        "image_desc": "HD",
        "actors": "詹姆斯·麦斯登",
        "director": "杰夫·福勒",
        "language": "英语",
        "area": "美国,日本",
        "year": "2022",
        "introduction": "索尼克在绿丘镇安顿下来之后，就急着要证明自己有能力成为一名真正的英雄。当蛋头博士带着全新的搭档纳克鲁斯，又回来寻找一块力量强大足以毁灭人类文明的翡翠的时候，他就面对了另一个严峻的考验。这次索尼克和他自己的跟班塔尔斯携手合作，一起踏上一场环游世界的冒险旅程，希望能在那块翡翠落入坏人手中之前先找到它。",
        "now_movie": "https://new.iskcd.com/20220504/0MFTHUtg/index.m3u8",
        "player": null,
        "play_count": 5,
        "create_time": "2022-05-28T15:04:07.000Z",
        "update_time": "2022-06-11T14:59:19.000Z"
    },
    {
        "id": 71910,
        "name": "秦颂",
        "category1": "电影",
        "category2": "9",
        "category3": "剧情片",
        "image_thumb": "http://www.sxzbe.com/uploads/allimg/220215/f49f8f6d4e2ebe44.jpg",
        "image_desc": "HD",
        "actors": "姜文",
        "director": "周晓文",
        "language": "普通话",
        "area": "内地",
        "year": "1996",
        "introduction": "战国末期，战火连绵，攻伐不断，百姓疾苦无人问津。秦国王子嬴政童年时困为赵国人质，好心的燕国女子将其与自己的儿子高渐离一同哺育成人。襄王驾崩，嬴政随使臣赶回秦国登基，两个好友也从此天各一方。\r成为秦王的嬴政（姜文饰）号令三秦大军攻城掠地，各国诸侯闻风丧胆。灭赵后，统一大业指日可待。秦王念及旧日之情，希望找到高渐离（葛优饰）谱作《秦颂》。高拒不从命，最终沦为阶下囚，却凭此机缘结识了美丽的栎阳公主（许晴饰）。心怀妒嫉的王贲（王宁饰）在高额头上留下耻辱的烙印。出于崇敬和爱恋，栎阳公主亲自劝慰，而高为求一死不惜强奸公主。两人由此结下剪不断、离还乱的孽缘。六国既灭，国之一统，在上万人性命的胁迫下，高渐离作出了荡气回肠的《秦颂》……",
        "now_movie": "https://cdn.zoubuting.com/20210706/jfUfAmKd/index.m3u8",
        "player": null,
        "play_count": 4,
        "create_time": "2022-05-25T06:36:12.000Z",
        "update_time": "2022-06-10T08:56:25.000Z"
    }
]
```

返回参数说明：[{},{},{},{},{}]

备注：无

### 获取最新排行榜

简要描述：

- 最新排行榜

请求URL：

- `https://www.3154movie.com/rank/newest`

请求方式：

- GET

参数：

| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| num    | 是   | number | 页容量 |
| page   | 是   | number | 页码   |

调用例子：`https://www.3154movie.com/rank/newest?page=1&num=5`

返回示例：

```
[
    {
        "id": 17,
        "name": "瞬息全宇宙",
        "movieID": "103550",
        "update_time": "2022-06-07T08:25:46.000Z",
        "create_time": "2022-06-07T08:25:46.000Z"
    },
    {
        "id": 16,
        "name": "刺猬索尼克2",
        "movieID": "109885",
        "update_time": "2022-06-07T08:24:40.000Z",
        "create_time": "2022-06-07T08:24:40.000Z"
    },
    {
        "id": 15,
        "name": "暗夜博士：莫比亚斯",
        "movieID": "103516",
        "update_time": "2022-06-07T08:22:48.000Z",
        "create_time": "2022-06-07T08:22:48.000Z"
    },
    {
        "id": 14,
        "name": "毒液2",
        "movieID": "74769",
        "update_time": "2022-06-07T08:20:59.000Z",
        "create_time": "2022-06-07T08:20:45.000Z"
    },
    {
        "id": 13,
        "name": "神秘海域",
        "movieID": "103114",
        "update_time": "2022-06-07T08:20:29.000Z",
        "create_time": "2022-06-07T08:20:29.000Z"
    }
]
```

返回参数说明：[{},{},{},{},{}]

备注：无

### 添加+编辑最新排行榜(后台)

简要描述：

- 添加+编辑最新排行榜

请求URL：

- `https://www.3154movie.com/rank/newest/update`

请求方式：

- POST

参数：

| 参数名  | 必选 | 类型   | 说明     |
| :------ | :--- | :----- | -------- |
| id      | 是   | number | 排行榜id |
| name    | 是   | string | 电影名   |
| movieID | 是   | number | 电影id   |

调用例子：``https://www.3154movie.com/rank/newest/update``

返回示例：

```
"添加成功"
“编辑成功”
```

返回参数说明：无

备注：传递参数时需要封装到movie数组中，携带id时为编辑状态，否则为添加。

### 根据id删除最新(后台)

简要描述：

- 根据id删除最新

请求URL：

- `https://www.3154movie.com/rank/newest/:newestId`

请求方式：

- POST

参数：

| 参数名   | 必选 | 类型   | 说明     |
| :------- | :--- | :----- | -------- |
| newestId | 是   | number | 排行榜id |

调用例子：``https://www.3154movie.com/rank/newest/77777``

返回示例：

```
"删除77777成功"
```

返回参数说明：无

备注：传递参数时需要封装到movie数组中，携带id时为编辑状态，否则为添加。

### 添加用户反馈

简要描述：

- 添加用户反馈

请求URL：

- `https://www.3154movie.com/movies/addProblem`

请求方式：

- GET

参数：

| 参数名  | 必选 | 类型   | 说明     |
| :------ | :--- | :----- | -------- |
| title   | 是   | string | 标题     |
| content | 是   | string | 提交内容 |

调用例子：`https://www.3154movie.com/movies/addProblem?title=这是一个标题&content=这是一个内容`

返回示例：

```
'提交成功'
```

返回参数说明：无

备注：无

### 获取用户反馈(后台)

简要描述：

- 获取用户反馈

请求URL：

- `https://www.3154movie.com/movies/problem`

请求方式：

- GET

参数：

| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| page   | 是   | string | 页码   |
| num    | 是   | string | 页码量 |

调用例子：`https://www.3154movie.com/movies/problem?page=1&num=5`

返回示例：

```
[
    {
        "id": 8,
        "title": "未指定标题",
        "content": "sss",
        "create_time": "2022-07-05T04:32:12.000Z",
        "count": 8
    },
    {
        "id": 7,
        "title": "标题",
        "content": "内容",
        "create_time": "2022-07-05T03:59:29.000Z",
        "count": 8
    },
    {
        "id": 6,
        "title": "标题",
        "content": "内容",
        "create_time": "2022-07-05T03:17:44.000Z",
        "count": 8
    },
    {
        "id": 1,
        "title": null,
        "content": "视频进入全屏后没有后退键",
        "create_time": "2022-07-05T03:05:53.000Z",
        "count": 8
    },
    {
        "id": 2,
        "title": null,
        "content": "233",
        "create_time": "2022-07-05T03:05:53.000Z",
        "count": 8
    }
]
```

返回参数说明：无

备注：无

### 获取分类个数

简要描述：

- 获取分类个数

请求URL：

- `https://www.3154movie.com/movies/categoryCount`

请求方式：

- GET

参数：无

调用例子：`https://www.3154movie.com/movies/categoryCount`

返回示例：

```
{
    "count": 34641,
    "dongzuo": 5043,
    "aiqing": 4140,
    "kehuan": 1395,
    "kongbu": 3029,
    "zhanzheng": 969,
    "xiju": 4687,
    "jilu": 1066,
    "fanzui": 1202,
    "juqing": 11351,
    "donghua": 1759
}
```

返回参数说明：

| 参数名    | 必选 | 类型   | 说明       |
| :-------- | :--- | :----- | ---------- |
| count     | 是   | number | 电影总数   |
| dongzuo   | 是   | number | 动作片数量 |
| aiqing    | 是   | number | 爱情片数量 |
| kehuan    | 是   | number | 科幻片数量 |
| kongbu    | 是   | number | 恐怖片数量 |
| zhanzheng | 是   | number | 战争片数量 |
| xiju      | 是   | number | 喜剧片数量 |
| jilu      | 是   | number | 纪录片数量 |
| fanzui    | 是   | number | 犯罪片数量 |
| juqing    | 是   | number | 剧情片数量 |
| donghua   | 是   | number | 动画片数量 |

备注：无

### 获取所有信息个数

简要描述：

- 获取所有信息个数

请求URL：

- `https://www.3154movie.com/movies`

请求方式：

- GET

参数：无

调用例子：`https://www.3154movie.com/movies`

返回示例：

```
[
    {
        "count": 1
    },
    {
        "count": 5
    },
    {
        "count": 34641
    }
]
```

返回参数说明：

| 参数名 | 必选 | 类型   | 说明     |
| :----- | :--- | :----- | -------- |
| count  | 是   | number | 用户数量 |
| count  | 是   | number | 问题数量 |
| count  | 是   | number | 电影数量 |
| count  | 是   | number | 访客数   |

备注：无

### 添加访客信息

简要描述：

- 添加访客信息

请求URL：

- `https://www.3154movie.com/movies/addVisitor`

请求方式：

- GET

参数：无

调用例子：`https://www.3154movie.com/movies/addVisitor?address=湖南省&ads=湖南省长沙市`

返回示例：

```
添加成功
```

返回参数说明：无

备注：无

### 获取访客信息(后台)

简要描述：

- 获取访客信息

请求URL：

- `https://www.3154movie.com/movies/visitor`

请求方式：

- GET

参数：

| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| page   | 是   | string | 页码   |
| num    | 是   | string | 页码量 |

调用例子：`https://www.3154movie.com/movies/visitor?page=1&num=5`

返回示例：

```
[
    {
        "id": 29,
        "address": "湖南",
        "ads": "湖南省长沙市",
        "create_time": "2022-07-05T04:58:08.000Z",
        "count": 25
    },
    {
        "id": 28,
        "address": "湖南省",
        "ads": "湖南省长沙市雨花区东塘街道芙蓉中路513号长沙市第一社会福利院",
        "create_time": "2022-07-05T04:40:15.000Z",
        "count": 25
    },
    {
        "id": 27,
        "address": "北京市",
        "ads": "北京市东城区东华门街道东华门大街56号北京故宫酒文化有限公司",
        "create_time": "2022-07-05T04:32:39.000Z",
        "count": 25
    },
    {
        "id": 26,
        "address": "北京市",
        "ads": "北京市东城区东华门街道东华门大街56号北京故宫酒文化有限公司",
        "create_time": "2022-07-05T04:02:09.000Z",
        "count": 25
    },
    {
        "id": 25,
        "address": "北京市",
        "ads": "北京市东城区东华门街道东华门大街56号北京故宫酒文化有限公司",
        "create_time": "2022-07-05T03:58:55.000Z",
        "count": 25
    }
]
```

返回参数说明：无

备注：无

## 用户组

### 用户登录

简要描述：

- 用户登录

请求URL：

- `https://www.3154movie.com/login`

请求方式：

- POST

参数：

| 参数名   | 必选 | 类型   | 说明   |
| :------- | :--- | :----- | ------ |
| username | 是   | string | 用户名 |
| password | 是   | string | 密码   |

调用例子：`https://www.3154movie.com/login`

返回示例：

```
{
    "id": 13,
    "username": "zhangsan",
    "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInVzZXJuYW1lIjoiemhhbmdzYW4iLCJpYXQiOjE2NTcyNTI3ODgsImV4cCI6MTY1NzMzOTE4OH0.MRGXR3f-c8qY1r6st6roFHwOUrjGRR74WUG3QiTqSFfYlpMyXrkzOgJ4bpXK_QtAV9YiIb73uln46_p_GriwfCJk5hJ0Y0Akk-VYI-DzSANhPx8LO9UoE5ObgLk1wKhqf3noJd4s_VC6cN0dqwXfNsqUgNqYDRreWPl811XNyrg"
}
```

返回参数说明：

| 参数名   | 必选 | 类型   | 说明         |
| :------- | :--- | :----- | ------------ |
| id       | 是   | string | 用户id       |
| username | 是   | string | 用户名       |
| token    | 是   | string | 用户登录携带 |

备注：无

### 添加用户(后台)

简要描述：

- 新建用户(需获取token并且为一级权限)

请求URL：

- `https://www.3154movie.com/user`

请求方式：

- POST

参数：

| 参数名   | 必选 | 类型   | 说明   |
| :------- | :--- | :----- | ------ |
| username | 是   | string | 用户名 |
| password | 是   | string | 密码   |
| grade    | 是   | string | 权限   |

调用例子：`https://www.3154movie.com/user`

返回示例：

```
用户liu2添加成功
```

返回参数说明：无

备注：无

### 删除用户(后台)

简要描述：

- 删除用户(需获取token并且为一级权限)

请求URL：

- `https://www.3154movie.com/user/delete`

请求方式：

- DELETE

参数：

| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| id     | 是   | string | 用户id |

调用例子：`https://www.3154movie.com/user/delete?id=14`

返回示例：

```
移除成功
```

返回参数说明：无

备注：无

### 获取当前用户信息

简要描述：

- 获取当前用户信息(需获取token)

请求URL：

- `https://www.3154movie.com/user/detail`

请求方式：

- GET

参数：无（仅携带token）

调用例子：`https://www.3154movie.com/user/detail`

返回示例：

```
[
    {
        "id": 13,
        "username": "zhangsan",
        "password": "4297f44b13955235245b2497399d7a93",
        "grade": 4,
        "name": null,
        "phone": null,
        "create_time": "2022-07-08T00:56:22.000Z",
        "update_time": null
    }
]
```

返回参数说明：

| 参数名      | 必选 | 类型   | 说明         |
| :---------- | :--- | :----- | ------------ |
| id          | 是   | string | 用户id       |
| username    | 是   | string | 用户名       |
| password    | 是   | string | 用户登录携带 |
| grade       | 是   | string | 权限         |
| name        | 是   | string | 名称         |
| phone       | 是   | number | 手机号码     |
| create_time | 是   | string | 创建时间     |
| update_time | 是   | string | 修改时间     |

备注：无

### 修改当前用户信息

简要描述：

- 修改用户信息(需获取token)

请求URL：

- `https://www.3154movie.com/user/update`

请求方式：

- PATCH

参数：无（仅携带token）

调用例子：`https://www.3154movie.com/user/update`

返回示例：

```

```

返回参数说明：无

备注：无

### 获取所有用户信息(后台)

简要描述：

- 获取当前用户信息(需获取token并且为一级权限)

请求URL：

- `https://www.3154movie.com/user/allUserInfo`

请求方式：

- GET

参数：

| 参数名 | 必选 | 类型   | 说明   |
| :----- | :--- | :----- | ------ |
| num    | 是   | string | 页码量 |
| page   | 是   | string | 页码   |

调用例子：`https://www.3154movie.com/user/allUserInfo?num=10&page=1`

返回示例：

```
[
    {
        "id": 13,
        "username": "zhangsan",
        "password": "4297f44b13955235245b2497399d7a93",
        "grade": 4,
        "name": null,
        "phone": null,
        "create_time": "2022-07-08T00:56:22.000Z",
        "update_time": null,
        "count": 2
    },
    {
        "id": 9,
        "username": "liu",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "grade": 1,
        "name": null,
        "phone": null,
        "create_time": "2022-03-25T07:14:05.000Z",
        "update_time": null,
        "count": 2
    }
]
```

返回参数说明：[{},{},{}]

备注：无

