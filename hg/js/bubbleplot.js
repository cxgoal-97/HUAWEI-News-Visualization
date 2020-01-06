

function bubble_plot(key_word, data){
    const width = 400
    const height = 860
    console.log(height)
    $("#bubblemap").attr("width", width)
    $("#bubblemap").attr("height", height)
    var aim_min = 2;
    var aim_max = 40;

    //展示微博数量，点赞，评论，转发 (总数)
    //var key_word = "微博数量"
    var pos_word = "积极"+key_word;
    var neg_word = "消极"+key_word;

    //画图
    data.then(function(d){
        var key_array = d.map(x=>x[key_word])
        var max_value = d3.max(key_array);
        var min_value = d3.min(key_array);

        //设置比例尺
        //半径比例尺
        var scale = d3.scaleLinear().domain([min_value, max_value]).range([aim_min, aim_max])
        //气泡颜色插值比例尺
        var color_scale = d3.interpolate(d3.rgb(0,0,0), d3.rgb(255,0,0))
        
        d3.select("#bubblemap").selectAll("svg").remove()
        var svg = d3.select("#bubblemap").append("svg")
        svg .attr("width", width)
            .attr("height", height)

        //declare layout
        const bubble = d3.pack()
            .size([width, height])
            .padding(2)
            .radius((d) => {
                return scale(d.data[key_word])
            })


        const root = d3.hierarchy({children: d})
        bubble(root);
        const node = svg.selectAll('.node')
            .data(root.children)
            .enter()
            .append('g')
            .attr('class', "node")
            .attr("id", function(d, i){return i;})
            .style('transform', d => `translate(${d.x}px, ${d.y}px)`)
            .append("circle")
            .attr("r", (d) => d.r)
            .style("fill", function(d){
                if(key_word === "微博数"){
                    pos_word = "积极数"
                    neg_word = "消极数"
                }
                var positive_num = d.data[pos_word]
                var negative_num = d.data[neg_word]
                return color_scale(positive_num/(positive_num+negative_num))
            })
            .on("mousemove", function(d, i){
                var bubble_tip = d3.select("#bubble-tip")
                bubble_tip
                    .html(`用户:${d.data['用户ID']}<br>${pos_word}:${d.data[pos_word]}<br>${neg_word}:${d.data[neg_word]}`)
                    .style("left",(d3.event.pageX+20)+"px")//确定数据提示框
                    .style("top",(d3.event.pageY-20)+"px")
                    .style("opacity",1)
                    .style("background", "yellow")
            })
            .on("mouseout",function (dd,i) {
                var bubble_tip = d3.select("#bubble-tip")
                bubble_tip.html("")
                    .style("left",(-200)+"px")
                    .style("top",(-200)+"px")
                    .style("opacity",0.0)

            })
        

    })
}