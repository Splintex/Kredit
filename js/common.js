$(document).ready(function() {
    $(document).click(function() {
        $(".js-select-list").hide();
        $(".js-select").removeClass("is-active");
        $(".js-popup").hide();
        $(".js-overlay").hide();
        $("body").removeClass("is-popup-open");
    });
    function select() {
        $(".js-select").each(function(){
            var select_list = $(this).find(".js-select-list");
            var text = select_list.find("li").first().text();
            $(this).find(".js-select-text").text(text);
            $(this).click(function(event){
                if ($(this).hasClass("is-active")) {
                    $(this).removeClass("is-active");
                    select_list.slideUp("fast");
                }
                else {
                    $(".js-select").removeClass("is-active");
                    $(".js-select-list").hide();
                    select_list.slideDown("fast");
                    $(this).addClass("is-active");
                }
                event.stopPropagation();
            });
            select_list.find("li").click(function(event) {
                var id = $(this).attr("data-id");
                var text = $(this).text();
                $(this).parent().parent().find(".js-select-text").text(text);
                $(this).parent().parent().find(".js-select-input").val(id);
                $(this).parent().hide();
                $(this).parents(".js-select").removeClass("is-active");
                event.stopPropagation();
            });
        });
    }
    select();
    $('.js-select').click(function(event){
        event.stopPropagation();
    });

    function ui_slider() {
        $(".js-ui-slider-uah").each(function(){
            var slider = $(this);
            var input = $(this).parents(".range").find(".js-ui-slider-input");
            slider.slider({
                range: 'min',
                min: 0,
                max: 100000,
                step: 1000,
                slide: function( event, ui ) {
                    input.val(ui.value);
                }
            });
            input.val(slider.slider("value"));
        });
        $(".js-ui-slider-month").each(function(){
            var slider = $(this);
            var input = $(this).parents(".range").find(".js-ui-slider-input");
            slider.slider({
                range: 'min',
                min: 0,
                max: 36,
                step: 1,
                slide: function( event, ui ) {
                    input.val(ui.value);
                }
            });
            input.val(slider.slider("value"));
        });
    }
    ui_slider();

   $(".js-nav-btn").on("click", function(){
        $(this).parent().find(".js-nav-list").slideToggle("fast");
        return false;
    });

   $(".js-popup-close").on("click", function(){
        $(".js-popup").hide();
        $(".js-overlay").hide();
        $("body").removeClass("is-popup-open");
   });
    $('.js-popup .popup').click(function(event){
        event.stopPropagation();
    });
});