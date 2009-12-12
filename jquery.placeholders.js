/*!
 * Cross-browser Placeholder Plugin for jQuery
 *
 * Copyright (c) 2009 Mark Dodwell
 * Licensed under the MIT license.
 *
 * Requires: jQuery v1.3.2
 * Version: 0.1.0
 */
(function($) {  
  var placeholderColor = "#aaa";
  
  $.fn.placeholders = function() {      
    return $(this).each(function() {      
      var el = $(this);
      
      // save original color in cache
      el.data("placeholder.original_color", el.css("color"));
      
      // show if blank
      var placeholder = el.attr("placeholder");
      var val = el.val() || "";
      if (val == "") el.activatePlaceholder().val(placeholder);

      // hide placeholders on focus
      el.focus(function() {
        if (el.data('placeholder.activated')) el.deactivatePlaceholder().val("");
      });
    
      // toggle placeholders on change
      el.bind("change", function() {
        var val = el.val() || "";
        if (val == "") {
          el.activatePlaceholder().val(placeholder);
        } else {
          el.deactivatePlaceholder();
        }
      });

      // show placeholders on blur if empty
      el.blur(function() {
        var val = el.val() || "";    
        if (val == "") el.activatePlaceholder().val(placeholder);
      });
      
      // remove placeholders before submit (add it once per form for optimal performance)
      var form = el.closest("form");
      if (form && !form.data('placeholder.clearer_set')) {
        el.closest("form").bind("submit", function() {
          $("input[placeholder]").each(function() {
            var el = $(this);
            if (el.data('placeholder.activated')) el.deactivatePlaceholder().val("");
          });
          return true;
        });
        form.data('placeholder.clearer_set', true)
      }
    });
  };
  
  $.fn.activatePlaceholder = function() { 
    var el = $(this);
    return el.data('placeholder.activated', true)
      .css("color", placeholderColor);
  };
  
  $.fn.deactivatePlaceholder = function() { 
    var el = $(this);
    return el.data('placeholder.activated', false)
      .css("color", el.data("placeholder.original_color"));
  };
  
  function arePlaceholdersSupported() {
    var i = document.createElement('input');
    return 'placeholder' in i;
  };
  
  $(function() {
    if (arePlaceholdersSupported()) return true;
    $("*[placeholder]").placeholders();
  });
})(jQuery);

