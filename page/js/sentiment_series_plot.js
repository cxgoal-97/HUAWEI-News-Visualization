function recursive(arr, left, right, keyword) {
    if(left > right)  return;
    let index = partition(arr, left, right, keyword);
    recursive(arr, left, index - 1, keyword);
    recursive(arr, index + 1, right, keyword);
    return arr;
}
function partition(arr, left, right, keyword) {
    // 取第一个数为基数
    let temp = arr[left];
    while(left < right) {
        while(left < right && parseFloat(arr[right][keyword]) < parseFloat(temp[keyword]))  right--;
        arr[left] = arr[right];
        while(left < right && parseFloat(arr[left][keyword]) >= parseFloat(temp[keyword]))  left++;
        arr[right] = arr[left];
    }
    // 修改基数的位置
    arr[left] = temp;
    return left;
}


function sentiment_series_plot(key_word, data){
    //展示微博数量，点赞，评论，转发 (总数)
    //var key_word = "微博数量"

    var pos_word = "积极"+key_word;
    var neg_word = "消极"+key_word;
    if(key_word == "微博数"){
        var pos_word = "积极数";
        var neg_word = "消极数";
    }
    //画图

    var myChart = echarts.init(document.getElementById('sentiment-series'));

    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    data.then(function(d){
        //根据关键词进行排序

        recursive(d, 0, d.length-1, key_word);

        //
        for (var i = 0; i < d.length; i++) {
            xAxisData.push(d[i]['用户ID']);
            data1.push(d[i][pos_word]);
            data2.push(d[i][neg_word]);
        }
        var option = {
        title: {
            text: '柱状图动画延迟'
        },
        legend: {
            data: ['积极', '消极']
        },
        toolbox: {
            // y: 'bottom',
            feature: {
                magicType: {
                    type: ['tiled', 'stack']
                },
                dataView: {},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        tooltip: {},
        xAxis: {
            data: xAxisData,
            splitLine: {
                show: false
            },
            axisLabel:{
            interval:0,
            rotate:30,
            }
        },
        yAxis: {
        },
        dataZoom:{
            realtime:true, //拖动滚动条时是否动态的更新图表数据
            height:25,//滚动条高度
            start:0,//滚动条开始位置（共100等份）
            end:1//结束位置（共100等份）
        },  
        series: [{
                name: '积极',
                type: 'bar',
                data: data1,
                animationDelay: function (idx) {
                    return idx * 10;
                    }
                }, 
            {
                name: '消极',
                type: 'bar',
                data: data2,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
            }
        };
        myChart.setOption(option);
    })
}