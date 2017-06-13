function decode(string) {
    let array1 = string.split(' ');
    let finalPhrase = '';
    for (var i=0; i<array1.length; i++) {
        if (array1[i][0] === ‘a’) {
            finalPhrase += array1[i][1];
        }
        else if (array1[i][0] === ‘b’) {
            finalPhrase += array1[i][2];
        }
        else if (array1[i][0] === ‘c’) {
            finalPhrase += array1[i][3];
        }
        else if (array1[i][0] === ‘d’) {
            finalPhrase += array1[i][4];
        } else {
            finalPhrase += ' ';
        }
    }
    return finalPhrase;
}