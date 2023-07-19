##### 功能描述


- 账号密码登录

##### 请求URL
- ` /login/password `

##### 请求方式

- POST 

#### 请求数据类型

- `application/json`

#### 请求参数data格式定义

```json
  {

    "username":XXXX,
    "password":XXXX
  }
```



##### 请求数据字段说明

|字段|必选|类型|长度|字段描述|
|:----    |:---|:----- |:-----|-----   |
|username |是  |string | 20 |用户名   |
|password |是  |string | 50 | 密码    |


##### 返回数据json格式定义 

```json
  {
    "code": 0,
    "message": "OK",
    "data": {

      "tokenInfo": {
         "tokenName": "mytoken",
         "tokenValue": "142a55a1-76e0-43b0-8233-4cfb5597286e"
        },
        "userInfo": {
            "userId": "1234",
            "realName": "张三",
            "avatar": "http://"
        }
    }

  }

```

##### 返回数据字段说明 

|字段|类型|长度 |字段描述|
|:-----  |:-----|:-----|-----                           |
|code |int  |  |处理状态说明  |
|message |string  |  |错误内容说明  |
|tokenInfo |json  |  |token信息  |
|--tokenName |string  |  |token名称  |
|--tokenValue |string  |  |token值  |
|userInfo |json  |  |员工信息  |
|--userId |long  |  |用户id  |
|--realName |string  |  |token值  |
|--avatar |string  |  |头像 |
