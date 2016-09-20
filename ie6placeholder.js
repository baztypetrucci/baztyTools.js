jQuery.extend({
	ie6Placeholder: function(hash) {
		this.isMS6 = function() {

			var msVersion = navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/);

			if (!msVersion)
			return false;
			var version = parseFloat(msVersion[1]);
			return version < 10;
		}

		if (typeof hash.placeholder != 'undefined' && this.isMS6()) {

			jQuery('input[type="text"],input[type="password"]').each(function(k, v) {
				var place = jQuery(v).attr('placeholder'),
				color = jQuery(v).css('color');

				if (jQuery(v).val() == '') {
					jQuery(v).val(place);
					jQuery(v).css('color', '#999');
				}
				jQuery(v).focus(function() {
					if (jQuery(this).val() == place)
					jQuery(v).val('');
					jQuery(v).css('color', color);
				});
				jQuery(v).blur(function() {
					if (jQuery(this).val() == '') {
						jQuery(v).val(place);
						jQuery(v).css('color', '#999');
					}
				});
			});
		}
	}
});
