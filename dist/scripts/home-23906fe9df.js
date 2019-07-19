"use strict";var leftinfo={resident:34601,registered:3770,totalNatality:"1.39",newBornNum:"34.8",deathNum:"5.7",natality:"10.12",mortality:"1.66",natural:"8.46",HALE:"57.7",LE:"77.7"},rightinfo={totalNatality:"1.4",resident:1015.3,registered:1229.5,newBornNum:9.3,deathNum:"1.6",natality:"9.21‰",mortality:"1.60‰",natural:"7.61‰",HALE:"57.7",LE:"84.7"},areaData=[{name:"渝中区",value:12},{name:"万州区",value:412,selected:!0},{name:"涪陵区",value:98},{name:"大渡口区",value:236},{name:"江北区",value:4},{name:"璧山区",value:41},{name:"沙坪坝区",value:59},{name:"九龙坡区",value:69},{name:"南岸区",value:9},{name:"北碚区",value:56},{name:"綦江区",value:69},{name:"巫山县",value:59},{name:"大足区",value:39},{name:"渝北区",value:169},{name:"巴南区",value:269},{name:"黔江区",value:169},{name:"长寿区",value:9},{name:"江津区",value:59},{name:"合川区",value:29},{name:"永川区",value:69},{name:"南川区",value:59},{name:"铜梁区",value:9},{name:"潼南区",value:200},{name:"荣昌区",value:5},{name:"开州区",value:69},{name:"梁平区",value:9},{name:"武隆区",value:322},{name:"城口县",value:59},{name:"丰都县",value:59},{name:"垫江县",value:59},{name:"忠县",value:69},{name:"云阳县",value:9},{name:"奉节县",value:69},{name:"巫山县",value:32},{name:"巫溪县",value:30},{name:"石柱土家族自治县",value:15},{name:"秀山土家族苗族自治县",value:111},{name:"酉阳土家族苗族自治县",value:69},{name:"彭水苗族土家族自治县",value:369}];function setRightInfo(a){var e=a.totalNatality,t=a.resident,l=a.registered,n=a.newBornNum,m=a.deathNum,r=a.natality,s=a.mortality,u=a.natural,o=a.HALE,i=a.LE;$("#rzhsyl").html(e),$("#rczrk").html(t),$("#rhjrk").html(l),$("#rcsrk").html(n),$("#rswrk").html(m),$("#rsyl").html(r),$("#rswl").html(s),$("#rjkyqsm").html(o),$("#rzrzzl").html(u),$("#ryqsm").html(i)}function setLeftInfo(a){for(var e=[],t=[],l=a.resident.toString(),n=a.registered.toString(),m=0;m<l.length;m++){var r='<div class="num">'+l.charAt(m)+"</div>";e.push(r)}for(m=0;m<n.length;m++){var s='<div class="num">'+n.charAt(m)+"</div>";t.push(s)}var u=a.totalNatality+"<small> </small>",o=a.newBornNum+"<small>万</small>",i=a.deathNum+"<small>万</small>",v=a.natality+"<small>‰</small>",h=a.mortality+"<small>‰</small>",c=a.natural+"<small>‰</small>",d=a.HALE+"<small>岁</small>",g=a.LE+"<small>岁</small>";$(".resident .nums").html(e.join("")),$(".registered .nums").html(t.join("")),$("#zsyl").html(u),$("#xsrs").html(o),$("#swrs").html(i),$("#csl").html(v),$("#swl").html(h),$("#zrzzl").html(c),$("#jkyqsm").html(d),$("#yqsm").html(g)}function loadChart(t){var n={"渝中区":[106.56288,29.556742],"万州区":[108.380246,30.807807],"涪陵区":[107.394905,29.703652],"大渡口区":[106.48613,29.481002],"江北区":[106.532844,29.575352],"沙坪坝区":[106.4542,29.541224],"九龙坡区":[106.364269,29.428456],"南岸区":[106.560813,29.523992],"北碚区":[106.437868,29.82543],"綦江区":[106.651417,29.028091],"大足区":[105.715319,29.700498],"渝北区":[106.512851,29.601451],"巴南区":[106.519423,29.381919],"黔江区":[108.782577,29.527548],"长寿区":[107.074854,29.833671],"江津区":[106.253156,29.283387],"合川区":[106.265554,29.990993],"永川区":[105.894714,29.348748],"南川区":[107.098153,29.156646],"璧山区":[106.231126,29.593581],"铜梁区":[106.054948,29.839944],"潼南区":[105.841818,30.189554],"荣昌区":[105.594061,29.403627],"开州区":[108.413317,31.167735],"梁平区":[107.800034,30.672168],"武隆区":[107.75655,29.32376],"城口县":[108.6649,31.946293],"丰都县":[107.73248,29.866424],"垫江县":[107.348692,30.330012],"忠县":[108.037518,30.291537],"云阳县":[108.697698,30.930529],"奉节县":[109.465774,31.019967],"巫山县":[109.878928,31.074843],"巫溪县":[109.628912,31.3966],"石柱土家族自治县":[108.112448,29.99853],"秀山土家族苗族自治县":[108.996043,28.444772],"酉阳土家族苗族自治县":[108.767201,28.839828],"彭水苗族土家族自治县":[108.166551,29.293856]},l=function(a){for(var e=[],t=0;t<a.length;t++){var l=n[a[t].name];l&&e.push({name:a[t].name,value:l.concat(a[t].value),selected:a[t].selected})}return e}(t);t.sort(function(a,e){return e.value-a.value});var m=echarts.init(document.getElementById("graph"));m.showLoading(),$.getJSON("../json/chongqing.json",function(a){echarts.registerMap("chongqing",a);var e={tooltip:{trigger:"item",formatter:function(a){return a.name+" : <br/>"+a.seriesName+" : "+a.data.value[2]+"万人"}},visualMap:{type:"continuous",show:!0,textStyle:{color:"#5891A2",fontWeight:"400",fontFamily:"MicrosoftYaHei",fontSize:"12px"},right:"100",bottom:"80",text:["常驻人口",""],calculable:!0,min:t[t.length-1].value,max:t[0].value,inRange:{color:["#318095","#254751","#1F3D45"]},formatter:function(a){return 4<=a.length?Math.round(a/1e4)+"万人":Math.round(a)}},series:[{type:"map",map:"chongqing",name:"当年人口分布",label:{normal:{show:!1},emphasis:{show:!1}},data:l,roam:!0,itemStyle:{normal:{areaColor:"#318095",borderColor:"#489099"},emphasis:{areaColor:"#FFD750"}}}]};m.setOption(e),m.hideLoading(),m.on("click",function(a){"map"===a.seriesType&&(e.series.data=changeSelect(a.data.name,l),m.setOption(e))})})}function changeSelect(a,e){for(var t=0;t<e.length;t++)e[t].name==a?e[t].selected=!0:e[t].selected=!1;return e}$(function(){loadChart(areaData),setLeftInfo(leftinfo),setRightInfo(rightinfo)});