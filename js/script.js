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
    
    $('.close_popup_window').click(function(){
        $(this).parents('.wrap_window_popup').removeClass('open').hide();
        return false;
    });
    
    $('.bg_window_m_popup').click(function(){
        $(this).parents('.wrap_window_popup').removeClass('open').hide();
        return false;
    });
    
});