/***
 *  authors:wanglong
 *  date:2019-06/27
 */
/**
 * 时间轴数据
 */
var arr = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]

// 各区县的数据，在这里填   有实际数据时候 删除这部分 重新调用方法
// 各区县的数据，在这里填   有实际数据时候 删除这部分 重新调用方法
var areaData = [{
        name: '渝中区',
        value: 12,

    },
    {
        name: '万州区',
        value: 41,
    },
    {
        name: '涪陵区',
        value: 98
    },
    {
        name: '大渡口区',
        value: 23
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
        value: 16
    },
    {
        name: '巴南区',
        value: 26
    },
    {
        name: '黔江区',
        value: 16
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
        value: 20
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
        value: 32
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
        value: 36
    }

];



/**
 * 监测点内容数量
 */
var warningDescData = [{
        name: "基本情况",
        value: "6989"
    },
    {
        name: "生育情况",
        value: "8793"
    },
    {
        name: "死亡情况",
        value: "8907"
    }
]



/**  自然增长率
 *  echart 方法
 *  数据格式demo:
 *  处理完的数据应该没有单位显示时候 已经添加单位‰
 *  [{
        name: '奉节县',
        value: 6.48,
    },
    {
        name: '巫溪县',
        value: 4.12
    },
    {
        name: '开州区',
        value: 9.8
    },
    {
        name: '酉阳土家族苗族自治县',
        value: 2.36
    },
    {
        name: '彭水苗族土家族自治县',
        value: 4.0
    },
    {
        name: '云阳县',
        value: 5.9
    },
    {
        name: '万州区',
        value: 6.9
    },
    {
        name: '城口县',
        value: 9.0
    },
    {
        name: '江津区',
        value: 5.6
    },
    {
        name: '石柱土家族自治县',
        value: 6.9
    },
    {
        name: '巫山县',
        value: 5.9
    },
    {
        name: '涪陵区',
        value: 3.9
    },
    {
        name: '丰都县',
        value: 1.69
    },
    {
        name: '武隆县',
        value: 2.69
    },
    {
        name: '南川区',
        value: 1.69
    },
    {
        name: '秀山土家族苗族自治县',
        value: 9.8
    },
    {
        name: '黔江区',
        value: 5.9
    },
    {
        name: '合川区',
        value: 2.9
    },
    {
        name: '綦江区',
        value: 6.9
    },
    {
        name: '忠县',
        value: 5.9
    },
    {
        name: '梁平县',
        value: 9.9
    },
    {
        name: '巴南区',
        value: 2.0
    },
    {
        name: '潼南区',
        value: 0.5
    },
    {
        name: '永川区',
        value: 6.9
    },
    {
        name: '垫江县',
        value: 3.9
    },
    {
        name: '渝北区',
        value: 3.2
    },
    {
        name: '长寿区',
        value: 5.9
    },
    {
        name: '大足县',
        value: 5.9
    },
    {
        name: '铜梁县',
        value: 5.9
    },
    {
        name: '荣昌县',
        value: 0.69
    },
    {
        name: '璧山县',
        value: 5.9
    },
    {
        name: '北碚区',
        value: 6.9
    },
    {
        name: '九龙坡区',
        value: 3.2
    },
    {
        name: '沙坪坝区',
        value: 3.0
    },
    {
        name: '南岸区',
        value: 1.5
    },
    {
        name: '江北区',
        value: 1.11
    },
    {
        name: '大渡口区',
        value: 6.9
    },
    {
        name: '渝中区',
        value: 3.69
    },
    {
        name: '开县',
        value: 7.8
    },
    {
        name: '潼南县',
        value: 9.1
    },
    {
        name: '綦江县',
        value: 8.9
    },
    {
        name: '万盛区',
        value: 4.7
    },
    {
        name: '双桥区',
        value: 1.2
    }

];
 */
function loadMonitoringChart(data) {

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
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                });
            }
        }
        return res;
    };
    var dealData = convertData(data)
    var monitoringChart = echarts.init(document.getElementById('monitoringChart'))
    monitoringChart.showLoading()
    data.sort(function (a, b) {
        return b.value - a.value
    })
    $.getJSON('../json/chongqing.json', function (json) {
        echarts.registerMap('chongqing', json)
        var option = {
            title: {
                // text:"重庆地图",
            },
            //   backgroundColor: '#0E171F',
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return params.name + ' : ' + "<br/>" + params.seriesName + ' : ' + params.data.value[2]
                }
            },
            geo: {
                // type: 'map',
                map: 'chongqing',
                itemStyle: {
                    normal: {
                        areaColor: "#123841", //['#318095', '#254751', '#1F3D45'],
                        borderColor: '#489099'
                    },
                    emphasis: {
                        areaColor: '#254751'
                    }
                },
                roam: true,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                }
            },
            series: [{
                name: "监测点数量",
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    period: 4, //动画时间，值越小速度越快
                    brushType: 'stroke', //波纹绘制方式 stroke, fill
                    scale: 6, //波纹圆环最大限制，值越大波纹越大
                    color: "#FFDA57"
                },

                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        //offset:[5, 0],
                        //color:"#FF5902",
                        formatter: '{b}',
                        textStyle: {
                            color: "#FFD756"
                        }
                    }
                },
                itemStyle: {
                    //backgroundColor:"#FFA93D"
                },
                symbolSize: function (val) {
                    return val[2] / 5; //圆环大小
                },
                data: dealData,
                formatter: "{b}"
            }]
        }
        monitoringChart.hideLoading()
        monitoringChart.setOption(option)
    })
}
/***
 *  监测机构分类数据
 */
var data = [{
        'name': '机构',
        'value': 88
    },
    {
        'name': '乡镇',
        'value': 32
    }
]


/**
 *
 * 监测点分类
 */
function loadMonitoringTypeChart(obj) {
    var agechart = echarts.init(document.getElementById('monitoringTypeChart'))
    var option = {
        color: ['#0999AB', '#385ADD'],
        tooltip: {
            trigger: 'item',
            formatter: function (parms) {
                //console.log(parms)
                return parms.data.name + "：<br>" + parms.data.value + "个"
            }
        },
        legend: {
           // orient: 'vertical',
            // left: '55%',,
           // right: '0',

            align: 'left',
           // top: 'middle',
            bottom:"10%",
            textStyle: {
                color: '#5FF2DF',
                fontSize: '16'
            },
            "itemGap": 10,
            "itemWidth": 30,
            "itemHeight": 20,
            data: obj,
        },
        series: [{
            name: '年龄结构',
            type: 'pie',
           // center: ['40%', '50%'],
            radius: ['40%', '65%'],
            clockwise: false, // 饼图的扇区是否是顺时针排布
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                    position: 'inner',
                    formatter: function (parms) {
                        return parms.data.value + "个"
                    },
                }
            },
            data: obj
        }]
    }
    agechart.setOption(option)
}



/***
 *  时间轴的切换来加载chart数据
 *
 *
 *
 */
function setWarningDesc(obj) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
        var str = ` <div class="item" style="width:280px;padding:20px;">
        <div class="left-item" style="font-size:18px">${obj[i].name}</div>
        <div class="right-item">${obj[i].value}</div>
    </div>`
        arr.push(str)
    }
    $("#jcdnrsl").empty().html(arr.join(""))
}

function chartReLoad() {

    setWarningDesc(warningDescData)
    loadMonitoringChart(areaData)
    loadMonitoringTypeChart(data)
}
/****
 *
 *  时间轴
 * 数据格式数组：[2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
 *  和左边的总览数据同时取数据同时执行
 *
 */
function timelineHandle(arr) {
    var htmlarr = [];
    for (var i = 0; i < arr.length; i++) {
        var str = `<li>${arr[i]}</li>`;
        htmlarr.push(str)
    }
    $(".timeline").html(htmlarr.join(""))
    $(".timeline").off("click", "li").on("click", "li", function () {
        $(this).siblings("li").removeClass("active")
        $(this).addClass('active');
        var name = $(this).text();
        chartReLoad() //rateChart
    })
    $(".timeline").find("li").eq(0).trigger("click")
}


$(function () {
    timelineHandle(arr)
})
