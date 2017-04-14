var limit = 10
var url = '://prvtparty.com/api/v1/venues'
url = './data.json'
var debug = true

var t = -1;

function get_render_count() {
	$.ajax({
		type: 'GET',
		url: url,
		dataType: "json"
	}).done( function(data) {
		if (debug) { console.log("Count loaded from " + url) }
		
		counter = parseInt(data.total_count)
		$(".counter_number").each(function() {
			$(this).html(counter)
		})
		$(".counter_rest > span").html(limit-counter)
	}).fail(function() {
		if (debug) { console.log("Failed remote file download") }
		return -1
	})
}


$(document).ready(function() {

	get_render_count()
	setInterval(get_render_count(), 1000)

})