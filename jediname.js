function jediName(firstName, lastName) {
	let firstJedi = lastName.slice(0,3);
	let lastJedi = firstName.slice(0,2);
	return firstJedi+lastJedi;
}