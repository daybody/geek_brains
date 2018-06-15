var nodePath = process.argv[0];
var appPath = process.argv[1];
var testStr = process.argv[2];

var myStr =testStr.replace(/[КкРрНн]/g, '');

process.stdout.write(myStr);