let obj = JSON.parse($response.body);
obj ={
      {
  "socials" : {
    "twitter" : ""
  },
  "location" : "",
  "pro_plan" : "pro_premium_trial",
  "status" : "",
  "following_count" : 0,
  "follow_status" : false,
  "is_online" : true,
  "avatars" : {
    "mid" : "",
    "big" : "",
    "small" : "",
    "orig" : null
  },
  "badges" : [
    {
      "name" : "pro:pro_premium_trial",
      "verbose_name" : "Premium Trial"
    }
  ],
  "youtube_channel" : "",
  "reputation" : 0,
  "last_visit" : 1626008827,
  "broker_plan" : null,
  "is_broker" : false,
  "id" : 24880007,
  "website" : "",
  "followers_count" : 0,
  "last_locale" : "en",
  "youtube_channel_name" : null,
  "publications" : {
    "ideas" : 0,
    "scripts" : 0
  },
  "is_trial_available" : false,
  "theme" : "light",
  "has_phone" : false,
  "username" : "admin"
}
    }
$done({body: JSON.stringify(obj)});