var isEmpty=function(e){return/^function[^{]+\{\s*\}/m.test(e.toString())};!function(e){"use strict";e.HSCore.components.HSValidation={_baseConfig:{errorElement:"div",errorClass:"invalid-feedback",rules:{},onkeyup:function(t){e(t).valid()},errorPlacement:function(){},highlight:function(){},unhighlight:function(){},submitHandler:function(){}},pageCollection:e(),init:function(t,i){if(this.collection=t&&e(t).length?e(t):e(),e(t).length)return this.config=i&&e.isPlainObject(i)?e.extend({},this._baseConfig,i):this._baseConfig,this.config.itemSelector=t,this.initValidation(),this.pageCollection},initValidation:function(){var t=this,i=t.config,n=t.pageCollection;this.collection.each(function(s,a){var r=e(a);r.hasClass("js-step-form")?e.validator.setDefaults({ignore:":hidden:not(.active select)"}):e.validator.setDefaults({ignore:":hidden:not(select)"}),r.validate({errorElement:i.errorElement,errorClass:i.errorClass,rules:i.rules,onkeyup:i.onkeyup,errorPlacement:!0===isEmpty(i.errorPlacement)?t.errorPlacement:i.errorPlacement,highlight:!0===isEmpty(i.highlight)?t.highlight:i.highlight,unhighlight:!0===isEmpty(i.unhighlight)?t.unHighlight:i.unhighlight,submitHandler:!0===isEmpty(i.submitHandler)?t.submitHandler:i.submitHandler}),r.find("select").length&&e("select").change(function(){e(this).valid()}),n=n.add(r)})},errorPlacement:function(t,i){var n=e(i).data("error-msg-classes");t.addClass(n),t.appendTo(i.parents(".js-form-message"))},highlight:function(t){var i=e(t),n=i.data("error-class"),s=i.data("success-class");i.parents(".js-form-message").removeClass(s).addClass(n)},unHighlight:function(t){var i=e(t),n=i.data("error-class"),s=i.data("success-class");i.parents(".js-form-message").removeClass(n).addClass(s)},submitHandler:function(e){e.submit()}}}(jQuery);