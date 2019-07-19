/***
 *  authors:wanglong
 *  date:2019-06/27
 */
/**
 * 时间轴数据
 */
var arr=[2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
/// 年龄结构数据
var data = [{
        'name': '儿童(0<X<15岁)',
        'value': 100
    },
    {
        'name': '成人 (15岁≤X<65岁)',
        'value': 300
    },
    {
        'name': '老年人( 65岁≤X)',
        'value': 97
    }
]
///左侧指示图表数据
var obj = {
    xAxis: [1.12, 1.18, 1.10, 1.32, 1.36, 1.06, 0.92, 1.1, 0.88],
    yAxis: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    marklinValue: 2.1,
    max: 2.3

}
 // 各区县的数据，在这里填   有实际数据时候 删除这部分 重新调用方法
 var areaData = [{
    name: '渝中区',
    value: 12,

},
{
    name: '万州区',
    value: 412,
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
var agechart, fertilityChart,genderRateChart,ageingChart, pyramidChart

function loadageStructureChart(obj) {
    agechart = echarts.init(document.getElementById('ageStructureChart'))
    var option = {
        color: ['#C89340', '#4296A7', '#3A5BD5'],
        tooltip: {
            trigger: 'item',
            // formatter:function (parms){
            //     console.log(parms)
            //     //return  str
            // }
        },
        legend: {
            orient: 'vertical',
            left: '55%',
            align: 'left',
            top: 'middle',
            textStyle: {
                color: '#5891A2',
                fontSize: '16'
            },
            data: obj
        },
        series: [{
            name: '年龄结构',
            type: 'pie',
            center: ['35%', '50%'],
            radius: ['40%', '65%'],
            clockwise: false, // 饼图的扇区是否是顺时针排布
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: false,
                    position: 'outter',
                    formatter: function (parms) {
                        return parms.data.legendname
                    }
                }
            },
            data: obj
        }]
    }
    agechart.setOption(option)
}

function countRate(data) {
    var rateArr = [],
        total = 0
    for (var i of data) {
        total += i.value
    }
    for (var j of data) {
        var str = `<li>${Math.round((j.value/total)*100)}%</li>`
        rateArr.push(str)
    }
    $('.ageStructureRate').html(rateArr.join(''))
}

/**
 *  切换菜单 加载图表
 *
 */
function tabHandle() {
    $('.tab-title').on('click', function () {
        /***
         *
         * 写死的假数据实际使用时候删除调用后台数据即可
         */
        var ind = $(this).index()
        var text = $(this).text()
        $(this).siblings('.tab-title').removeClass('active')
        $(this).addClass('active')
        $('.tab-content').eq(ind).siblings('.tab-content').hide()
        $('.tab-content').eq(ind).show()

    })
    $('.tab-title').eq(0).trigger('click')
}
/**
 *  加载左侧的指示预警chart
 *  传入的数据 JSON格式：
 *         var obj = {
            xAxis: [1.12, 1.18, 1.10, 1.32, 1.36, 1.06, 0.92, 1.1, 0.88], /// X轴数据
            yAxis: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],/// Y轴数据
            marklinValue:2.1, //// 警戒线值
            max:2.3, ////  现实的的最大值

        }
 */
///总和出生率
function loadFertilityChart(el, obj,seriesName) {
    fertilityChart = echarts.init(el)
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: false
        },
        xAxis: [{
            type: 'value',
            axisTick: {
                show: true,
                inside: true,
                lineStyle: {
                    color: '#03B4E3'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#03B4E3'
                }
            },
            lineStyle: {
                color: '#03B4E3'
            },
            max: obj.max,
            splitLine: {
                show: false
            }

        }],
        yAxis: [{
            type: 'category',
            data: obj.yAxis,
            axisLabel: {
                textStyle: {
                    color: '#03B4E3'
                }

            },
            axisTick: {
                inside: true,
                lineStyle: {
                    color: '#03B4E3'
                }
            }

        }],
        series: [{
            name: seriesName,
            type: 'bar',
            barWidth: '40%',
            data: obj.xAxis,
            markLine: {
                symbol: 'none',
                data: [{
                    name: '更替水平线(2.1)',
                    xAxis: obj.marklinValue
                }],
                lineStyle: {
                    normal: {
                        color: '#FFD750'
                    },
                    emphasis: {
                        color: '#D75E00',
                        width: '2',
                        type: 'solid'
                    }
                }

            },
            itemStyle: {
                normal: {
                    color: '#3398DB'
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#FFD954' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#D75E00' // 100% 处的颜色
                    }], false)
                }
            }
        }]
    }
    fertilityChart.setOption(option)
}
// 出生性别比
function loadGenderRateChart(el, obj,seriesName) {
    genderRateChart = echarts.init(el)
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: false
        },
        xAxis: [{
            type: 'value',
            axisTick: {
                show: true,
                inside: true,
                lineStyle: {
                    color: '#03B4E3'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#03B4E3'
                }
            },
            lineStyle: {
                color: '#03B4E3'
            },
            max: obj.max,
            splitLine: {
                show: false
            }

        }],
        yAxis: [{
            type: 'category',
            data: obj.yAxis,
            axisLabel: {
                textStyle: {
                    color: '#03B4E3'
                }

            },
            axisTick: {
                inside: true,
                lineStyle: {
                    color: '#03B4E3'
                }
            }

        }],
        series: [{
            name: seriesName,
            type: 'bar',
            barWidth: '40%',
            data: obj.xAxis,
            markLine: {
                symbol: 'none',
                data: [{
                    name: '更替水平线(2.1)',
                    xAxis: obj.marklinValue
                }],
                lineStyle: {
                    normal: {
                        color: '#FFD750'
                    },
                    emphasis: {
                        color: '#D75E00',
                        width: '2',
                        type: 'solid'
                    }
                }

            },
            itemStyle: {
                normal: {
                    color: '#3398DB'
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#D75E00' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FFD954' // 100% 处的颜色
                    }], false)
                }
            }
        }]
    }
    genderRateChart.setOption(option)

}


// /人口老龄化
function loadAgeingChart(el, obj,seriesName) {
    ageingChart = echarts.init(el)
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: false
        },
        xAxis: [{
            type: 'value',
            axisTick: {
                show: true,
                inside: true,
                lineStyle: {
                    color: '#03B4E3'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#03B4E3'
                }
            },
            lineStyle: {
                color: '#03B4E3'
            },
            max: obj.max,
            splitLine: {
                show: false
            }

        }],
        yAxis: [{
            type: 'category',
            data: obj.yAxis,
            axisLabel: {
                textStyle: {
                    color: '#03B4E3'
                }

            },
            axisTick: {
                inside: true,
                lineStyle: {
                    color: '#03B4E3'
                }
            }

        }],
        series: [{
            name: seriesName,
            type: 'bar',
            barWidth: '40%',
            data: obj.xAxis,
            markLine: {
                symbol: 'none',
                data: [{
                    name: '更替水平线(2.1)',
                    xAxis: obj.marklinValue
                }],
                lineStyle: {
                    normal: {
                        color: '#FFD750'
                    },
                    emphasis: {
                        color: '#D75E00',
                        width: '2',
                        type: 'solid'
                    }
                }

            },
            itemStyle: {
                normal: {
                    color: '#3398DB'
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#FFD954' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#D75E00' // 100% 处的颜色
                    }], false)
                }
            }
        }]
    }
    ageingChart.setOption(option)
}
function getPyramidChartData() {
    var pyramidChartData = {
        male: [], // //男性各年龄段人数
        female: [], // //女性各年龄段人数
        ydata: ['0-5', '6-10', '11-15', '16-20', '21-25', '26-30', '31-35', '36-40', '41-45', '46-50', '51-55', '56-60', '61-65', '66-70', '71-75', '76-80', '81-85', '86-90', '91-95', '96-100', '100+'], // //纵坐标名称
    }
    for (var i = 0; i < pyramidChartData.ydata.length; i++) {
        var a = Math.round(Math.random() * 300)
        var b = Math.round(Math.random() * 300)
        pyramidChartData.male.push(a)
        pyramidChartData.female.push(b)
    }
    loadPyramidChart(pyramidChartData)
}
// / 冒泡排序
function arrSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
/***
 *
 * 人口金字塔  入参格式
 *   var pyramidChartData = {
    male: [], // //男性各年龄段人数
    female: [], // //女性各年龄段人数
    ydata: ['0-5', '6-10', '11-15', '16-20', '21-25', '26-30', '31-35', '36-40', '41-45', '46-50', '51-55', '56-60', '61-65', '66-70', '71-75', '76-80', '81-85', '86-90', '91-95', '96-100', '100+'], // //纵坐标名称
  }
 *
 *
 *
 */
function loadPyramidChart(obj) {
    // //// sort 会改变原数组
    var arr1 = obj.male.slice(),
        arr2 = obj.female.slice();
    var max1 = arrSort(arr1)[arr1.length - 1],
        max2 = arrSort(arr2)[arr2.length - 1];
    var maxlatest;
    if (max1 > max2) {
        maxlatest = max1
    } else {
        maxlatest = max2
    }
    obj.male = obj.male.map(function (i) {

        return -i
    })
    pyramidChart = echarts.init(document.getElementById('pyramidChart'))
    var option = {
        color: ['#4791D8', '#F269A0'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },

            formatter: function (params) {
                var str;
                if (params.length == 1 && params[0].value) {
                    str = "年龄段:" + params[0].name + "(岁)" +
                        '<br>' + params[0].seriesName + Math.abs(params[0].value) + "(万人)"
                } else if (params.length == 1 && params[1].value) {
                    "年龄段:" + params[1].name + "(岁)" +
                        '<br>' + params[1].seriesName + Math.abs(params[1].value) + "(万人)"
                } else {
                    str = "年龄段:" + params[0].name + "(岁)" +
                        '<br>' + params[0].seriesName + Math.abs(params[0].value) + "(万人)" +
                        '<br>' + params[1].seriesName + Math.abs(params[1].value) + "(万人)"
                }
                return str
            }
        },
        legend: {
            data: ['男性', '女性'],
            left: 'right',
            textStyle: {
                color: '#5891A2'
            },
            right: '20'

        },
        grid: {
            show: false
        },
        xAxis: [{
            type: 'value',
            max: maxlatest,
            axisTick: {
                show: false
            },

            axisLabel: {
                textStyle: {
                    color: '#5891A2'
                },
                formatter: function (a) {
                    return Math.abs(a)
                }
            },
            splitLine: {
                show: false
            },
            lineStyle: {
                color: '#5891A2'
            }
        }],
        yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            data: obj.ydata,
            axisTick: {
                show: false,
                inside: true,
                lineStyle: {
                    color: '#5891A2'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#5891A2'
                }

            },
            lineStyle: {
                color: '#5891A2'
            },
            left: '0'
        }],
        series: [

            {
                name: '男性',
                type: 'bar',
                barWidth: '60%',
                stack: '总量',
                label: {
                    normal: {
                        show: false
                    }
                },
                data: obj.male
            },
            {
                name: '女性',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        formatter: function (params) {
                            return params.value
                        }
                    }
                },
                data: obj.female
            }
        ]
    }
    pyramidChart.setOption(option)
}

/**  当年人口分布
 *  echart 方法
 *  数据格式demo:
 *
 *  // 各区县的数据，在这里填
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
 */
function loadThatYearDistributionChart(data) {

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
    // /潼南县  开县 綦江县  万盛区  双桥区
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
    var thatYearDistributionChart = echarts.init(document.getElementById('thatYearDistributionChart'))
    thatYearDistributionChart.showLoading()
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
                    return params.name + ' : '+"<br/>" +params.seriesName+' : '+ params.data.value[2]+'万人';;
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
                label:{
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                }
            },
            series: [{
                name: '人口总数',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: dealData,
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: dealData,

                itemStyle: {
                    normal: {
                        color: '#FBE102'
                    }
                }
            }]
        }
        thatYearDistributionChart.hideLoading()
        thatYearDistributionChart.setOption(option)
        thatYearDistributionChart.on("click", function (a) {
            console.log("info", a)
        })
    })
}
/***
 *  时间轴的切换来加载chart数据
 *
 *
 *
 */
function chartReLoad(){
    countRate(data)
    loadageStructureChart(data)
    getPyramidChartData()
    loadThatYearDistributionChart(areaData)
}
/****
 *
 *  时间轴
 * 数据格式数组：[2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
 *  和左边的总览数据同时取数据同时执行
 *
 */
function  timelineHandle(arr) {
    var htmlarr=[];
    for(var i=0;i<arr.length;i++){
        var str=`<li>${arr[i]}</li>`;
        htmlarr.push(str)
    }
    $(".timeline").html(htmlarr.join(""))
    $(".timeline").off("click","li").on("click","li",function () {
        $(this).siblings("li").removeClass("active")
        $(this).addClass('active');
        var name=$(this).text();
        chartReLoad()   //rateChart
        fertilityChart.dispatchAction({
            type: 'downplay',
            seriesName:"总和出生率"//["总和出生率","出生性别比","人口老龄化"]
        })
        fertilityChart.dispatchAction({
            type: 'highlight',
            name:name
        })
        genderRateChart.dispatchAction({
            type: 'downplay',
            seriesName:"出生性别比"//["总和出生率","出生性别比","人口老龄化"]
        })
        genderRateChart.dispatchAction({
            type: 'highlight',
            name:name
        })
        ageingChart.dispatchAction({
            type: 'downplay',
            seriesName:"人口老龄化"//["总和出生率","出生性别比","人口老龄化"]
        })
        ageingChart.dispatchAction({
            type: 'highlight',
            name:name
        })
    })
    $(".timeline").find("li").eq(0).trigger("click")
}
$(function () {
    loadFertilityChart(document.getElementById('fertilityChart'), obj,'总和出生率')
    loadGenderRateChart(document.getElementById('genderRateChart'), obj,'出生性别比')
    loadAgeingChart(document.getElementById('ageingChart'), obj,'人口老龄化')
    tabHandle()
    timelineHandle(arr)
})
