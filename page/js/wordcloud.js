function genCloud(file_path,anchorId,eId){
    var chart = echarts.init(document.getElementById(anchorId));
    $.getJSON("./data/word/worde"+eId+".json",function (data) {
        var option = {
            tooltip: {},
            series: [ {
                type: 'wordCloud',
                gridSize: 5,
                sizeRange: [12, 50],
                rotationRange: [-90, 90],
                shape: 'pentagon',
                width: 400,
                height: 400,
                drawOutOfBound: true,
                textStyle: {
                    normal: {
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: data
            } ]
        };
        for(let i=1;i<6;i++){
            $("#kw"+i+"_1").text(data[i-1].name).click(function () {
                var kname = $("#kw"+i+"_1").text();
                genHis("./data/kw/d-"+eId+"-"+i+".json","line",eId,kname);
            });
        }

        chart.setOption(option,true);
        window.onresize = chart.resize;
    });
}
function genHis(file_path,anchorId,eId,kwname){
    $.getJSON(file_path,function (data) {
        mapping = ["华为的2019年","孟晚舟事件","英国取消华为采购事件","华为被加入美实体清单事件","鸿蒙系统事件","IEEE除名华为事件","李洪元事件"];
        var chart = echarts.init(document.getElementById(anchorId));
        console.log(data);
        option = {
            title:{
                text:mapping[eId] + '期间，关键词"'+kwname+'"热度图'
            },
            legend: {
                top: '3%',
                data:[
                    {name:'积极指数',icon:'circle'},
                    {name:'消极指数',icon:'circle'},
                ]
            },
            tooltip: {
                trigger: 'axis'
            },
            dataset:{
                dimensions:["date","积极指数","消极指数"],
                source:data
            },
            dataZoom: [
                {
                    type: 'slider',
                    start: 0,
                    end: 100
                }
            ],
            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: {type: 'category'},
            yAxis: {type: 'value'},

            series: [
                {type: 'line'},
                {type: 'line'}
            ]
        };
        chart.setOption(option,true);
        window.onresize = chart.resize;
    });
}
function updateCloud(eId= 0){
    genCloud("","wordcloud",eId);
}