部署教程： 
1.可通过访问Tangjiachen的github的Team-Victiory-Wx-Miniprogram仓库下载代码，也可以通过访问https://github.com/tangjiachen/Team-Victiory-Wx-Miniprogram-.git或者通过git命令行下在本项目源代码。

2.下载小知老师项目源代码之后，创建一个新文件夹将所有项目源文件放入该文件夹下，然后打开微信开发者工具，选择新创建的文件夹，进入包含app.js的下一集子目录后导入该项目，将开发者APPID更换为自己的APPID。 

3.修改参数：1.导入项目时的APPid（请填写自己的Appid） 2. 在初始化云数据库时，请将app.js中的envs变量设置为自己的数据库环境id

4.外部服务：本项目涉及微信对话开放平台的chatbot插件以及腾讯云AI平台的NLP外部接口服务。

5.云数据库：需要创建集合infrom_geo,并且添加字段SN,artical,datetime,iconpath,id,label,latitude,longtitude,name,picture,src,text,title,unit

6.后台服务配置：1.云数据库环境id 2.云数据库集合 3.微信对话chatbot插件id 