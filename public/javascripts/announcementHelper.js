$(document).ready(function() {

	$('#sendAnnouncement').click(function() {
		$.ajax({
			url: "/announcement",
			type: "POST",
			data: {
				priority: 2,
				text: $('#message').val()
			},
			dataType: 'json',
			success: function(data) {
				alert("Announcement sent!");
			}
		});
	});
})