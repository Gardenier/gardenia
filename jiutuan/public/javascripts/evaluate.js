
;(function($){

    $.fn.evaluate = function(options){
        var self = $(this);
        var defaults = {
            evaluate: null,//要操作的icon
            label: null,//标题
            label_name: "",//标题的名字
            bg_img_off: "",//默认的正常状态下的图标
            bg_img_on: ""//默认的点亮状态下的图标
        };
        var settings =  $.extend({}, defaults, options || {});

        var icons = settings.evaluate;//获取icon
        settings.label.html(settings.label_name);
         /*选中时的样式*/
        var checkedCss = function(target){
            target.css({
                "background-image": "url("+settings.bg_img_on+")"
            });
        };
        /*未选中时的样式*/
        var normalCss = function(target){
            target.css({
                "background-image": "url("+settings.bg_img_off+")"
            });
        };

        var check = function(target){
            target.each(function(){
                var self = $(this);
                var status = self.attr("data-status");
                if(status == "true"){
                    checkedCss(self);
                }else {
                    normalCss(self);
                }
            });

        };
        icons.each(function(){
            var self = $(this);
            var status = false;
            self.attr("data-status",status);
        });
        check(icons);
        icons.bind("click",function(){
            var self = $(this);
            if(self.attr("data-status") == "true"){
                self.attr("data-status","false").nextAll().attr("data-status","false");
                check(icons);
            }else {
                self.attr("data-status","true").prevAll().attr("data-status","true");
                check(icons);
            }
        });

    }

})(jQuery);