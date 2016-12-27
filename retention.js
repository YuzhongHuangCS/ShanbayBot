$('table.table .row .span2').each(function(i, e) {
	$.getJSON('/api/v1/bdc/search/?version=2&word=' + $(e).text(), function(res) {
		if (res.data.retention == undefined) {
			$(e).append(' ' + res.data.retention);
		}
	});
});
