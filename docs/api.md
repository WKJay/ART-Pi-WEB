## H7 WEB API

_V0.1 by WKJay_

--------------------

#### 1. Basic information

request_url: `/cgi-bin/basic_info`

response:

```json
//success
{
    code:0
    payload:{
        "id0":"xxx",
        "id1":"xxx"
    }
}
//fail
{
    code:-1,
    msg:"xxxx"
}
```

note: all values return as a string.

#### 2. Board Control

request url: `/cgi-bin/board_control`

```json
//request
{
    id:"xxx"
    code:0
}
```

| id   | describe |
| ---- | -------- |
| dev0 | Blue LED |
| dev1 | Red LED  |
| dev2 | BEEP     |

| code | describe     |
| ---- | ------------ |
| 0    | Turn off     |
| 1    | Turn on      |
| x    | not used now |

response:

```json
//success
{
    code:0
    msg:"ok"
}
//fail
{
    code:-1,
    msg:"xxxx"
}
```

#### 3. Current active mods

request url: `/cgi-bin/plugins_info`
response:

```json
//success
{
    code:0
    plugins:[
        {
            name:"xxx",
            author:"xxx",
            version:"xxx"
        },
        {
            name:"xxx",
            author:"xxx",
            version:"xxx"
        }
    ]
}
//fail
{
    code:-1,
    msg:"xxxx"
}
```