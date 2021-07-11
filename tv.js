*/var obj = JSON.parse($response.body); 
obj['pro_plan'] = pro_premium;
"badges" : [
    {
      "name" : "pro:pro_premium_trial",
      "verbose_name" : "Premium Trial"
    }
$done({body: JSON.stringify(obj)});