var limit = 10
var url1 = 'https://prvtparty.com/api/v1/venues'

$(document).ready(function() {

	$.ajax({
		type: 'GET',
		url: url1,
		dataType: "json"
	}).done( function(data) {
		counter = data.total_count;
		$(".counter_number").each(function() {
			$(this).html(counter);
		});
		$(".counter_rest > span").html(limit-counter);
	}).fail(function() {
		console.log("Failed remote file download");
	});
});