function fanruibo(){


    $(function () { $("[data-toggle='popover']").popover(); });

    option = {
       legend: {},
       tooltip: {},
       dataset: {
           source: []
       },
       xAxis: {type: 'category'},
       yAxis: {},
       dataZoom: [
        {   // 这个dataZoom组件，默认控制x轴。
           type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
           start: 10,      // 左边在 10% 的位置。
           end: 60         // 右边在 60% 的位置。
        }
       ],

       series: [
           {type: 'line'},
           {type: 'line'}
       ]
    };

    var width = window.innerWidth
    var height = window.innerHeight
    console.log(width);
    console.log(height);
    document.getElementById("fanruibo").style.width=width+"px";      //注意这里要打引号
    document.getElementById("fanruibo").style.height=height+"px";
    document.getElementById("fanruibo1").style.width=width+"px";      //注意这里要打引号
    document.getElementById("fanruibo1").style.height=height-100+"px";

    var pos_neg_chart = echarts.init(document.getElementById("fanruibo1"));
    pos_neg_chart.setOption(option);

    $.get('./data/pos-neg.json').done(function(data){
      var data = JSON.parse(data);
      console.log(data)
      // console.log(data.product)
	   pos_neg_chart.setOption({
        dataset: {
            dimensions: ['日期序号', '积极条数', '消极条数'],
            source: data
        },
       });

       $("#fanbutton-7").click(function(){
         pos_neg_chart.setOption({              
           legend: {
              data: ['积极条数', '消极条数']
           },
           dataset: {
              dimensions: ['日期序号', '积极条数', '消极条数'],
           },
         });
       });
       $("#fanbutton-8").click(function(){
        pos_neg_chart.setOption({
          legend: {
                data: ['积极评论', '消极评论']
          }, 
          dataset: {
             dimensions: ['日期序号', '积极评论', '消极评论'],
          },
        });
      });
      $("#fanbutton-9").click(function(){
        pos_neg_chart.setOption({
          
          dataset: {
             dimensions: ['日期序号', '积极赞', '消极赞'],
          },
        });
      });
      $("#fanbutton-10").click(function(){
        pos_neg_chart.setOption({
          
          dataset: {
             dimensions: ['日期序号', '积极转发', '消极转发'],
          },
        });
      });
    });
    

    $("#fanbutton-1").click(function(){
      console.log($("#fanbutton-1").css("color"))
      if($("#fanbutton-1").css("color") === "rgb(255, 255, 0)"){
        $("#fanbutton-1").css("color", "white")
      }else{
        $("#fanbutton-1").css("color", "yellow")
      }

      $.get('./data/pos-neg.json').done(function(data){
        var data = JSON.parse(data);
        option2 = {
            legend: {},
            tooltip: {},
            dataset: {
                // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
                // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射，参见后文。
                dimensions: ['日期序号', '积极条数', '消极条数'],
                source: data
            },
            xAxis: {type: 'category'},
            yAxis: {},
            dataZoom: [
             {   // 这个dataZoom组件，默认控制x轴。
                type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                start: 10,      // 左边在 10% 的位置。
                end: 60         // 右边在 60% 的位置。
             }
            ],
            series: [
                {type: 'line'},
                {type: 'line'}
            ]
        };
        pos_neg_chart.setOption(option2,true);
  		});
    });
    $("#fanbutton-2").click(function(){
      $.get('./data/posneg515830.json').done(function(data){
        var data = JSON.parse(data);
        option3 = {
            legend: {},
            tooltip: {},
            dataset: {
                dimensions: ['日期序号', '积极条数', '消极条数'],
                source: data
            },
            xAxis: {type: 'category'},
            yAxis: {},
            dataZoom: [
             {   // 这个dataZoom组件，默认控制x轴。
                type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                start: 10,      // 左边在 10% 的位置。
                end: 60         // 右边在 60% 的位置。
             }
            ],
            series: [
                {type: 'line'},
                {type: 'line'}
            ]
        };
        pos_neg_chart.setOption(option3,true);
      });
    });
    $("#fanbutton-3").click(function(){
        $.get('./data/posneg515830.json').done(function(data){
          var data = JSON.parse(data);
          option3 = {
              legend: {},
              tooltip: {},
              dataset: {
                  dimensions: ['日期序号', '积极条数', '消极条数'],
                  source: data
              },
              xAxis: {type: 'category'},
              yAxis: {},
              dataZoom: [
               {   // 这个dataZoom组件，默认控制x轴。
                  type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                  start: 10,      // 左边在 10% 的位置。
                  end: 60         // 右边在 60% 的位置。
               }
              ],
              series: [
                  {type: 'line'},
                  {type: 'line'}
              ]
          };
          pos_neg_chart.setOption(option3,true);
        });
      });
      $("#fanbutton-4").click(function(){
        $.get('./data/posneg515830.json').done(function(data){
          var data = JSON.parse(data);
          option3 = {
              legend: {},
              tooltip: {},
              dataset: {
                  dimensions: ['日期序号', '积极条数', '消极条数'],
                  source: data
              },
              xAxis: {type: 'category'},
              yAxis: {},
              dataZoom: [
               {   // 这个dataZoom组件，默认控制x轴。
                  type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                  start: 10,      // 左边在 10% 的位置。
                  end: 60         // 右边在 60% 的位置。
               }
              ],
              series: [
                  {type: 'line'},
                  {type: 'line'}
              ]
          };
          pos_neg_chart.setOption(option3,true);
        });
      });
      $("#fanbutton-5").click(function(){
        $.get('./data/posneg515830.json').done(function(data){
          var data = JSON.parse(data);
          option3 = {
              legend: {},
              tooltip: {},
              dataset: {
                  dimensions: ['日期序号', '积极条数', '消极条数'],
                  source: data
              },
              xAxis: {type: 'category'},
              yAxis: {},
              dataZoom: [
               {   // 这个dataZoom组件，默认控制x轴。
                  type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                  start: 10,      // 左边在 10% 的位置。
                  end: 60         // 右边在 60% 的位置。
               }
              ],
              series: [
                  {type: 'line'},
                  {type: 'line'}
              ]
          };
          pos_neg_chart.setOption(option3,true);
        });
      });
      $("#fanbutton-6").click(function(){
        $.get('./data/posneg515830.json').done(function(data){
          var data = JSON.parse(data);
          option3 = {
              legend: {},
              tooltip: {},
              dataset: {
                  dimensions: ['日期序号', '积极条数', '消极条数'],
                  source: data
              },
              xAxis: {type: 'category'},
              yAxis: {},
              dataZoom: [
               {   // 这个dataZoom组件，默认控制x轴。
                  type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                  start: 10,      // 左边在 10% 的位置。
                  end: 60         // 右边在 60% 的位置。
               }
              ],
              series: [
                  {type: 'line'},
                  {type: 'line'}
              ]
          };
          pos_neg_chart.setOption(option3,true);
        });
      });

}
