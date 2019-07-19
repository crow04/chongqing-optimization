/***
 *  authors:wanglong
 *  date:2019-06/27
 */
/**
 * 时间轴数据
 */
var arr = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]

// 各区县的数据，在这里填   有实际数据时候 删除这部分 重新调用方法
var areaData = [{
    name: '渝中区',
    value: 1.2,

},
    {
        name: '万州区',
        value: 4.12,
    },
    {
        name: '涪陵区',
        value: 9.8
    },
    {
        name: '大渡口区',
        value: 2.36
    },
    {
        name: '江北区',
        value: 4
    },
    {
        name: "璧山区",
        value: 4.1
    },
    {
        name: '沙坪坝区',
        value: 5.9
    },
    {
        name: '九龙坡区',
        value: 6.9
    },
    {
        name: '南岸区',
        value: 9
    },
    {
        name: '北碚区',
        value: 5.6
    },
    {
        name: '綦江区',
        value: 6.9
    },
    {
        name: '巫山县',
        value: 5.9
    },
    {
        name: '大足区',
        value: 3.9
    },
    {
        name: '渝北区',
        value: 1.69
    },
    {
        name: '巴南区',
        value: 2.69
    },
    {
        name: '黔江区',
        value: 1.69
    },
    {
        name: '长寿区',
        value: 9
    },
    {
        name: '江津区',
        value: 5.9
    },
    {
        name: '合川区',
        value: 2.9
    },
    {
        name: '永川区',
        value: 6.9
    },
    {
        name: '南川区',
        value: 5.9
    },
    {
        name: '铜梁区',
        value: 9
    },
    {
        name: '潼南区',
        value: 2
    },
    {
        name: '荣昌区',
        value: 5
    },
    {
        name: '开州区',
        value: 6.9
    },
    {
        name: '梁平区',
        value: 9
    },
    {
        name: '武隆区',
        value: 3.22
    },
    {
        name: '城口县',
        value: 5.9
    },
    {
        name: '丰都县',
        value: 5.9
    },
    {
        name: '垫江县',
        value: 5.9
    },
    {
        name: '忠县',
        value: 6.9
    },
    {
        name: '云阳县',
        value: 9
    },
    {
        name: '奉节县',
        value: 6.9
    },
    {
        name: '巫山县',
        value: 3.2
    },
    {
        name: '巫溪县',
        value: 3
    },
    {
        name: '石柱土家族自治县',
        value: 1.5
    },
    {
        name: '秀山土家族苗族自治县',
        value: 1.11
    },
    {
        name: '酉阳土家族苗族自治县',
        value: 6.9
    },
    {
        name: '彭水苗族土家族自治县',
        value: 3.69
    }

];

/**
 * 年龄结构表
 * 数据结构
 * [
 {
        "name":"儿童(0<X<15岁)",
        "value":100
    },
 {
        "name":"成人 (15岁≤X<65岁)",
        "value":384
    },
 {
        "name":"老年人( 65岁≤X)",
        "value":97
    }
 ]
 *
 */
/**
 * 人口老龄化概况数据
 */
var warningDescData = [{
    name: "全市老龄人口数量（万人）",
    value: "698.9"
},
    {
        name: "全市老龄化程度",
        value: "20.1%"
    },
    {
        name: "全国老龄化程度",
        value: "19.9%"
    }
]


/***
 * 性别年龄结结构
 */
var data = [{
    'name': '65-69',
    'value': 11.3
},
    {
        'name': '70-74',
        'value': 14.3
    },
    {
        'name': '75-79',
        'value': 24.5
    },
    {
        'name': '80-84',
        'value': 20.5
    },
    {
        'name': '85-89',
        'value': 19.4
    },
    {
        'name': '90+',
        'value': 10
    }
]


function loadThatYearRateChart(data) {

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
        var res = []
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name]
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                    selected: data[i].selected
                })
            }
        }
        return res
    }
    var dealData = convertData(data)
    var thatYearRateChart = echarts.init(document.getElementById('thatYearDistributionChart'))
    thatYearRateChart.showLoading()
    data.sort(function (a, b) {
        return b.value - a.value
    })
    $.getJSON('../json/chongqing.json', function (json) {
        echarts.registerMap('chongqing', json)
        var option = {
            // backgroundColor: '#0E171F',
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    //console.log(params)
                    return params.name + ' : ' + "<br/>" + params.seriesName + ' : ' + params.data.value[2] + '‰';
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
                min: data[data.length - 1].value,
                max: data[0].value,
                right: '100',
                bottom: '80',
                text: ['人口老龄化', ''], // 文本，默认为数值文本
                calculable: true,
                //seriesIndex: [1],
                inRange: {
                    color: ['#318095', '#254751', '#1F3D45'] // 黑紫黑

                },
                formatter: function (value) { //标签的格式化工具。
                    return parseFloat(value).toFixed(2) + "‰"; // 范围标签显示内容。
                }
            },
            // geo: {
            //     type: 'map',
            //     map: 'chongqing',
            //     itemStyle: {
            //         normal: {
            //             areaColor: "#123841", //['#318095', '#254751', '#1F3D45'],
            //             borderColor: '#489099'
            //         },
            //         emphasis: {
            //             areaColor: '#254751'
            //         }
            //     },
            //     label:{
            //         normal: {
            //             show: false
            //         },
            //         emphasis: {
            //             show: false
            //         }
            //     }
            // },
            series: [{
                type: "map",
                map: "chongqing",
                name: "人口老龄化",
                label: {
                    normal: {
                        formatter: function (param) {

                            return param.data.value[2] + "‰"
                        },
                        position: 'right',
                        show: true,
                        color: "#FFD750",
                        width: 100,
                        height: 30,
                        borderColor: "#FFD750",
                        borderWidth: 1,
                        borderRadius: 5,
                        padding: 5
                    },
                    emphasis: {
                        show: true,
                        color: "#FFD750"
                    },

                },
                data: dealData,
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#318095',
                        borderColor: '#489099',
                    },
                    emphasis: {
                        areaColor: '#123841',
                        show: false
                    }
                }
            }]
        }
        thatYearRateChart.hideLoading()
        thatYearRateChart.setOption(option)
    })
}

/***
 *  常驻老龄人口死亡病因TOP5
 */
var diseaseTop5ChartData = {
    x: ["65-69", "70-74", "75-79", "80-84", "85-89", "90+"],
    y: [{
        name: "循环系统疾病",
        value: [5, 2, 5, 7, 5, 6]
    },
        {
            name: "呼吸系统疾病",
            value: [2, 5, 7, 5, 6, 5]
        },
        {
            name: "肿瘤",
            value: [7, 5, 6, 5, 2, 5]
        },
        {
            name: "损伤与中毒",
            value: [5, 7, 5, 6, 5, 2]
        },
        {
            name: "内分泌,营养和代谢疾病",
            value: [6, 5, 2, 5, 7, 5]
        }
    ]
}

function LoadDiseaseTop5Chart(obj) {
    var seriesArr = [],
        legendArr = [];
    obj.y.forEach(function (item) {
        var series = {
            "data": item.value,
            "name": item.name,
            "stack": "one",
            "type": "bar",
            barWidth: "60%"
        }
        seriesArr.push(series)
        legendArr.push(item.name)
    });
    var chart = echarts.init($("#diseaseTop5Chart")[0])
    var option = {
        "tooltip": {
            "trigger": "axis",
            formatter: function (params) {
                return params[0].name + "死亡人数:" + (params[0].value + params[1].value + params[2].value + params[3].value + params[4].value) + '万人<br>' +
                    params[0].seriesName + ":" + params[0].value + '万人<br>' +
                    params[1].seriesName + ":" + params[1].value + '万人<br>' +
                    params[2].seriesName + ":" + params[2].value + '万人<br>' +
                    params[3].seriesName + ":" + params[3].value + '万人<br>' +
                    params[4].seriesName + ":" + params[4].value + "万人"
            }
        },
        "color": ["#385ADD", "#0999AB", "#8145DC", "#D46935", "#D1922B"],
        "legend": {
            top: "0",

            "data": legendArr,
            "itemGap": 10,
            "itemWidth": 15,
            "itemHeight": 12,
            textStyle: {
                color: '#5FF2DF',
                fontSize: '16'
            }
        },
        "xAxis": [{
            "name": "年龄",
            "type": "category",
            // "axisTick": {
            //     "alignWithLabel": true
            // },
            nameTextStyle: {
                color: "#5891A2",

            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: "#5891A2"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#5891A2"
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed'
                }
            },
            "data": obj.x
        }],
        "yAxis": [{
            "type": "value",
            "name": "(万人)",
            axisLabel: {
                // formatter: function (p) {
                //     console.log("p",p)
                // },
                textStyle: {
                    color: '#5891A2'
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: "#5891A2"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#5891A2"
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed'
                }
            },
            interval: 10
        }],
        "series": seriesArr
    }
    chart.setOption(option)
}

/**
 *
 * 性别年龄 数据
 */
function loadAgeGenderChart(obj) {
    var agechart = echarts.init(document.getElementById('ageGenderChart'))
    var option = {
        color: ['#0999AB', '#385ADD', '#8145DC', '#E2212F', '#D46935', '#D1922B'],
        tooltip: {
            trigger: 'item',
            formatter: function (parms) {
                //console.log(parms)
                return parms.data.name + "：<br>" + parms.data.value + "%"
            }
        },
        legend: {
            orient: 'vertical',
            // left: '55%',,
            right: '0',

            align: 'left',
            top: 'middle',
            // bottom:"0",
            textStyle: {
                color: '#5FF2DF',
                fontSize: '16'
            },
            "itemGap": 20,
            "itemWidth": 30,
            "itemHeight": 20,
            data: obj,
        },
        series: [{
            name: '年龄结构',
            type: 'pie',
            center: ['40%', '50%'],
            radius: ['40%', '65%'],
            clockwise: false, // 饼图的扇区是否是顺时针排布
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                    position: 'inner',
                    formatter: function (parms) {
                        return parms.data.value + "%"
                    },
                }
            },
            data: obj
        }]
    }
    agechart.setOption(option)
}

var AgeGenderDescData = {
    male: "52.2%",
    female: "47.8%"
}

function setAgeGenderDesc(obj) {
    var htmlstr = '<div class="item">' +
        '<img src="../img/family/male.png" width="25px" height="53px" alt="男性">' +
        '<p>' + obj.male + '</p>' +
        '</div>' +
        '<div class="item">' +
        '<img src="../img/family/female.png" width="25px" height="53px" alt="男性">' +
        '<p>' + obj.female + '</p>' +
        '</div>'
    $(".ageGenderChart-desc").empty().html(htmlstr)
}

/***
 *  时间轴的切换来加载chart数据
 */
function setWarningDesc(obj) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
        var str = '<div class="item">' +
            '<div class="left-item">' + obj[i].name + '</div>' +
            '<div class="right-item">' + obj[i].value + '</div>' +
            '</div>'
        arr.push(str)
    }
    $("#llhrkgk").empty().html(arr.join(""))
}

function chartReLoad() {

    loadThatYearRateChart(areaData);
    setWarningDesc(warningDescData)
    LoadDiseaseTop5Chart(diseaseTop5ChartData)
    loadAgeGenderChart(data)
    setAgeGenderDesc(AgeGenderDescData)
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
        var str = '<li>'+arr[i]+'</li>';
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
