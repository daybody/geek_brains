var nodePath = process.argv[0];
var testStr = process.argv[2];

var myStr =testStr.replace(/[К к Р р Н н]/g, '');

process.stdout.write(myStr);