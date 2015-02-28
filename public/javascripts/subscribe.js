$(document).ready(function() {

	var subscribe = function(name, phoneNumber) {
		$.ajax({
			url: '/subscriber/subscribe',
			type: 'POST',
			data: {
				name: name,
				phoneNumber: phoneNumber
			},
			dataType: 'json',
			success: function(data) {
				if (data.success) {
					alert('You are subscribed to MIT alerts!');
					window.location.href = '/';
				}
				else {
					alert(data.info);
				}
			}
		});
	}

	$('#btn-subscribe').click(function() {
		name = $('#inp-subscribe-name').val();
		phoneNumber = $('#inp-subscribe-phoneNumber').val();
		signup(name, phoneNumber);
	});

	$('#inp-subscribe-phoneNumber').keypress(function(e) {
		if (e.keyCode === 13) {
			name = $('#inp-subscribe-name').val();
			phoneNumber = $('#inp-subscribe-phoneNumber').val();
			signup(name, phoneNumber);
		}
	});
});