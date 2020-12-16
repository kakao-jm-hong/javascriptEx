var date = new Date(1991, 11, 9);

var output = '';

output += 'toDateString: ' + date.toDateString() + '\n';
output += 'toGMTString: ' + date.toGMTString() + '\n';
output += 'toLocaleDateString: ' + date.toLocaleDateString() + '\n';
output += 'toLocaleString:' + date.toLocaleString() + '\n';
output += 'toLocaleTimeString: ' + date.toLocaleTimeString() + '\n';
output += 'toString: ' + date.toTimeString() + '\n';
output += 'toTimeString:' + date.toTimeString() + '\n';
output += 'toUTCString: ' + date.toUTCString();
console.log(output);