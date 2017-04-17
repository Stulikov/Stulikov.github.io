var limit = 10
var url = '://prvtparty.com/api/v1/venues'
url = './data.json'
var debug = true

var t = -1;

function set_request() {
	return $.ajax({
		type: 'GET',
		url: url,
		dataType: "json"
	})
}
function get_count(data) {
	if (debug) { console.log("Count loaded from " + url) }
	return data ? parseInt(data.total_count) : null;
}

function render_count(counter) {
	if(counter != -1) {
		$(".counter_number").each(function() {
			$(this).html(counter)
		})
		$(".counter_rest > span").html(limit-counter)
	}
}
function fail_function (error_state, error_status, error_description) {
	console.warn(error_status, error_description)
}

function init() {
	set_request().then(get_count).then(render_count).catch(fail_function);
}


$(document).ready(function() {
	init();
	setInterval(function () { init(); }, 1000)
})