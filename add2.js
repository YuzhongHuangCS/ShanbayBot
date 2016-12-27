$('td.wordbook-wordlist-name').slice(0, 1).each(function(i_list, list) {
	var href = $(list).find('a').attr('href');
	var pages = Math.ceil($(list).next().text().match(/\d+/) / 20);
	console.log(href, pages);

	for (var i = 1; i <= pages; i++) {
		var url = href + '?page=' + i;
		console.log(url);

		$.get(url, function(html) {
			$(html).find('table.table .row .span2').each(function(i_word, word) {
				$.getJSON('/api/v1/bdc/search/?version=2&word=' + $(word).text(), function(json) {
					if (json.data.retention == undefined) {
						console.log($(word).text());

						$.ajax({
							type: 'POST',
							url: '/api/v1/bdc/learning/',
								data: JSON.stringify({
								'content_type': 'vocabulary',
								'id': json.data.id
							}),
							contentType: "application/json",
							dataType: 'json'
						});
					}
				});
			});
		});
	}
});
