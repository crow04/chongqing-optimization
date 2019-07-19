/**
 * 时间轴数据
 */
var arr = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
/// 前5名数据
var top5 = [{
        name: "四川省",
        value: "52.2",
    },
    {
        name: "贵州省",
        value: "10.4",
    },
    {
        name: "湖北省",
        value: "7.2",
    },
    {
        name: "湖南省",
        value: "5.1",
    },
    {
        name: "云南",
        value: "4.2",
    },
]
////  迁入迁出图
/***
 * 数据格式如下：
 * 数组里面前一个对象是迁移对象，后一个是目标地点
 *
 *
 */
var chinaDatas2 = [
    [{
        name: '重庆'
    },{
        name: '陕西',
        value: 82
    }],
    [{
        name: '重庆'
    },{
        name: '青海',
        value: 54
    }],
    [{
        name: '重庆'
    },{
        name: '西藏',
        value: 44
    }],
    [{
        name: '重庆'
    },{
        name: '四川',
        value: 33
    }],
    [{
        name: '重庆'
    },{
        name: '湖北',
        value: 78
    }],
    [{
        name: '重庆'
    },{
        name: '湖南',
        value: 33
    }],
    [{
        name: '重庆'
    },{
        name: '贵州',
        value: 44
    }],
    [{
        name: '重庆'
    },{
        name: '内蒙古',
        value: 44
    }]

]

/****
 *
 * 年龄占比,百分比数据返回的时候不需要带"%"
 */
var argeRateData = {
    x: [0, 10, 20, 30, 40, 50, 60, 70],
    y1: [20, 30, 70, 60, 42, 33, 12, 5],
    y2: [20, 30, 70, 60, 42, 33, 12, 5]
}
/**
 *
 *  文化成都数据：
 */
var educationData = [{
        name: "研究生及以上",
        value: "1.2%"
    },
    {
        name: "本科",
        value: "8.2%"
    },
    {
        name: "大专",
        value: "10.8%"
    },
    {
        name: "中专/职高",
        value: "12.2%"
    },
    {
        name: "高中",
        value: "16.6%"
    },
    {
        name: "初中",
        value: "40.6%"
    },
    {
        name: "小学",
        value: "9.6%"
    },
    {
        name: "未知",
        value: "6%"
    },
]

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
        changeQuarter() //rateChart

    })
    $(".timeline").find("li").eq(0).trigger("click")
}

/// 设置前五名数据
function setTopFiveMeg(obj) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
        var str = `<div class="data-screen-content-cell" style="padding:20px 0">
       <div class="data-screen-key">
               <span class="data-screen-key-icon" style="opacity:${1 - i / 10 * 2};">${i + 1}</span>
           <span>${obj[i].name}</span>
       </div>
       <div class="data-screen-value">
       ${obj[i].value}万人
       </div>
   </div>`
        arr.push(str)
    }
    $(".top5").empty().html(arr.join(""))
}

/***
 *   迁徙表
 * @param data
 */

function loadMigrationChinaChart(data) {

    var migrationChinaChart = echarts.init(document.getElementById('migrationChinaChart'))
    migrationChinaChart.showLoading()
    $.getJSON('../json/china.json', function (json) {
        echarts.registerMap('china', json)
        var chinaGeoCoordMap = {
            '黑龙江': [127.9688, 45.368],
            '内蒙古': [110.3467, 41.4899],
            "吉林": [125.8154, 44.2584],
            '北京市': [116.4551, 40.2539],
            "辽宁": [123.1238, 42.1216],
            "河北": [114.4995, 38.1006],
            "天津": [117.4219, 39.4189],
            "山西": [112.3352, 37.9413],
            "陕西": [109.1162, 34.2004],
            "甘肃": [103.5901, 36.3043],
            "宁夏": [106.3586, 38.1775],
            "青海": [101.4038, 36.8207],
            "新疆": [87.9236, 43.5883],
            "西藏": [91.11, 29.97],
            "四川": [103.9526, 30.7617],
            "重庆": [108.384366, 30.439702],
            "山东": [117.1582, 36.8701],
            "河南": [113.4668, 34.6234],
            "江苏": [118.8062, 31.9208],
            "安徽": [117.29, 32.0581],
            "湖北": [114.3896, 30.6628],
            "浙江": [119.5313, 29.8773],
            "福建": [119.4543, 25.9222],
            "江西": [116.0046, 28.6633],
            "湖南": [113.0823, 28.2568],
            "贵州": [106.6992, 26.7682],
            "云南": [102.9199, 25.4663],
            "广东": [113.12244, 23.009505],
            "广西": [108.479, 23.1152],
            "海南": [110.3893, 19.8516],
            '上海': [121.4648, 31.2891]
        };


        var convertData = function (data) {

            var res = [];
            for (var i = 0; i < data.length; i++) {

                var dataItem = data[i];
                // console.log(dataItem)
                var fromCoord = chinaGeoCoordMap[dataItem[0].name];
                var toCoord = chinaGeoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord],
                        value: dataItem[0].value || dataItem[1].value
                    });
                }
            }
            return res;

        };
        var series = [];
        [
            ['重庆', data]
        ].forEach(function (item, i) {
            // console.log(item)
            series.push({
                    "name": "连线",
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 6, //箭头指向速度，值越小速度越快
                        trailLength: 0.8, //特效尾迹长度[0,1]值越大，尾迹越长重
                        symbol: 'arrow', //箭头图标
                        symbolSize: 5, //图标大小
                        color: '#FF5902',

                    },
                    lineStyle: {
                        normal: {
                            color: "#FFD756",
                            width: 1, //尾迹线条宽度
                            opacity: 1, //尾迹线条透明度
                            curveness: .3 //尾迹线条曲直度

                        }
                    },
                    data: convertData(item[1])
                }, {
                    name: "出发点",
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: { //涟漪特效
                        period: 6, //动画时间，值越小速度越快
                        brushType: 'stroke', //波纹绘制方式 stroke, fill
                        scale: 4, //波纹圆环最大限制，值越大波纹越大
                        color: "#FFDA57"
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right', //显示位置
                            offset: [10, 0], //偏移设置
                            formatter: function (params) { //圆环显示文字
                                return params.data.name;
                            },
                            fontSize: 13,
                            color: "#48A09F"
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    symbol: 'circle',
                    symbolSize: function (val) {
                        console.log(val)
                        return val[2] / 5; //圆环大小
                    },
                    itemStyle: {
                        normal: {
                            show: false,
                            color: "#FFDA57"
                        }
                    },
                    data: item[1].map(function (dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: chinaGeoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    }),
                },
                //被攻击点
                {
                    name: "目的地",
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        period: 20,
                        brushType: 'stroke',
                        scale: 2,
                        color: "#FFA93D"
                    },

                    label: {
                        normal: {
                            show: true,
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
                    symbolSize: 10,
                    data: [{
                        name: item[0],
                        value: chinaGeoCoordMap[item[0]].concat([10]),
                    }],
                    formatter: "{b}"
                }
            );
        });

        var option = {
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(0, 0,0, 0.82)',
                showDelay: 0,
                hideDelay: 0,
                enterable: true,
                transitionDuration: 0,
                extraCssText: 'z-index:100',
                formatter: function (params, ticket, callback) {
                    //根据业务自己拓展要显示的内容
                    if (params.seriesType == "effectScatter") {
                        return params.data.name + "：" + params.data.value[2] + "万人";
                        // return "";
                    } else if (params.seriesType == "lines") {
                        return params.data.fromName + "迁移到" + params.data.toName + "<br />人口数:" + params.data.value + "万人";
                    } else {
                        return params.name;
                    }
                }
            },
            //backgroundColor: "#0E171F",
            geo: {
                map: 'china',
                zoom: 1.2,
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true, //是否允许缩放
                itemStyle: {
                    normal: {
                        areaColor: "#143841", //['#318095', '#254751', '#1F3D45'],
                        borderColor: '#489099',
                        borderWidth: 1
                    },
                    emphasis: {
                        color: '#254751' //悬浮背景
                    }
                },
                regions: [{
                    name: '重庆市',
                    itemStyle: {
                        areaColor: '#FFDA57'
                    }
                }],
                // center:[108.384366, 30.439702]
            },
            series: series
        };
        migrationChinaChart.hideLoading()
        migrationChinaChart.setOption(option)
        migrationChinaChart.on("click", function (a) {
            //  console.log("info", a)
        })
    })
}

/**
 *
 *  年龄占比
 *
 */
function loadMigrationAgeChart(obj) {
    var y2copy = obj.y2.slice()
    y2copy.sort(function (a, b) {

        return b - a
    })
    console.log("y2copy", y2copy)
    var chart = echarts.init($("#migrationAgeChart")[0])
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
                    params[0].value + ' 万人<br>' + params[1].seriesName + ' :' +
                    params[0].value + '% '

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
                    color: '#03B4E3'
                }
            },
            name: "年龄段",
            nameTextStyle: {
                color: "#03B4E3",

            },
            axisTick: {
                lineStyle: {
                    color: "#03B4E3"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#03B4E3"
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
                name: "(万人)",
                nameTextStyle: {
                    color: "#03B4E3"
                },
                yAxisIndex: 0,
                axisLabel: {
                    // formatter: function (p) {
                    //     console.log("p",p)
                    // },
                    textStyle: {
                        color: '#03B4E3'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: "#03B4E3"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "#03B4E3"
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            {
                type: 'value',
                scale: true,
                name: "百分比",
                min: y2copy[y2copy.length - 1], /////echart3.0 以上多个Y轴不会再自动计算刻度需要指明max,min,interval(间隔)
                max: y2copy[0],
                interval: Math.ceil(y2copy[0] / y2copy.length),
                nameTextStyle: {
                    color: "#03B4E3"
                },
                axisLabel: {
                    formatter: "{value} %",
                    textStyle: {
                        color: '#03B4E3'
                    }
                },
                yAxisIndex: 1,
                axisTick: {
                    lineStyle: {
                        color: "#03B4E3"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "#03B4E3"
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
        ],
        series: [{
                name: '占迁移人口比重',
                type: 'line',
                data: obj.y2,
                itemStyle: {
                    normal: {
                        color: '#FFDB6D'
                    }
                }
            },
            {
                name: '预测人口',
                type: 'bar',
                barWidth: '60%',
                data: obj.y1,
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
                }
            }
        ]
    };
    chart.setOption(option)
}
/***
 *  文化程度
 */
function setEducationRate(obj) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
        var str = ` <div class="education-rate-item">
        <div class="title">${obj[i].name}</div>
        <div class="progress-container">
            <div class="progress" style="width:${obj[i].value}"></div>
        </div>
        <div class="label">${obj[i].value}</div>
        </div>`
        arr.push(str)
    }
    $(".education-rate").empty().html(arr.join(""))
}
/**
 * 切换季度数据
 */
function changeQuarter() {
    $(".top-btn-group").off("click").on("click", ".change_date_btn", function () {
        $(this).siblings(".change_date_btn").removeClass("active")
        $(this).addClass('active')
        chartReLoad()
    })
    $(".top-btn-group").find('.change_date_btn').eq(0).trigger("click")
}
/**
 *  设置迁移人口值
 * 入参:字符串 比如 200
 */
function  setImmigrationTotal(str) {

    $("#immigrationTotal").empty().html(str+"万")
 }
/***
 *  时间轴的切换来加载chart数据

 */
function chartReLoad() {
    loadMigrationChinaChart(chinaDatas2)
    loadMigrationAgeChart(argeRateData)
    setTopFiveMeg(top5)
    setEducationRate(educationData)
    setImmigrationTotal("200")

}

$(function () {

    timelineHandle(arr)
})
