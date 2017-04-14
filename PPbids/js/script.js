var limit = 10
var url = '://prvtparty.com/api/v1/venues'
url = './data.json'
var debug = true

function get_count() {
	$.ajax({
		type: 'GET',
		url: url,
		dataType: "json"
	}).done( function(data) {
		if (debug) { console.log("Count loaded from " + url) }
		return toInt(data.total_count)
	}).fail(function() {
		if (debug) { console.log("Failed remote file download") }
		return -1
	})
}

function render_count(counter) {
	if(counter != -1) {
		$(".counter_number").each(function() {
			$(this).html(counter)
		})
		$(".counter_rest > span").html(limit-counter)
	}
}


$(document).ready(function() {

	setInterval(render_count(get_count()), 1000)

})