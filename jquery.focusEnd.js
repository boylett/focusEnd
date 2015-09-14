jQuery.fn.focusEnd = function()
{
	return this.each(function()
	{
		var input = $(this).focus(),
			type = input.is('input, textarea') ? 'val' : 'html';
		
		if(this.setSelectionRange && typeof this.setSelectionRange == 'function')
		{
			var sel = input[type]().length * 2;
			this.setSelectionRange(sel, sel);
		}
		else
		{
			input[type](input[type]());
		}
		
		input[0].scrollTop = input[0].scrollHeight;
	});
};
