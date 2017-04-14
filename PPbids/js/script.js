var limit = 10
var url1 = '://prvtparty.com/api/v1/venues'
var debug = true

var t = -1;

function get_count() {
	$.ajax({
		type: 'GET',
		url: url1,
		dataType: "json"
	}).done( function(data) {
		if (debug) { console.log("Count loaded from " + url) }
		t = toInt(data.total_count)
	}).fail(function() {
		if (debug) { console.log("Failed remote file download") }
		t = -1
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

	setInterval(function () { get_count(); render_count(t); }, 1000)

})