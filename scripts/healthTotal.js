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
 *  资源指标数据
 */
var indicatorsChartData = {
    x: ["门急诊就诊人次", "住院人次"],
    y: [16346, 2309]
}
/***
 *  资源指标数据
 */
var indicatorsDescData = [{
        name: "预计全市所需卫生机构数",
        value: "20947"
    },
    {
        name: "全市缺口占比",
        value: "5.1%"
    },
    {
        name: "全国缺口占比",
        value: "5.7%"
    },
    {
        name: "人均可支配收入",
        value: "23456元"
    },
]
/**
 * 资源预警描述数据
 */
var warningDescData=[
    {
        name: "门急诊就诊人次数（万人次）",
        value: "53"
    },
    {
        name: "区内所需卫生机构数（个）",
        value: "283"
    },
    {
        name: "区内缺口占比",
        value: "4.81%"
    }
]
/**
 * 时间轴数据
 */
var arr = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]

function loadHealthResourceChart(data) {

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
    var healthResourceChart = echarts.init(document.getElementById('healthResourceChart'))
    healthResourceChart.showLoading()
    data.sort(function (a, b) {
        return b.value - a.value
    })
    $.getJSON('../json/chongqing.json', function (json) {
        echarts.registerMap('chongqing', json)
        var option = {
            //  backgroundColor: '#0E171F',
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
                text: ['资源缺口占比', ''], // 文本，默认为数值文本
                calculable: true,
                //seriesIndex: [1],
                inRange: {
                    color: ['#318095', '#254751', '#1F3D45'] // 黑紫黑

                },
                formatter: function (value) { //标签的格式化工具。
                    var str = parseFloat(value).toFixed(2) + "‰"
                    return str; // 范围标签显示内容。
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
                name: "资源缺口占比",
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
        healthResourceChart.hideLoading()
        healthResourceChart.setOption(option)
    })
}


/**
 *  资源指标表格
 */
function LoadIndicatorsChart(obj) {
    var arr = obj.y.slice()
    arr.sort(function (a, b) {

        return b - a
    })
    var chart = echarts.init($("#indicatorsChart")[0])
    var option = {
        title: {
            //text: '孕妇年龄分布',
            //subtext: '抽样调查来自: Heinz  2003'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            showDelay: 0,
            formatter: function (params) {
                // console.log(params)

                return params[0].seriesName + ' :' +
                    params[0].value + ' 次<br>'

            },
            axisPointer: {
                show: false,
                type: 'cross',
                lineStyle: {
                    type: 'dashed',
                    width: 1
                }
            }
        },
        legend: {
            data: obj.label,
            left: 'center',
            textStyle: {
                color: '#5891A2',
                fontSize: '16'
            },
        },
        xAxis: [{
            type: 'category',
            scale: true,
            axisLabel: {
                //formatter: '{value} ',
                textStyle: {
                    color: '#5891A2'
                }
            },
            name: "年龄段",
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
            data: obj.x
        }],
        yAxis: [{
            type: 'value',
            scale: true,
            name: "人次",
            nameTextStyle: {
                color: "#03B4E3"
            },
            yAxisIndex: 0,
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
            interval: 10000
        }],
        series: [{
            name: '就诊人次',
            type: 'bar',
            barWidth: '10%',
            data: obj.y,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#2ABFF8' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#0294EE' // 100% 处的颜色
                    }], false)
                }
            },
            label: {
                show: true,
                color: "#5FC2F3",
                position: "top"
            }
        }]
    };
    chart.setOption(option)
}

/***
 *  资源指标描述部分设置
 */
function setIndicatorsDesc(obj) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
        var str = ` <div class="item">
        <div class="left-item">${obj[i].name}</div>
        <div class="right-item">${obj[i].value}</div>
    </div>`
    arr.push(str)
    }
    $("#zyzbms").empty().html(arr.join(""))
}
/***
 *  资源预警描述部分设置
 */
function setWarningDesc(obj) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
        var str = ` <div class="item">
        <div class="left-item">${obj[i].name}</div>
        <div class="right-item">${obj[i].value}</div>
    </div>`
    arr.push(str)
    }
    $("#zyyjms").empty().html(arr.join(""))
}
/***
 *  时间轴的切换来加载chart数据
 *
 *
 *
 */
function chartReLoad() {

    loadHealthResourceChart(areaData);
    LoadIndicatorsChart(indicatorsChartData)
    setIndicatorsDesc(indicatorsDescData)
    setWarningDesc(warningDescData)
}

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
