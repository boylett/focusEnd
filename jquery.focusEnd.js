jQuery.fn.focusEnd = function()
{
	return this.each(function()
	{
		var type = $(this).focus().is('input, textarea') ? 'value' : 'innerHTML';
		this.selectionStart = this.selectionEnd = this[type].length;
	});
};
