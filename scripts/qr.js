(function ($) { 
  $.fn.qrcode = function(url, size) { 
    if(typeof(size) == 'undefined') size = 8;
    return 'http://qrcode.kaywa.com/img.php?s='+size+'&d='+url;
  }
})(jQuery);