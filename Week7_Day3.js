const fs = require('fs');

fs.readFile('https://github.com/devtlv/Right-Left_Week7JS/blob/main/RightLeft.txt', 'utf-8', (err, data)=> {
	if (err) {
		console.log(err)
	} else {
		const data = data.toString()
		let position = 0
		let steps = 0
		let first = 0
		for (let i = 0; i < game.length; i++) {
			steps++
			if (game[i] === `>`) {
				position++
			} else {
				position--
			}
			if (position === -1 && first === 0) {
				console.log(`first time in left side is in ${steps} steps`)
				first = 1
			}
		}
		console.log(`total stepd: ${position}`)
	}
})

//let x = String(data);
//let length = x.length;
//console.log(length);