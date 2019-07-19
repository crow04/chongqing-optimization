/***
 *  authors:wanglong
 *  date:2019-06/27
 */
/**
 * 时间轴数据
 */
var arr=[2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]

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
/// 前5名数据
var top5=[
    {
        name:"武隆区",
        value:"6.48",
    },
    {
        name:"巫溪县",
        value:"4.89",
    },
    {
        name:"石柱县",
        value:"4.27",
    },
    {
        name:"大足区",
        value:"3.99",
    },
    {
        name:"南岸区",
        value:"3.92",
    },
]
//后五名数据
var bottom5=[
    {
        name:"潼南区",
        value:"0.19",
    },
    {
        name:"铜梁区",
        value:"0.25",
    },
    {
        name:"云阳县",
        value:"0.30",
    },
    {
        name:"綦江区",
        value:"0.37",
    },
    {
        name:"南川区",
        value:"0.43",
    },
]
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
        return b.value- a.value
    })
    $.getJSON('../json/chongqing.json', function (json) {
        echarts.registerMap('chongqing', json)
        var option = {
           // backgroundColor: '#0E171F',
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    //console.log(params)
                    return params.name + ' : '+"<br/>" +params.seriesName+' : '+ params.data.value[2]+'‰';
                }
            }, visualMap: {
                type: "continuous",
                show: true,
                textStyle: {
                    color: "#5891A2",
                    fontWeight: "400",
                    fontFamily: "MicrosoftYaHei",
                    fontSize: "12px"
                },
                min:data[data.length-1].value,
                max:data[0].value,
                right: '100',
                bottom: '80',
                text: ['自然增长率', ''], // 文本，默认为数值文本
                calculable: true,
                //seriesIndex: [1],
                inRange: {
                    color: ['#318095', '#254751', '#1F3D45'] // 黑紫黑

                },
                formatter: function (value) { //标签的格式化工具。
                    var str= parseFloat(value).toFixed(2)+"‰"
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
                name: "自然增长率",
                label: {
                    normal: {
                        formatter:function (param) {

                            return param.data.value[2]+"‰"
                         },
                        position: 'right',
                        show:true,
                        color:"#FFD750",
                        width:100,
                        height:30,
                        borderColor:"#FFD750",
                        borderWidth:1,
                        borderRadius:5,
                        padding:5
                    },
                    emphasis: {
                        show: true,
                        color:"#FFD750"
                    },

                },
                data: dealData,
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#318095',
                        borderColor: '#489099',
                    }
                    ,
                    emphasis: {
                        areaColor: '#123841',
                        show:false
                    }
                }
            }]
        }
        thatYearRateChart.hideLoading()
        thatYearRateChart.setOption(option)
    })
}
/***
 *  时间轴的切换来加载chart数据
 *
 *
 *
 */
function chartReLoad(){

    loadThatYearRateChart(areaData);
    setBottomFiveMeg(bottom5)
    setTopFiveMeg(top5)
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


/**
 * 设置死亡率最高五位
 * 入参格式：
 * [
    {
        name:"武隆区",
        value:"6.48",
    },
    {
        name:"巫溪县",
        value:"4.89",
    },
    {
        name:"石柱县",
        value:"4.27",
    },
    {
        name:"大足区",
        value:"3.99",
    },
    {
        name:"南岸区",
        value:"3.92",
    },
]
 */
function setTopFiveMeg(obj){
   var arr=[];
   console.log(obj)
   for(var i=0;i<obj.length;i++){
       var str=`<div class="data-screen-content-cell">
       <div class="data-screen-key">
               <span class="data-screen-key-icon" style="opacity:${1-i/10*2};">${i+1}</span>
           <span>${obj[i].name}</span>
       </div>
       <div class="data-screen-value">
       ${obj[i].value}‰
       </div>
   </div>`
   arr.push(str)
   }
   $(".top5").empty().html(arr.join(""))
}

 /**
 * 设置死亡率最低五位
 *
 */
function setBottomFiveMeg(obj){
    var arr=[];
    for(var i=0;i<obj.length;i++){
        var str=`<div class="data-screen-content-cell">
        <div class="data-screen-key">
                <span class="data-screen-key-icon" style="opacity:${1-i/10*2};">${i+1}</span>
            <span>${obj[i].name}</span>
        </div>
        <div class="data-screen-value">
        ${obj[i].value}‰
        </div>
    </div>`
    arr.push(str)
    }
    $(".bottom5").empty().html(arr.join(""))
 }
$(function () {
    loadFertilityChart(document.getElementById('fertilityChart'), obj,'总和出生率')
    loadGenderRateChart(document.getElementById('genderRateChart'), obj,'出生性别比')
    loadAgeingChart(document.getElementById('ageingChart'), obj,'人口老龄化')
    tabHandle()
    timelineHandle(arr)
})
