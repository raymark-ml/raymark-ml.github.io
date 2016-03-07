var tool_a = {
    topImg: '<a href="http://www.feitian001.com/" target="_blank"><img src="http://stats.chinaz.com/tool/37cs.gif"></a>', //顶部图片
    topTxt: function () {
        var html = "<ul><li><a href=\"http://www.danet.net.cn\" target=\"_blank\" class=\"col-blue\">海外服務器租用 - 台灣一強直銷</a></li>";
        html += "<li><a href=\"http://www.886966.com/\" target=\"_blank\" class=\"col-red\">关键词1天上前3/效果杠杠/可月租</a></li>";
        html += "<li><a href=\"http://www.chaojilian.net\" target=\"_blank\" class=\"col-blue\">新：外链代发,友情链接,网站备案</a></li>";
        html += "</ul>";
        html += "<ul><li><a href=\"http://www.ipjjj.cn/\" target=\"_blank\" class=\"col-red\">ip流量★百度排名★下拉推广</a></li>";
        html += "<li><a href=\"http://bbs.chinaz.com/thread-7954190-1-1.html\" target=\"_blank\" class=\"col-blue\">高薪招聘黑白帽seo（可兼职）</a></li>";
        html += "<li><a href=\"http://www.51qianniu.com/showProduct.php?articleid=13\" target=\"_blank\" class=\"col-red\">★★★ 关键词 baidu 前 3  ★★★</a></li>";
        html += "</ul>";
        return html;
    }, //顶部文字
    navAfter: function () {//导航下面
        var html = '<div class="fl mr10 ToolsOne"><a href="http://www.cleanetworks.com/" target="_blank"><img src="http://stats.chinaz.com/tool_img/cleanetworks.gif" width="215"></a></div>';
        html += '<div class="fl mr10 ToolsTwo"><a href="http://www.vip-121.com/" target="_blank"><img src="http://stats.chinaz.com/tool_img/vip-121.gif"></a></div>';
        html += '<div class="fl ToolsThree"><a href="http://ad.41.cn/yinlutong/?chztoolp" target="_blank"><img src="http://stats.chinaz.com/tool_img/41.gif" width="215"></a></div>';
        return html;
    },
    centerTxt: function () {//中间文字
        var html = "<div class=\"ToolsTxtWrap clearfix\">";
        html += "<ul class=\"ToolslistW\">";
        html += "<li><a href=\"https://item.taobao.com/item.htm?spm=a230r.1.14.233.6HosKQ&id=44246945222&ns=1&abbucket=4#detail\" target=\"_blank\" class=\"col-red\">50元300条,外链代发,锚文本</a></li>";
        html += "<li><a href=\"http://www.fwq.kr\" target=\"_blank\" class=\"col-blue\">[现机]香港韩国国内双线高防独服</a></li>";
        html += "<li><a href=\"http://www.shanghainb.com/services/brand.aspx\" target=\"_blank\" class=\"col-red\">发软文？这里比你想象的更便宜！</a></li></ul>";

        html += "<ul class=\"ToolslistW\">";
        html += "<li><a href=\"http://www.ipla.cc\" target=\"_blank\" class=\"col-blue\">流量提升3000独立ip只需1元</a></li>";
        html += "<li><a href=\"http://www.49idc.com/cdn/\" target=\"_blank\" class=\"col-red\">免备案CDN【无视DOS/CC攻击】</a></li>";
        html += "<li><a href=\"http://www.49idc.com\" target=\"_blank\" class=\"col-blue\">高防服务器【无视DDOS/CC攻击】</a></li></ul>";

        html += "<ul class=\"ToolslistW\">";
        html += "<li><a href=\"http://www.360jq.com/server.htm\" target=\"_blank\" class=\"col-red\">*【超级防御】【无视DDOS攻击】</a></li>";
        html += "<li><a href=\"http://www.hostspaces.net\" target=\"_blank\" class=\"col-blue\">HS无视CC/DDOS网络稳定免备案</a></li>";
        html += "<li><a href=\"https://item.taobao.com/item.htm?id=39560518262\" target=\"_blank\" class=\"col-red\">高防CDN★防DDOS/CC 包打不死★</a></li></ul>";

        html += "<ul class=\"ToolslistW\">";
        html += "<li><a href=\"http://www.wsisp.net/sale/20151209/?tool1\" target=\"_blank\" class=\"col-blue\">香港5M独立服务器  500元/月</a></li>";
        html += "<li><a href=\"http://www.jiankong2008.com/\" target=\"_blank\" class=\"col-red\">2016<百度快速排名>2天必上</a></li>";
        html += "<li><a href=\"http://www.357idc.com/\" target=\"_blank\" class=\"col-blue\">高防好机器，专治大攻击</a></li></ul>";

        html += "<ul class=\"ToolslistW\">";
        html += "<li><a href=\"http://www.80073.com\" target=\"_blank\" class=\"col-red\">迅速提升网站世界排名</a></li>";
        html += "<li><a href=\"http://www.nlidc.cn/server.html?pg=22\" target=\"_blank\" class=\"col-blue\">香港高端服务器/先试用/后付款</a></li>";
        html += "<li><a href=\"http://www.55dx.com/server.html\" target=\"_blank\" class=\"col-red\">香港稳定服务器/买一送一</a></p></ul>";

        html += "</div>";
        return html;
    },
    centerImg: function () {//中间图片
        var html = '<div class="ToolsImgWrap clearfix"> ';
        html += '<div class="fl mr10 ToolsFive"><a href="http://www.taoad.com/adm" target="_blank"><img src="http://stats.chinaz.com/tool_img/taoad.png"></a></div>';
        html += '<div class="fl mr10 ToolsFour"><a href="http://www.cn2la.com/" target="_blank"><img src="http://stats.chinaz.com/tool_img/cn2la.jpg"></a></div>';
        html += '<div class="fl ToolsFive"><a href="http://click.aliyun.com/m/3546/" target="_blank"><img src="http://stats.chinaz.com/tool_img/aliyundun.jpg"></a></div></div>';
        return html;
    },
    toolsIntro: '<a class="col-red pr15" target="_blank" href="http://www.jsll.me/">10000来路IP只需8元</a><a class="col-blue" target="_blank" href="http://icp.chinaz.com/provinces">全国各地区ICP备案查询</a>',
	t_mapbar:'',//首页
    init: function () {
        jQuery('#topImg').html(this.topImg);
        jQuery('#topTxt').html(this.topTxt());
        jQuery('#navAfter').html(this.navAfter());
        jQuery('#centerTxt').html(this.centerTxt());
        jQuery('#centerImg').html(this.centerImg());
        jQuery('#toolsIntro').html(this.toolsIntro);
		jQuery("#t_mapbar").append(this.t_mapbar);
    }
}
tool_a.init();
//当前位置
var loc_a = {
    type1: '<a href="http://ad.zanyun.cn" target=_blank><font color=red>香港弹性云 28元起/10M云服务器</font></a><a href="http://tool.chinaz.com/kwevaluate/" target="_blank">关键词优化分析</a>',
    type3: '<a href="http://www.ciku5.com" target="_blank" title="流量利器词库网"><font color=red>流量利器词库网</font></a><a href="http://tool.chinaz.com/kwevaluate/"><font color=red>关键词优化分析</font></a>',
    type4: '<a href="http://tool.chinaz.com/speedtest.aspx" target="_blank"><font color=red>网站测速</font></a><a href="http://tool.chinaz.com/kwevaluate"><font color=red>关键词优化难易分析</font></a>',
    init: function () {
        var loc = $("#loc");
        var tNum = $("#tnum").attr("n");
        if (!loc) return;
        switch (tNum) {
            case "1":
                loc.html(this.type1);
                break;
            case "3":
                loc.html(this.type3);
                break;
            case "4":
                loc.html(this.type4);
                break;
            default:
                loc.html(this.type1);
                break;
        }
    }
}
loc_a.init();