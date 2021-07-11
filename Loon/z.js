*/var obj = JSON.parse($response.body); 
obj["application"]= [
      {
        "app_version" : "5.220.0",
        "is_premium": "true",
      }];

$done({body: JSON.stringify(obj)});
