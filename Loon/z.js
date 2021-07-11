var obj = JSON.parse($response.body);
{
  "session_id" : "97C6EDF6-992A-45DF-890C-176245F47D19",
  "ts_sent" : 1625991240715,
  "application" : {
    "app_version" : "5.220.0",
    "is_premium" : true,
    "brand" : 4,
    "layout" : 1,
    "platform" : 1
  },
  "device" : {
    "locale" : "en_IN",
    "manufacturer" : "Apple",
    "model" : "iPhone X",
    "device_id" : "459319E6-DFD0-46B1-82E1-31C421810DFF",
    "os_version" : "14.4.2"
  },
  "events" : [
    {
      "body" : {
        "scroll_screen" : {
          "position" : 0,
          "screen_name" : 8,
          "direction" : 5
        }
      },
      "ts" : 1625991237028,
      "tracking" : {
        "screen_name" : 8,
        "screen_id" : "60"
      },
      "name" : 316
    },
    {
      "body" : {
        "reach_bottom" : {
          "screen_name" : 8
        }
      },
      "ts" : 1625991238006,
      "tracking" : {
        "screen_name" : 8,
        "screen_id" : "60"
      },
      "name" : 94
    },
    {
      "body" : {
        "scroll_screen" : {
          "screen_name" : 8,
          "direction" : 5,
          "position" : 0
        }
      },
      "ts" : 1625991238689,
      "tracking" : {
        "screen_name" : 8,
        "screen_id" : "60"
      },
      "name" : 316
    }
  ],
  "user" : {
    "age" : 25,
    "gender" : 1,
    "country_id" : 25,
    "encrypted_user_id" : "zAhMACTcyOTAyMDMzOQAgu33c0dFGZYdcKa7N6F_pByfW88UKKL_TjBx_Ec6E3lk"
  }
}

$done({body: JSON.stringify(obj)});
