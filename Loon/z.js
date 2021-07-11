var obj = JSON.parse($response.body); 
obj['is_premium'] = true; 
$done({body: JSON.stringify(obj)});
