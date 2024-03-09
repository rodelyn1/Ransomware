var encryptor = require('file-encryptor');
const testFolder = './hey.txt/';
var key = 'Papansinka';

var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Who are you?', name => {
    console.log('Hey ${name}!');
    readline.close();
})

// Encrypt file.
// encryptor.encryptFile('input_file.txt', 'input_file.txt', key, function(err) {
//    console.log('File is encypted!');
// });

// Decrypt file.
encryptor.decryptFile('input_file.txt.encrypted', 'input_file.txt', key, function(err) {
    console.log('File decrypted!')
 });