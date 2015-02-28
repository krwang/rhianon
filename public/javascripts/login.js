$(document).ready(function() {

	var login = function(name, password) {
		$.ajax({
			url: '/admin/login',
			type: 'POST',
			data: {
				name: name,
				password: password
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

	$('#btn-login').click(function() {
		var name = $('#inp-login-name').val();
		var password = $('#inp-login-password').val();
		login(name, password);
	});

	$('#inp-login-password').keypress(function(e) {
		if (e.keyCode === 13) {
			var name = $('#inp-login-name').val();
			var password = $('#inp-login-password').val();
			login(name, password);
		}
	});
});