$(document).ready(function() {

	var signup = function(name, password, email, phoneNumber) {
		$.ajax({
			url: '/admin/signup',
			type: 'POST',
			data: {
				name: name,
				password: password,
				email: email,
				phoneNumber: phoneNumber
			},
			dataType: 'json',
			success: function(data) {
				if (data.success) {
					window.location.href = data.url;
				}
				else {
					alert(data.info);
				}
			}
		});
	}

	$('#btn-signup').click(function(e) {
		name = $('#inp-signup-name').val();
		password = $('#inp-signup-password').val();
		email = $('#inp-signup-email').val();
		phoneNumber = $('#inp-signup-phoneNumber').val();
		signup(name, password, email, phoneNumber);
	});

	$('#inp-signup-phoneNumber').keypress(function(e) {
		if (e.keyCode === 13) {
			name = $('#inp-signup-name').val();
			password = $('#inp-signup-password').val();
			email = $('#inp-signup-email').val();
			phoneNumber = $('#inp-signup-phoneNumber').val();
			signup(name, password, email, phoneNumber);
		}
	});
});