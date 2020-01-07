function get_num_data(file_name){
    var data = d3.csv(file_name);
    data = data.then(function(d, i){
        var num_key = ["微博数","转发数","评论数","点赞数","积极数","消极数","平均转发","平均评论","平均点赞","积极转发数","积极评论数","积极点赞数","消极转发数","消极评论数","消极点赞数"];
        for (item_index in d){
            for (key_index in num_key){
                d[item_index][num_key[key_index]] = parseFloat(d[item_index][num_key[key_index]])
            }
        }
        return d
    })
    return data
}

function get_posneg_data(file_name){
    var data = d3.csv(file_name);

    data = data.then(function(d, i){
        var num_key = ["微博数","转发数","评论数","点赞数","积极数","消极数","平均转发","平均评论","平均点赞","积极转发数","积极评论数","积极点赞数","消极转发数","消极评论数","消极点赞数"];
        for (item_index in d){
            for (key_index in num_key){
                d[item_index][num_key[key_index]] = parseFloat(d[item_index][num_key[key_index]])
            }
        }
        return d
    })
    return data
}
