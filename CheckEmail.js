function CheckEmail(email) {
	email = email.toLowerCase();
	email = email.split('');

	Caracteres = {
		especiais: ['@', '.', '_', '-'],
		normais: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'w', 'z', 'ç', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
	}

	function IsEspecial(caractere) {
		Yep = false;
		Caracteres.especiais.map(item => {
			if (caractere == item) {
				Yep = true;
			}
		});
		return Yep;
	}

	function IsNormal(caractere) {
		Yep = false;
		Caracteres.normais.map(item => {
			if (caractere == item) {
				Yep = true;
			}
		});
		return Yep;
	}

	Email = {
		arroba: {
			have: false,
			quantity: 0,
			position: 0,
		},
		ponto: {
			have: false,
			afterArroba: false,
		},
		notCaractere: false,
		especialCaractereBeforeOrAfterArroba: false,
	}

	if (email.length < 5) {
		return false;
	}

	if (!IsNormal(email[0]) || !IsNormal(email[email.length-1])) {
		return false;
	}

	email.map((caractere, position) => {
		if (!IsNormal(caractere) && !IsEspecial(caractere)) {
			Email.notCaractere = true;
		}

		if (caractere == '@') {
			Email.arroba.have = true;
			Email.arroba.quantity += 1;

			if (Email.arroba.quantity <= 1) {
				Email.arroba.position = position;
			}

			if (IsEspecial(email[position+1]) || IsEspecial(email[position-1])) {
				Email.especialCaractereBeforeOrAfterArroba = true;
			}

			email.map((ponto, ponto_position) => {
				if (ponto == '.' && ponto_position > position) {
					Email.ponto.have = true;
					Email.ponto.afterArroba = true;
				}
			})
		}
	});

	if (!Email.arroba.have || Email.arroba.quantity > 1) {
		return false;
	}

	if (!Email.ponto.have || !Email.ponto.afterArroba) {
		return false;
	}

	if (Email.notCaractere) {
		return false;
	}

	if (Email.especialCaractereBeforeOrAfterArroba) {
		return false;
	}

	return true;
}

module.exports = CheckEmail;