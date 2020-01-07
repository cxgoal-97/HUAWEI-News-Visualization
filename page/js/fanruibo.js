function fanruibo(){


    $(function () { $("[data-toggle='popover']").popover(); });

    option = {
       legend: {
         data: ['积极', '消极'],
          right: '40%',
          textStyle: {
            fontSize: 30,
          }
       },
       tooltip: {
         trigger: 'axis',
         show: true,
         borderColor: "#C3CBD6",
         extraCssText:' width:1000px; height:600px; white-space:pre-wrap;',
         formatter: function(datas)
          {
              // alert(JSON.stringify(datas));
              var res = datas[0].name + '<br/>', val;
              res += "积极微博： "
              res += datas[0].data['积极微博'].slice(0,150) + '<br/>';
              res += '<br/>';
              res += "消极微博： "
              res += datas[0].data['消极微博'].slice(0,150) + '<br/>';
              return res;
           },
           textStyle : {
               color: 'yellow',
               decoration: 'none',
               fontFamily: 'Verdana, sans-serif',
               fontSize: 32,
           }
       },
       dataset: {
           source: []
       },
       toolbox: {
           feature: {
               dataZoom: {
                   yAxisIndex: false
               },
               brush: {
                   type: ['lineX', 'clear']
               }
           }
       },
       xAxis: {type: 'category'},
       yAxis: {},
       dataZoom: [
        // 这个dataZoom组件，默认控制x轴。
           {
              type: 'inside',
              start: 0,
              end: 100
           },
           {
             type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
             start: 10,      // 左边在 10% 的位置。
             end: 60         // 右边在 60% 的位置。
           }
       ],

       series: [
           {
             name: '积极',
             type: 'line'
           },
           {
             name: '消极',
             type: 'line'
           }
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

    $.get('./data/posnegstatswithtext-0.json').done(function(data){
      console.log(typeof data);
      console.log(data)
      var data = typeof data == 'string' ? JSON.parse(data) : data;
      console.log(data)
      console.log(data.product)
	   pos_neg_chart.setOption({
        dataset: {
            dimensions: ['日期序号', '积极条数', '消极条数'],
            source: data
        },
       });

       $("#fanbutton-7").click(function(){
         pos_neg_chart.setOption({
           dataset: {
              dimensions: ['日期序号', '积极条数', '消极条数'],
           },
         });
         console.log(pos_neg_chart.getOption());
       });
       $("#fanbutton-8").click(function(){
        pos_neg_chart.setOption({
          dataset: {
             dimensions: ['日期序号', '积极评论', '消极评论'],
          },
        });
        console.log(pos_neg_chart.getOption());
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

////////////////////////////////////////////////////////////////
    $("#fanbutton-1").click(function(){                             //孟晚舟事件
      var flag = 0;
      var data_path = [];
      for(var i=1; i<7; i++){
        if("#fanbutton-"+i !== "#fanbutton-1"){
          $("#fanbutton-"+i).css("color", "rgb(255, 255, 255)")
        }
      }
      console.log($("#fanbutton-1").css("color"));
      if($("#fanbutton-1").css("color") === "rgb(255, 255, 255)"){
         $("#fanbutton-1").css("color", "rgb(17, 236, 52)");
         data_path =  './data/posnegstatswithtext-1.json';          //1-孟
      }
      if($("#fanbutton-1").css("color") === "rgb(17, 236, 52)"){
         $("#fanbutton-1").css("color", "rgb(255, 255, 255)");
         data_path =  './data/posnegstatswithtext-0.json';          //整体
      }

      $.get(data_path).done(function(data){
        // console.log(data)
        var data = JSON.parse(data);
        console.log(data[0]['中性条数']);
        option2 = {
          legend: {
             data: ['积极', '消极'],
             right: '40%',
             textStyle: {
               fontSize: 30,
             }
          },
            tooltip: {
              trigger: 'axis',
              show: true,
              borderColor: "#C3CBD6",
	            extraCssText:' width:1000px; height:600px; white-space:pre-wrap;',
              formatter: function(datas)
               {
                   // alert(JSON.stringify(datas));
                   var res = datas[0].name + '<br/>', val;
                   res += "积极微博： "
                   res += datas[0].data['积极微博'].slice(0,150) + '<br/>';
                   res += '<br/>';
                   res += "消极微博： "
                   res += datas[0].data['消极微博'].slice(0,150) + '<br/>';
                   return res;
                },
                textStyle : {
                    color: 'yellow',
                    decoration: 'none',
                    fontFamily: 'Verdana, sans-serif',
                    fontSize: 32,
                }

            },
            dataset: {
                dimensions: ['日期序号', '积极条数', '消极条数'],
                source: data
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: false
                    },
                    brush: {
                        type: ['lineX', 'clear']
                    }
                }
            },
            xAxis: {type: 'category'},
            yAxis: {},
            dataZoom: [
              {
                  type: 'inside',
                  start: 0,
                  end: 100
              },
             {   // 这个dataZoom组件，默认控制x轴。
                type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                start: 10,      // 左边在 10% 的位置。
                end: 60         // 右边在 60% 的位置。
             }
            ],
            series: [
              {
                name: '积极',
                type: 'line'
              },
              {
                name: '消极',
                type: 'line'
              }
            ]
        };
        pos_neg_chart.setOption(option2,true);
  		});
    });
////////////////////////////////////////////////////////////////////////////////////
$("#fanbutton-2").click(function(){                             //孟晚舟事件
  var flag = 0;
  var data_path = [];
  for(var i=1; i<7; i++){
    if("#fanbutton-"+i !== "#fanbutton-2"){
      $("#fanbutton-"+i).css("color", "rgb(255, 255, 255)")
    }
  }
  console.log($("#fanbutton-2").css("color"));
  if($("#fanbutton-2").css("color") === "rgb(255, 255, 255)"){
     $("#fanbutton-2").css("color", "rgb(17, 236, 52)");
     data_path =  './data/posnegstatswithtext-2.json';          //1-孟
  }
  if($("#fanbutton-2").css("color") === "rgb(17, 236, 52)"){
     $("#fanbutton-2").css("color", "rgb(255, 255, 255)");
     data_path =  './data/posnegstatswithtext-0.json';          //整体
  }

  $.get(data_path).done(function(data){
    // console.log(data)
    var data = JSON.parse(data);
    console.log(data[0]['中性条数']);
    option2 = {
      legend: {
        data: ['积极', '消极'],
         right: '40%',
         textStyle: {
           fontSize: 30,
         }
      },
        tooltip: {
          trigger: 'axis',
          show: true,
          borderColor: "#C3CBD6",
          extraCssText:' width:1000px; height:600px; white-space:pre-wrap;',
          formatter: function(datas)
           {
               // alert(JSON.stringify(datas));
               var res = datas[0].name + '<br/>', val;
               res += "积极微博： "
               res += datas[0].data['积极微博'].slice(0,150) + '<br/>';
               res += '<br/>';
               res += "消极微博： "
               res += datas[0].data['消极微博'].slice(0,150) + '<br/>';
               return res;
            },
            textStyle : {
                color: 'yellow',
                decoration: 'none',
                fontFamily: 'Verdana, sans-serif',
                fontSize: 32,
            }

        },
        dataset: {
            dimensions: ['日期序号', '积极条数', '消极条数'],
            source: data
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: false
                },
                brush: {
                    type: ['lineX', 'clear']
                }
            }
        },
        xAxis: {type: 'category'},
        yAxis: {},
        dataZoom: [
          {
              type: 'inside',
              start: 0,
              end: 100
          },
         {   // 这个dataZoom组件，默认控制x轴。
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 10,      // 左边在 10% 的位置。
            end: 60         // 右边在 60% 的位置。
         }
        ],
        series: [
          {
            name: '积极',
            type: 'line'
          },
          {
            name: '消极',
            type: 'line'
          }
        ]
    };
    pos_neg_chart.setOption(option2,true);
  });
});
///////////////////////////////////////////////////////////////////////////////
$("#fanbutton-3").click(function(){                             //孟晚舟事件
  var flag = 0;
  var data_path = [];
  for(var i=1; i<7; i++){
    if("#fanbutton-"+i !== "#fanbutton-3"){
      $("#fanbutton-"+i).css("color", "rgb(255, 255, 255)")
    }
  }
  console.log($("#fanbutton-3").css("color"));
  if($("#fanbutton-3").css("color") === "rgb(255, 255, 255)"){
     $("#fanbutton-3").css("color", "rgb(17, 236, 52)");
     data_path =  './data/posnegstatswithtext-3.json';          //1-孟
  }
  if($("#fanbutton-3").css("color") === "rgb(17, 236, 52)"){
     $("#fanbutton-3").css("color", "rgb(255, 255, 255)");
     data_path =  './data/posnegstatswithtext-0.json';          //整体
  }

  $.get(data_path).done(function(data){
    // console.log(data)
    var data = JSON.parse(data);
    console.log(data[0]['中性条数']);
    option2 = {
      legend: {
         data: ['积极', '消极'],
         right: '40%',
         textStyle: {
           fontSize: 30,
         }
      },
        tooltip: {
          trigger: 'axis',
          show: true,
          borderColor: "#C3CBD6",
          extraCssText:' width:1000px; height:600px; white-space:pre-wrap;',
          formatter: function(datas)
           {
               // alert(JSON.stringify(datas));
               var res = datas[0].name + '<br/>', val;
               res += "积极微博： "
               res += datas[0].data['积极微博'].slice(0,150) + '<br/>';
               res += '<br/>';
               res += "消极微博： "
               res += datas[0].data['消极微博'].slice(0,150) + '<br/>';
               return res;
            },
            textStyle : {
                color: 'yellow',
                decoration: 'none',
                fontFamily: 'Verdana, sans-serif',
                fontSize: 32,
            }

        },
        dataset: {
            dimensions: ['日期序号', '积极条数', '消极条数'],
            source: data
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: false
                },
                brush: {
                    type: ['lineX', 'clear']
                }
            }
        },
        xAxis: {type: 'category'},
        yAxis: {},
        dataZoom: [
          {
              type: 'inside',
              start: 0,
              end: 100
          },
         {   // 这个dataZoom组件，默认控制x轴。
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 10,      // 左边在 10% 的位置。
            end: 60         // 右边在 60% 的位置。
         }
        ],
        series: [
          {
            name: '积极',
            type: 'line'
          },
          {
            name: '消极',
            type: 'line'
          }
        ]
    };
    pos_neg_chart.setOption(option2,true);
  });
});
///////////////////////////////////////////////////////////////////////////////
$("#fanbutton-4").click(function(){                             //孟晚舟事件
  var flag = 0;
  var data_path = [];
  for(var i=1; i<7; i++){
    if("#fanbutton-"+i !== "#fanbutton-4"){
      $("#fanbutton-"+i).css("color", "rgb(255, 255, 255)")
    }
  }
  console.log($("#fanbutton-4").css("color"));
  if($("#fanbutton-4").css("color") === "rgb(255, 255, 255)"){
     $("#fanbutton-4").css("color", "rgb(17, 236, 52)");
     data_path =  './data/posnegstatswithtext-4.json';          //1-孟
  }
  if($("#fanbutton-4").css("color") === "rgb(17, 236, 52)"){
     $("#fanbutton-4").css("color", "rgb(255, 255, 255)");
     data_path =  './data/posnegstatswithtext-0.json';          //整体
  }

  $.get(data_path).done(function(data){
    // console.log(data)
    var data = JSON.parse(data);
    console.log(data[0]['中性条数']);
    option2 = {
      legend: {
         data: ['积极', '消极'],
         right: '40%',
         textStyle: {
           fontSize: 30,
         }
      },
        tooltip: {
          trigger: 'axis',
          show: true,
          borderColor: "#C3CBD6",
          extraCssText:' width:1000px; height:600px; white-space:pre-wrap;',
          formatter: function(datas)
           {
               // alert(JSON.stringify(datas));
               var res = datas[0].name + '<br/>', val;
               res += "积极微博： "
               res += datas[0].data['积极微博'].slice(0,150) + '<br/>';
               res += '<br/>';
               res += "消极微博： "
               res += datas[0].data['消极微博'].slice(0,150) + '<br/>';
               return res;
            },
            textStyle : {
                color: 'yellow',
                decoration: 'none',
                fontFamily: 'Verdana, sans-serif',
                fontSize: 32,
            }

        },
        dataset: {
            dimensions: ['日期序号', '积极条数', '消极条数'],
            source: data
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: false
                },
                brush: {
                    type: ['lineX', 'clear']
                }
            }
        },
        xAxis: {type: 'category'},
        yAxis: {},
        dataZoom: [
          {
              type: 'inside',
              start: 0,
              end: 100
          },
         {   // 这个dataZoom组件，默认控制x轴。
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 10,      // 左边在 10% 的位置。
            end: 60         // 右边在 60% 的位置。
         }
        ],
        series: [
          {
            name: '积极',
            type: 'line'
          },
          {
            name: '消极',
            type: 'line'
          }
        ]
    };
    pos_neg_chart.setOption(option2,true);
  });
});
//////////////////////////////////////////////////////////////////////////////////////
$("#fanbutton-5").click(function(){                             //孟晚舟事件
  var flag = 0;
  var data_path = [];
  for(var i=1; i<7; i++){
    if("#fanbutton-"+i !== "#fanbutton-5"){
      $("#fanbutton-"+i).css("color", "rgb(255, 255, 255)")
    }
  }
  console.log($("#fanbutton-5").css("color"));
  if($("#fanbutton-5").css("color") === "rgb(255, 255, 255)"){
     $("#fanbutton-5").css("color", "rgb(17, 236, 52)");
     data_path =  './data/posnegstatswithtext-5.json';          //1-孟
  }
  if($("#fanbutton-5").css("color") === "rgb(17, 236, 52)"){
     $("#fanbutton-5").css("color", "rgb(255, 255, 255)");
     data_path =  './data/posnegstatswithtext-0.json';          //整体
  }

  $.get(data_path).done(function(data){
    // console.log(data)
    var data = JSON.parse(data);
    console.log(data[0]['中性条数']);
    option2 = {
      legend: {
        data: ['积极', '消极'],
         right: '40%',
         textStyle: {
           fontSize: 30,
         }
      },
        tooltip: {
          trigger: 'axis',
          show: true,
          borderColor: "#C3CBD6",
          extraCssText:' width:1000px; height:600px; white-space:pre-wrap;',
          formatter: function(datas)
           {
               // alert(JSON.stringify(datas));
               var res = datas[0].name + '<br/>', val;
               res += "积极微博： "
               res += datas[0].data['积极微博'].slice(0,150) + '<br/>';
               res += '<br/>';
               res += "消极微博： "
               res += datas[0].data['消极微博'].slice(0,150) + '<br/>';
               return res;
            },
            textStyle : {
                color: 'yellow',
                decoration: 'none',
                fontFamily: 'Verdana, sans-serif',
                fontSize: 32,
            }

        },
        dataset: {
            dimensions: ['日期序号', '积极条数', '消极条数'],
            source: data
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: false
                },
                brush: {
                    type: ['lineX', 'clear']
                }
            }
        },
        xAxis: {type: 'category'},
        yAxis: {},
        dataZoom: [
          {
              type: 'inside',
              start: 0,
              end: 100
          },
         {   // 这个dataZoom组件，默认控制x轴。
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 10,      // 左边在 10% 的位置。
            end: 60         // 右边在 60% 的位置。
         }
        ],
        series: [
          {
            name: '积极',
            type: 'line'
          },
          {
            name: '消极',
            type: 'line'
          }
        ]
    };
    pos_neg_chart.setOption(option2,true);
  });
});
////////////////////////////////////////////////////////////////////////////
$("#fanbutton-6").click(function(){                             //孟晚舟事件
  var flag = 0;
  var data_path = [];
  for(var i=1; i<7; i++){
    if("#fanbutton-"+i !== "#fanbutton-6"){
      $("#fanbutton-"+i).css("color", "rgb(255, 255, 255)")
    }
  }
  console.log($("#fanbutton-6").css("color"));
  if($("#fanbutton-6").css("color") === "rgb(255, 255, 255)"){
     $("#fanbutton-6").css("color", "rgb(17, 236, 52)");
     data_path =  './data/posnegstatswithtext-6.json';          //1-孟
  }
  if($("#fanbutton-6").css("color") === "rgb(17, 236, 52)"){
     $("#fanbutton-6").css("color", "rgb(255, 255, 255)");
     data_path =  './data/posnegstatswithtext-0.json';          //整体
  }

  $.get(data_path).done(function(data){
    // console.log(data)
    var data = JSON.parse(data);
    console.log(data[0]['中性条数']);
    option2 = {
      legend: {
        data: ['积极', '消极'],
         right: '40%',
         textStyle: {
            fontSize: 30,
         }
      },
        tooltip: {
          trigger: 'axis',
          show: true,
          borderColor: "#C3CBD6",
          extraCssText:' width:1000px; height:600px; white-space:pre-wrap;',
          formatter: function(datas)
           {
               // alert(JSON.stringify(datas));
               var res = datas[0].name + '<br/>', val;
               res += "积极微博： "
               res += datas[0].data['积极微博'].slice(0,150) + '<br/>';
               res += '<br/>';
               res += "消极微博： "
               res += datas[0].data['消极微博'].slice(0,150) + '<br/>';
               return res;
            },
            textStyle : {
                color: 'yellow',
                decoration: 'none',
                fontFamily: 'Verdana, sans-serif',
                fontSize: 32,
            }

        },
        dataset: {
            dimensions: ['日期序号', '积极条数', '消极条数'],
            source: data
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: false
                },
                brush: {
                    type: ['lineX', 'clear']
                }
            }
        },
        xAxis: {type: 'category'},
        yAxis: {},
        dataZoom: [
          {
              type: 'inside',
              start: 0,
              end: 100
          },
         {   // 这个dataZoom组件，默认控制x轴。
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 10,      // 左边在 10% 的位置。
            end: 60         // 右边在 60% 的位置。
         }
        ],
        series: [
          {
            name: '积极',
            type: 'line'
          },
          {
            name: '消极',
            type: 'line'
          }
        ]
    };
    pos_neg_chart.setOption(option2,true);
  });
});
}
