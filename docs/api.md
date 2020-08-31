## H7 WEB API

_V0.1 by WKJay_

--------------------

#### Basic information

request: `/cgi-bin/basic_info`

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
