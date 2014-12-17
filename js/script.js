$(function(){
    $( '#partner_slider' ).lemmonSlider();
    
    $('.module_list').click(function(){
        $(this).nextAll('.modules_list_wrap').toggleClass('open').toggle();
        return false;
    });
    
    $('.close_list_modules').click(function(){
        $(this).parents('.modules_list_wrap').removeClass('open').hide();
        return false;
    });
    
    $('.bg_window_m').click(function(){
        $(this).parents('.modules_list_wrap').removeClass('open').hide();
        return false;
    });
    
    if($('#tel_dtk').length){
        $('#tel_dtk').inputmask("+9 (999) 999-9999");
    }
    
    if($('#tel_dev').length){
        $('#tel_dev').inputmask("+9 (999) 999-9999");
    }
    
    if($('#idontknow').length){
        $('#idontknow').click(function(){
            $('#dont_know').toggleClass('open').show();
            return false;
        });
    }
    
    if($('.redaction_list a.btn').length){
        $('.redaction_list a.btn').click(function(event){
            //console.log(window.event.clientY);
            positionWindow({
                el : $('#buy_order'),
                posEl : $('.main .redaction_list'),
                cursorY : window.event.clientY
            });
            $('#buy_order').toggleClass('open').show();
            return false;
        });
    }
    
    if($('#dev_site_order').length){
        $('#dev_site_order').click(function(event){
            //console.log(window.event.clientY);
            positionWindow({
                el : $('#dev_order'),
                posEl : $('#dev_site_order'),
                cursorY : window.event.clientY
            });
            $('#dev_order').toggleClass('open').show();
            return false;
        });
    }
    
    $('#file_dev').change(function(){
        $('.file_info_for_upload').show();
        var file = $(this).val();
//        var file_match = file.match(/[\\|\/](([а-яА-Я]+|[\w])+\..*?)$/);
//        console.log(file_match);
//        if(!file_match){
//            file_match = file.match(/[\\|\/](\w+\..*?)$/);
//        }
//        console.log(file_match);
        $('#name_file_for_upload').text(file);
    });
    
    $('#del_file_for_upload').click(function(){
        $('#name_file_for_upload').text('');
        $('.file_info_for_upload').hide();
        $('#file_dev').val('');
        return false;
    });
    
    $('.close_popup_window').click(function(){
        $(this).parents('.wrap_window_popup').removeClass('open').hide();
        return false;
    });
    
    $('.bg_window_m_popup').click(function(){
        $(this).parents('.wrap_window_popup').removeClass('open').hide();
        return false;
    });
    
    
    
});
function positionWindow(opt){
    var elem = opt.el;
    var mainEl = opt.posEl || $('body');
    var el = elem.find('.window_popup');
    var cursorY = opt.cursorY || window.event.clientY;
    cursorY = parseInt(cursorY);
    
    var positionMainEl = mainEl.offset(); //top&left
    var widthMainEl = mainEl.innerWidth();
    var heightMainEl = mainEl.innerHeight();
    var widthEl = el.innerWidth();
    var heightEl = el.innerHeight();
    
    var doLeft = ((widthMainEl/2) - widthEl)+positionMainEl.left;
    var doTop = positionMainEl.top+50;
    
//    console.log('В лево:'+doLeft);
//    console.log('Вверх:'+(positionMainEl.top+50));
    
    el.css({
        left: doLeft,
        top: doTop
    });
}