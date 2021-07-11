*/var obj = JSON.parse($response.body); 
obj["application"]= [
      {
        "is_premium": "true",
      }];

$done({body: JSON.stringify(obj)});
