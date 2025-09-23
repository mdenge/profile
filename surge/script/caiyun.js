const version = 'V1.0.8';

let responseBody = {};

if ($request.url.includes("/v2/user")) {
  responseBody = JSON.parse($response.body);
  responseBody.result.is_vip = 1;
  responseBody.result.svip_expired_at = 1892260800;
  responseBody.result.wt.vip.expired_at = 1892260800;
  responseBody.result.svip_take_effect = 1;
  responseBody.result.vip_type = "s";

} else if ($request.url.includes("user_detail")) {
  responseBody = JSON.parse($response.body);
  ["svip", "vip"].forEach(e => {
    if (responseBody.vip_info[e]) {
      responseBody.vip_info[e] = {
        expires_time: "1892260800",
        is_auto_renewal: true
      };
    }
  });

} else if ($request.url.includes("activity")) {
  if ($request.url.includes("type_id=A03")) {
    responseBody = {
      status: "ok",
      activities: [
        {
          type: "tabbar",
          name: "aichat",
          feature: false
        }
      ]
    };
  } else {
    responseBody = {
      status: "ok",
      activities: [
        {
          items: [{}]
        }
      ]
    };
  }

} else if ($request.url.includes("operation/homefeatures")) {
  responseBody = { data: [] };

} else if ($request.url.includes("operation/feeds")) {
  responseBody = JSON.parse($response.body);
  responseBody.data = responseBody.data.filter(
    e => e.category_times_text.indexOf("人查看") !== -1
  );

} else if ($request.url.includes("operation/banners")) {
  responseBody = {
    data: [
      {
        avatar: "https://cdn-w.caiyunapp.com/p/app/operation/prod/banner/668502d5c3a2362582a2a5da/d9f198473e7f387d13ea892719959ddb.jpg",
        url: "https://cdn-w.caiyunapp.com/p/app/operation/prod/article/66850143c3a2362582a2a5d9/index.html",
        title: "暴雨来袭，这些避险“秘籍”你学会了吗？",
        banner_type: "article"
      }
    ]
  };

} else if ($request.url.includes("operation/features")) {
  responseBody = JSON.parse($response.body);
  responseBody.data = responseBody.data.filter(
    e => e.url.indexOf("cy://") !== -1
  );

} else if ($request.url.includes("campaigns")) {
  responseBody = {
    campaigns: [
      {
        name: "driveweather",
        title: "驾驶天气新功能",
        url: "cy://page_driving_weather",
        cover: "https://cdn-w.caiyunapp.com/p/banner/test/668d442c4fe75aca7251c161.png"
      }
    ]
  };

} else if ($request.url.includes("notification/message_center")) {
  responseBody = { messages: [] };

} else if ($request.url.includes("config/cypage")) {
  responseBody = { popups: [], actions: [] };

} else {
  $done({});
}

$done({ body: JSON.stringify(responseBody) });
