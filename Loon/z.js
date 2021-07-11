var obj = JSON.parse($response.application); 
obj['is_premium'] = true; 
obj['os_version'] = 14.4; 
$done({application: JSON.stringify(obj)});
