const url=$request.url;$response.body||$done({});let obj=JSON.parse($response.body);if(url.includes("/gw/mtop.taobao.idlehome.home.nextfresh")&&(delete obj.data.widgetReturnDO,delete obj.data.bannerReturnDO,obj.data?.sections)){obj.data.sections=obj.data.sections.filter((e=>!(e.data&&("AD"===e.data.bizType||"homepage"===e.data.bizType))));let e=["fish_home_yunying_card_d3","idlefish_seafood_market","fish_home_chat_room"];obj.data.sections=obj.data.sections.filter((function(t){return!e.includes(t.template.name)}))}url.includes("/gw/mtop.taobao.idle.local.home")&&obj.data?.sections&&(obj.data.sections=obj.data.sections.filter((e=>!(e.data&&"AD"===e.data.bizType)))),url.includes("/gw/mtop.taobao.idle.home.whale.modulet")&&delete obj.data.container.sections,(url.includes("/gw/mtop.taobao.idlemtopsearch.search.shade")||url.includes("/gw/mtop.taobao.idle.user.strategy.list"))&&delete obj.data,$done({body:JSON.stringify(obj)});