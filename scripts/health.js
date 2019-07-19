/***
 *  authors:wanglong
 *  date:2019-06/27
 */

/**
 *  人口概况 底部菜单导航
 */
function profileMenuLoad(){
    var menus=config.healthMenu;
    var htmlArr=[];
    for(var i=0;i<menus.length;i++){
        var str=`<a class="profileMenu-item" data-index="${menus[i].code}">${menus[i].desc}</a>`;
        htmlArr.push(str)
    }
    $(".foot-nav").html(htmlArr.join(""))

    $(".foot-nav").off("click",".profileMenu-item").on("click",".profileMenu-item",function () {
        $(this).siblings(".profileMenu-item").removeClass("active")
        $(this).addClass("active");
        var html=`views/${$(this).data("index")}.html`;

        $(".profile_main").load(html)
    })
    $(".foot-nav").find(".profileMenu-item").eq(0).trigger("click")
}

$(function () {
    profileMenuLoad()
})
