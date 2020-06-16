var settings = {
  "url": "http://jwzx.cqupt.edu.cn/jxpj/post.php",
  "method": "POST",
  "timeout": 0,
  "data": {
    "action": "jxpj_edit",
    "jxb": "041102",
    "teaId": "041102",
    "pj[307]": "10",
    "pj[308]": "10",
    "pj[309]": "10",
    "pj[310]": "10",
    "pj[311]": "10",
    "pj[312]": "10",
    "pj[313]": "10",
    "pj[314]": "10",
    "pj[315]": "10",
    "pj[316]": "10",
  }
};

function xwww(data) {
  var str = "";
  for (let [key, value] of Object.entries(settings.data)) {
    str += key;
    str += '=';
    str += value;
    str += '&';
  }
  return str.substr(0, str.length - 1);
}

function randomNum(minNum,maxNum){ 
  switch(arguments.length){ 
      case 1: 
          return parseInt(Math.random()*minNum+1,10); 
      break; 
      case 2: 
          return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
      break; 
          default: 
              return 0; 
          break; 
  } 
} 

var memo = ["老师耐心", "很细心", "很有耐心", "讲得好"];

$('table.pTable tbody tr').each(function(trIndex, trItem) {
    var params = $(trItem).find('td:last a').attr('href').split('?')[1].split('&');
    var jxb = params[0].split('=')[1];
    var teaId = params[1].split('=')[1];
    settings.data.jxb = jxb;
    settings.data.teaId = teaId;
    form = xwww(settings.data);
    form += "&memo[]=" + memo[randomNum(1, 3)];
    form += "&memo[]=无";
    form += "&zbCount=10";
    $.post({
      url: settings.url,
      data: form,
      success: function(response) {
        console.log(jxb + ":" + response);        
      }
    })
});

