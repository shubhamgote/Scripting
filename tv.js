*/var obj = JSON.parse($response.body); 
obj['pro_plan'] = pro_premium;
obj={"badges":[{"name":"pro:pro_premium","verbose_name":"Premium"}]};
$done({body: JSON.stringify(obj)});
