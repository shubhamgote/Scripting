var obj = JSON.parse($response.body); 
obj['is_premium'] = true; 
obj['os_version'] = 14.4; 
$done({body: JSON.stringify(obj)});
