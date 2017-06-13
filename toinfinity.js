function beyond(num) {
	if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
		console.log('And beyond');
	}
	if (num>0) {
		console.log('To infinity');
	}
	if (num<0) {
		console.log('To negative infinity');
	}
	if (num === 0) {
		console.log('Staying home');
	}
}
