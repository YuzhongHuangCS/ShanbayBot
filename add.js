$('table.table .row .span2').each(function(i, e) {
	$.getJSON('/api/v1/bdc/search/?version=2&word=' + $(e).text(), function(res) {
		if (res.data.retention == undefined) {
			$.ajax({
				type: 'POST',
				url: '/api/v1/bdc/learning/',
				data: JSON.stringify({
					'content_type': 'vocabulary',
					'id': res.data.id
				}),
				contentType: "application/json",
				dataType: 'json'
			});
		}
	});
});
