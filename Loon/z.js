*/var obj = JSON.parse($response.body); 
obj['is_premium'] = true;
obj['os_version'] = 16.0;
$done({body: JSON.stringify(obj)});
