 /**
  * authors:wanglong
  * date:2019/06/25
  */
 ////JSON格式:
 var leftinfo = {
     resident: 34601, ///常驻人口
     registered: 3770, // 户籍人口
     totalNatality: "1.39", //总和生育率
     newBornNum: "34.8", //新生人口数
     deathNum: "5.7", //死亡人口数
     natality: "10.12", //出生率
     mortality: "1.66", //死亡率
     natural: "8.46", //自然增长率
     HALE: "57.7", //健康预期寿命
     LE: "77.7" //预期寿命

 }
 var rightinfo = {
     totalNatality: "1.4", //总和生育率
     resident: 1015.3, ///常驻人口
     registered: 1229.5, // 户籍人口
     newBornNum: 9.3, //新生人口数
     deathNum: "1.6", //死亡人口数
     natality: "9.21‰", //出生率
     mortality: "1.60‰", //死亡率
     natural: "7.61‰", //自然增长率
     HALE: "57.7", //健康预期寿命
     LE: "84.7" //预期寿命
 }
 // 各区县的数据，在这里填   有实际数据时候 删除这部分 重新调用方法
 var areaData = [{
         name: '渝中区',
         value: 12,

     },
     {
         name: '万州区',
         value: 412,
         selected: true
     },
     {
         name: '涪陵区',
         value: 98
     },
     {
         name: '大渡口区',
         value: 236
     },
     {
         name: '江北区',
         value: 4
     },
     {
         name: "璧山区",
         value: 41
     },
     {
         name: '沙坪坝区',
         value: 59
     },
     {
         name: '九龙坡区',
         value: 69
     },
     {
         name: '南岸区',
         value: 9
     },
     {
         name: '北碚区',
         value: 56
     },
     {
         name: '綦江区',
         value: 69
     },
     {
         name: '巫山县',
         value: 59
     },
     {
         name: '大足区',
         value: 39
     },
     {
         name: '渝北区',
         value: 169
     },
     {
         name: '巴南区',
         value: 269
     },
     {
         name: '黔江区',
         value: 169
     },
     {
         name: '长寿区',
         value: 9
     },
     {
         name: '江津区',
         value: 59
     },
     {
         name: '合川区',
         value: 29
     },
     {
         name: '永川区',
         value: 69
     },
     {
         name: '南川区',
         value: 59
     },
     {
         name: '铜梁区',
         value: 9
     },
     {
         name: '潼南区',
         value: 200
     },
     {
         name: '荣昌区',
         value: 5
     },
     {
         name: '开州区',
         value: 69
     },
     {
         name: '梁平区',
         value: 9
     },
     {
         name: '武隆区',
         value: 322
     },
     {
         name: '城口县',
         value: 59
     },
     {
         name: '丰都县',
         value: 59
     },
     {
         name: '垫江县',
         value: 59
     },
     {
         name: '忠县',
         value: 69
     },
     {
         name: '云阳县',
         value: 9
     },
     {
         name: '奉节县',
         value: 69
     },
     {
         name: '巫山县',
         value: 32
     },
     {
         name: '巫溪县',
         value: 30
     },
     {
         name: '石柱土家族自治县',
         value: 15
     },
     {
         name: '秀山土家族苗族自治县',
         value: 111
     },
     {
         name: '酉阳土家族苗族自治县',
         value: 69
     },
     {
         name: '彭水苗族土家族自治县',
         value: 369
     }

 ];

 /***
  *
  *  右侧区域数据的赋值方法
  * JSON格式：
  * var rightinfo={
     totalNatality:"1.4",//总和生育率
     resident:1015.3,///常驻人口
     registered:1229.5,// 户籍人口
     newBornNum:	9.3,//新生人口数
     deathNum:"1.6",//死亡人口数
     natality:"9.21‰",//出生率
     mortality:"1.60‰",//死亡率
     natural:"7.61‰",//自然增长率
     HALE:"57.7",//健康预期寿命
     LE:"84.7"//预期寿命
 }
  */


 function setRightInfo(obj) {
     var rzhsyl = obj.totalNatality,
         rczrk = obj.resident,
         rhjrk = obj.registered,
         rcsrk = obj.newBornNum,
         rswrk = obj.deathNum,
         rsyl = obj.natality,
         rswl = obj.mortality,
         rzrzzl = obj.natural,
         rjkyqsm = obj.HALE,
         ryqsm = obj.LE;
     $("#rzhsyl").html(rzhsyl)
     $("#rczrk").html(rczrk)
     $("#rhjrk").html(rhjrk)
     $("#rcsrk").html(rcsrk)
     $("#rswrk").html(rswrk)
     $("#rsyl").html(rsyl)
     $("#rswl").html(rswl)
     $("#rjkyqsm").html(rjkyqsm)
     $("#rzrzzl").html(rzrzzl)
     $("#ryqsm").html(ryqsm)



 }
 /**
  *   人口现状赋值方法:
  *  JSON格式:
     var leftinfo={
     resident:34601,///常驻人口
     registered:3770,// 户籍人口
     totalNatality:"1.39",//总和生育率
     newBornNum:"34.8",//新生人口数
     deathNum:"5.7",//死亡人口数
     natality:"10.12",//出生率
     mortality:"1.66",//死亡率
     natural:"8.46",//自然增长率
     HALE:"57.7",//健康预期寿命
     LE:"81.7"//预期寿命

 }
  */
 function setLeftInfo(obj) {
     var residentarr = [],
         registeredarr = [];
     var resident = obj.resident.toString()
     var registered = obj.registered.toString()
     for (var i = 0; i < resident.length; i++) {

         var str = `<div class="num">${resident.charAt(i)}</div>`
         residentarr.push(str)
     }
     for (var i = 0; i < registered.length; i++) {
         var str2 = `<div class="num">${registered.charAt(i)}</div>`
         registeredarr.push(str2)
     }
     var zsyl = `${obj.totalNatality}<small> </small>`;
     var xsrs = `${obj.newBornNum}<small>万</small>`;
     var swrs = `${obj.deathNum}<small>万</small>`;
     var csl = `${obj.natality}<small>‰</small>`;
     var swl = `${obj.mortality}<small>‰</small>`;
     var zrzzl = `${obj.natural}<small>‰</small>`;
     var jkyqsm = `${obj.HALE}<small>岁</small>`;
     var yqsm = `${obj.LE}<small>岁</small>`;
     $(".resident .nums").html(residentarr.join(""))
     $(".registered .nums").html(registeredarr.join(""))
     $("#zsyl").html(zsyl)
     $("#xsrs").html(xsrs)
     $("#swrs").html(swrs)
     $("#csl").html(csl)
     $("#swl").html(swl)
     $("#zrzzl").html(zrzzl)
     $("#jkyqsm").html(jkyqsm)
     $("#yqsm").html(yqsm)
 }
 /**
  *  echart 方法
  *  数据格式demo:
  *
  *  // 各区县的数据，在这里填
     var areaData = [{
         name: '渝中区',
         value: 12,
         selected: true
     },
     {
         name: '万州区',
         value: 412
     },
     {
         name: '涪陵区',
         value: 98
     },
     {
         name: '大渡口区',
         value: 236
     },
     {
         name: '江北区',
         value: 4
     },
     {
         name: '沙坪坝区',
         value: 59
     },
     {
         name: '九龙坡区',
         value: 69
     },
     {
         name: '南岸区',
         value: 9
     },
     {
         name: '北碚区',
         value: 56
     },
     {
         name: '綦江区',
         value: 69
     },
     {
         name: '巫山县',
         value: 59
     },
     {
         name: '大足区',
         value: 39
     },
     {
         name: '渝北区',
         value: 169
     },
     {
         name: '巴南区',
         value: 269
     },
     {
         name: '黔江区',
         value: 169
     },
     {
         name: '长寿区',
         value: 9
     },
     {
         name: '江津区',
         value: 59
     },
     {
         name: '合川区',
         value: 29
     },
     {
         name: '永川区',
         value: 69
     },
     {
         name: '南川区',
         value: 59
     },
     {
         name: '铜梁区',
         value: 9
     },
     {
         name: '潼南区',
         value: 200
     },
     {
         name: '荣昌区',
         value: 5
     },
     {
         name: '开州区',
         value: 69
     },
     {
         name: '梁平区',
         value: 9
     },
     {
         name: '武隆区',
         value: 322
     },
     {
         name: '城口县',
         value: 59
     },
     {
         name: '丰都县',
         value: 59
     },
     {
         name: '垫江县',
         value: 59
     },
     {
         name: '忠县',
         value: 69
     },
     {
         name: '云阳县',
         value: 9
     },
     {
         name: '奉节县',
         value: 69
     },
     {
         name: '巫山县',
         value: 32
     },
     {
         name: '巫溪县',
         value: 30
     },
     {
         name: '石柱土家族自治县',
         value: 15
     },
     {
         name: '秀山土家族苗族自治县',
         value: 111
     },
     {
         name: '酉阳土家族苗族自治县',
         value: 69
     },
     {
         name: '彭水苗族土家族自治县',
         value: 369
     }

 ];
  */
 function loadChart(data) {
     /**
      *  默认选中的地区
      */
     var defaultSelect = [{
         name: '奉节县',
         selected: true,
     }]

     // 各区县的经纬度坐标，不要乱动

     var geoCoordMap = {
         '渝中区': [106.56288, 29.556742],
         '万州区': [108.380246, 30.807807],
         '涪陵区': [107.394905, 29.703652],
         '大渡口区': [106.48613, 29.481002],
         '江北区': [106.532844, 29.575352],
         '沙坪坝区': [106.4542, 29.541224],
         '九龙坡区': [106.364269, 29.428456],
         '南岸区': [106.560813, 29.523992],
         '北碚区': [106.437868, 29.82543],
         '綦江区': [106.651417, 29.028091],
         '大足区': [105.715319, 29.700498],
         '渝北区': [106.512851, 29.601451],
         '巴南区': [106.519423, 29.381919],
         '黔江区': [108.782577, 29.527548],
         '长寿区': [107.074854, 29.833671],
         '江津区': [106.253156, 29.283387],
         '合川区': [106.265554, 29.990993],
         '永川区': [105.894714, 29.348748],
         '南川区': [107.098153, 29.156646],
         '璧山区': [106.231126, 29.593581],
         '铜梁区': [106.054948, 29.839944],
         '潼南区': [105.841818, 30.189554],
         '荣昌区': [105.594061, 29.403627],
         '开州区': [108.413317, 31.167735],
         '梁平区': [107.800034, 30.672168],
         '武隆区': [107.75655, 29.32376],
         '城口县': [108.6649, 31.946293],
         '丰都县': [107.73248, 29.866424],
         '垫江县': [107.348692, 30.330012],
         '忠县': [108.037518, 30.291537],
         '云阳县': [108.697698, 30.930529],
         '奉节县': [109.465774, 31.019967],
         '巫山县': [109.878928, 31.074843],
         '巫溪县': [109.628912, 31.3966],
         '石柱土家族自治县': [108.112448, 29.99853],
         '秀山土家族苗族自治县': [108.996043, 28.444772],
         '酉阳土家族苗族自治县': [108.767201, 28.839828],
         '彭水苗族土家族自治县': [108.166551, 29.293856]
     }
     ///潼南县  开县 綦江县  万盛区  双桥区
     var convertData = function (data) {
         var res = [];
         for (var i = 0; i < data.length; i++) {
             var geoCoord = geoCoordMap[data[i].name];
             if (geoCoord) {
                 res.push({
                     name: data[i].name,
                     value: geoCoord.concat(data[i].value),
                     selected: data[i].selected
                 });
             }
         }
         return res;
     };
     var dealData = convertData(data)
     //onsole.log("convertData-------",convertData(data))
     data.sort(function (a, b) {
         return b.value - a.value
     })
     var mychart = echarts.init(document.getElementById('graph'))
     mychart.showLoading()
     $.getJSON('../json/chongqing.json', function (json) {
         //console.log("JSON",json)

         echarts.registerMap('chongqing', json)
         var option = {
             // backgroundColor: '#0E171F',
             tooltip: {
                 trigger: 'item',
                 formatter: function (params) {
                     //console.log(params)
                     return params.name + ' : ' + "<br/>" + params.seriesName + ' : ' + params.data.value[2] + '万人';
                 }
             },
             visualMap: {
                 type: "continuous",
                 show: true,
                 textStyle: {
                     color: "#5891A2",
                     fontWeight: "400",
                     fontFamily: "MicrosoftYaHei",
                     fontSize: "12px"
                 },
                 //range:rangeArr,
                 right: '100',
                 bottom: '80',
                 text: ['常驻人口', ''], // 文本，默认为数值文本
                 calculable: true,
                 //seriesIndex: [1],
                 min: data[data.length - 1].value,
                 max: data[0].value,
                 inRange: {
                     color: ['#318095', '#254751', '#1F3D45'] // 黑紫黑

                 },
                 formatter: function (value) { //标签的格式化工具。
                     var str;
                     if (value.length >= 4) {
                         str = Math.round(value / 10000) + '万人'
                     } else {
                         str = Math.round(value)
                     }
                     return str; // 范围标签显示内容。
                 }
             },

             series: [{
                 type: "map",
                 map: "chongqing",
                 name: "当年人口分布",
                 label: {
                     normal: {
                         show: false
                     },
                     emphasis: {
                         show: false,
                     }
                 },
                 data: dealData,
                 roam: true,
                 itemStyle: {
                     normal: {
                         areaColor: '#318095',
                         borderColor: '#489099',
                     },
                     emphasis: {
                         areaColor: '#FFD750',
                     }
                 }
             }]
         }
         mychart.setOption(option)
         mychart.hideLoading();
         mychart.on('click', function (params) {
             if (params.seriesType === 'map') {
                 //console.log("click---",params)
                 //var data=convertData(data)
                 option.series.data = changeSelect(params.data.name, dealData)
                 mychart.setOption(option)

             }
         });

     })
 }

 function changeSelect(name, data) {

     for (var i = 0; i < data.length; i++) {
         if (data[i].name == name) {
             data[i].selected = true
         } else {
             data[i].selected = false
         }
     }
     return data
 }

 $(function () {
     loadChart(areaData);
     setLeftInfo(leftinfo)
     setRightInfo(rightinfo)
 })
