

function huangg(){
$(".btn.btn.btn-info.btn-xl").click(function(){
    var id=$(this).attr("id")
    //console.log("id"+id)
    id=id.slice(2)
    //console.log("id"+id)
    var date = [];
    var trans0=[];
    var trans1=[];
    var trans2=[];
    var comm0=[];
    var comm1=[];
    var comm2=[];
    var zan0=[];
    var zan1=[];
    var zan2=[];
    var baidu=[];
    var weibo=[];
    $.get('./data/4/'+id+'.csv').done(function(record){
        //console.log(record)
        record = record.split(/\n/);
            //第一行标题
        var title = record[0].split(",");
            //删除第一行
        //console.log("title"+title)
        record.shift();
        
        for (var i = 0; i < record.length; i++) {
            var t = record[i].split(",");
            //console.log("t:"+t[0])
            date.push(t[0])
            trans0.push(t[1])
            trans1.push(t[2])
            trans2.push(t[3])
            comm0.push(t[4])
            comm1.push(t[5])
            comm2.push(t[6])
            zan0.push(t[7])
            zan1.push(t[8])
            zan2.push(t[9])
            weibo.push(t[10])
        }
        //console.log("date:"+date)
        //console.log("date:"+date)
    var rllfx = echarts.init(document.getElementById("rllfx"));
        option = {
    title: {
        text: '六大华为相关关键词'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['消极转发', '中性转发', '积极转发', '消极评论', '中性评论', '积极评论','消极点赞', '中性点赞', '积极点赞']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        type: 'value'
    },dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    
    series: [
        {
            name: '消极转发',
            type: 'line',

            data: trans0
        },
        {
            name: '中性转发',
            type: 'line',

            data: trans1
        },
        {
            name: '积极转发',
            type: 'line',
 
            data: trans2
        },
        {
            name: '消极评论',
            type: 'line',

            data: comm0
        },
        {
            name: '中性评论',
            type: 'line',

            data: comm1
        },
        {
            name: '积极评论',
            type: 'line',

            data: comm2
        },
        {
            name: '消极点赞',
            type: 'line',

            data: zan0
        },
        {
            name: '中性点赞',
            type: 'line',

            data: zan1
        },
        {
            name: '积极点赞',
            type: 'line',

            data: zan2
        }
    ]
};
         rllfx.setOption(option);
    });
    $.get('./data/5/'+id+'.csv').done(function(record){
        //console.log(record)
        record = record.split(/\n/);
            //第一行标题
        var title = record[0].split(",");
            //删除第一行
        //console.log("title"+title)
        record.shift();
        
        for (var i = 0; i < record.length; i++) {
            var t = record[i].split(",");
            //console.log("t:"+t[0])
            baidu.push(t[4])
        }
        //console.log("date:"+date)
        //console.log("date:"+date)
    var rllfx2 = echarts.init(document.getElementById("rllfx2"));
        option = {
    title: {
        text: '六大华为相关关键词'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['微博', '百度']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        type: 'value'
    },dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    
    series: [
        {
            name: '微博',
            type: 'line',
            data: weibo
        },
        {
            name: '百度',
            type: 'line',
            data: baidu
        }
    ]
};
         rllfx2.setOption(option);
    });

    
        
  });
}
/*var dataset = "data/huawei.csv";
datax=[]
datay=[]
d3.csv(dataset)
.then(function(data) {
console.log(data);

data.forEach(function(d){
	console.log("d"+d)
	datax.push(d.date)
	datay.push(d.zan0)
    });

})
.catch(function(error){
        // handle error   
})
console.log(datax)
console.log(datay)
  function dayComment(url,chartId,xname, title) {

    var data = getStaticJsonData();
    manyLineChart(chartId, title, xname ,data.legendData, data.xAxisData, data.yAxisData, data.fromTime, data.toTime);
}


function manyLineChart( chartId, textname, xAxisName, legendData, xAxisData, yAxisData, fromTime, toTime ){
    var lineCount = legendData.length;	//折线的条数
    var seriesArray = [];
    //循环得到Y轴的数据
    for(var x=0; x<lineCount; x++){
        seriesArray[x] = {name:legendData[x],type:'line',data:yAxisData[x]};
    }
    
    var myChart = echarts.init(document.getElementById( chartId ));
    var option = {
            //color:['red', 'black', 'green', 'blue', 'orange'],
            color:["#ff7f50","#87cefa","#da70d6","#32cd32","#6495ed","#ff69b4","#ba55d3","#cd5c5c","#ffa500","#40e0d0",
                   "#1e90ff","#ff6347","#7b68ee", "#00fa9a","#ffd700","#6699FF","#ff6666","#3cb371","#b8860b","#30e0e0"],	//[数组]颜色，按照设置的循环
            title: {
                text: textname,
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
            },
            toolbox: {
                show : true,
                feature : {
                    magicType : {show: true, type: ['line', 'bar']},
                    dataView : {show: true},
                }
            },
            legend: {
                left: 'left',
                data: legendData,
                top:30,
            },
            calculable : true,
            dataZoom: [//给x轴设置滚动条  
                       {  
                           start:0,//默认为0  
                           end: 5,  
                           type: 'slider',  
                           show: true,  
                           xAxisIndex: [0],  
                           handleSize: 5,//滑动条的 左右2个滑动条的大小  
                           height: 8,//组件高度  
                           left: 50, //左边的距离  
                           right: 40,//右边的距离  
                           bottom: 26,//右边的距离  
                           handleColor: '#ddd',//h滑动图标的颜色  
                           realtime : true,
                           handleStyle: {  
                               borderColor: "#cacaca",  
                               borderWidth: "1",  
                               shadowBlur: 2,  
                               background: "#ddd",  
                               shadowColor: "#ddd",  
                           },  
                           fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{  
                               //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变  
                               //给第一个设置0，第四个设置1，就是垂直渐变  
                               offset: 0,  
                               color: '#1eb5e5'  
                           }, {  
                               offset: 1,  
                               color: '#5ccbb1'  
                           }]),  
                           backgroundColor: '#ddd',//两边未选中的滑动条区域的颜色  
                           showDataShadow: false,//是否显示数据阴影 默认auto  
                           showDetail: false,//即拖拽时候是否显示详细数值信息 默认true  
                           handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',  
                           filterMode: 'filter'
                       },  
                       //下面这个属性是里面拖到  
                        
                   ],
                    

            xAxis: {
                type: 'category',
                name: xAxisName,
                splitLine: {show: false},
                data: xAxisData,
            },
            yAxis: {
                type: 'value',
            },
            series: seriesArray
        };
    
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption( option );
};

//模拟AJax请求获取返回的json数据
function getStaticJsonData(){
    var data = '{"legendData":["A\\u6d88\\u8d39","B\\u6d88\\u8d39","C\\u6d88\\u8d39","D\\u6d88\\u8d39","E\\u6d88\\u8d39"],"xAxisData":["20180417","20180418","20180419","20180420","20180421","20180422","20180423","20180424","20180425","20180426","20180427","20180428","20180429","20180430","20180501","20180502","20180503","20180504","20180505","20180506","20180507","20180508","20180509","20180510","20180511","20180512","20180513","20180514","20180515","20180516","20180517","20180518","20180519","20180520","20180521","20180522","20180523","20180524","20180525","20180526","20180527","20180528","20180529","20180530","20180531","20180601","20180602","20180603","20180604","20180605","20180606"],"yAxisData":[["8786.00","8676.00","9112.00","8066.00","5664.00","3728.00","8708.00","8658.00","85442.00","8028.00","7786.00","7358.00","3654.00","3274.00","3052.00","7524.00","3466.00","8796.00","6136.00","3568.00","8202.00","8222.00","8198.00","8510.00","7728.00","5324.00","3922.00","8846.00","8210.00","8646.00","7986.00","8018.00","6142.00","3444.00","79578.00","7806.00","7552.00","7344.00","7800.00","4626.00","3724.00","7946.00","8034.00","7320.00","7830.00","1234.00","2345.00","6789.00","7890.00","1314.00","5201.00"],["2261.91","1846.33","2393.24","1820.55","377.57","224.30","2326.34","1900.70","2709.85","2442.71","2569.75","2677.25","130.00","68.00","36.00","1070.98","1863.58","1607.55","521.36","296.18","1715.53","2037.64","2444.29","2505.96","2790.07","864.44","558.53","2737.92","2543.09","2674.00","2951.14","3406.87","892.22","633.30","2124.54","2111.44","1825.25","1633.61","1479.48","789.10","327.23","2511.37","2009.50","1836.02","2661.11","2696.25","714.04","376.55","2082.04","1479.29","3385.61"],["2561.00","2691.00","2131.00","2583.00","1750.00","1001.00","2612.00","2356.00","2534.00","2771.00","2025.00","2190.00","1037.00","954.00","801.00","2386.00","2492.00","2934.00","1430.00","897.00","2507.00","2548.00","2363.00","2760.00","2476.00","1644.00","1030.00","2861.00","2853.00","2999.00","2269.00","2060.00","2201.00","987.00","2731.00","2723.00","2660.00","2762.00","2445.00","1319.00","9552.00","275.00","2846.00","2626.00","2598.00","2750.00","1968.00","1001.00","2390.00","2574.00","3097.00"],["3270.00","4266.00","6950.00","3264.00","3898.00","770.00","2856.00","4744.00","4876.00","4814.00","4028.00","3038.00","1024.00","1108.00","692.00","30136.00","3016.00","3892.00","2392.00","920.00","4042.00","3492.00","3466.00","5206.00","7908.00","3322.00","908.00","4184.00","4696.00","3654.00","4416.00","4564.00","4580.00","808.00","5826.00","4554.00","4588.00","4408.00","4200.00","2514.00","906.00","3338.00","3706.00","4320.00","4060.00","4008.00","2464.00","754.00","3912.00","5032.00","3834.00"],["5557.91","4970.56","4389.10","4966.10","4452.77","711.80","4139.45","4581.69","3089.34","4306.57","4909.15","1838.72","281.56","472.67","174.98","5130.81","7155.56","4844.09","1768.51","497.72","2902.13","3865.80","3651.81","5248.23","4780.90","2362.47","250.92","5030.40","3443.63","5095.00","4278.02","2877.35","2944.94","637.02","4507.43","3942.91","3507.04","3611.03","5200.38","2449.68","653.43","3543.92","4231.95","4644.98","4270.29","3314.63","2303.49","679.44","1173.68","6433.01","5827.75"]],"fromTime":"20180531","toTime":"20180606"}';
    data = eval('(' + data + ')');
    return data;
}

dayComment( 'Ajax请求路径', 'consume_many_line', '日期', '用户消费');*/