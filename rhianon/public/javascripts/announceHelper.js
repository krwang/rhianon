(function() {

	$(document).on('click', '#sendAnnouncement', function(e) {
		$.ajax({
			url: "/accouncement",
			type: "POST",
			data: JSON.stringify(data),
			contentType: 'application/json',
			success: function(data) {
				alert("send announcement success");
			}
		})
	});
})