var URI = 'http://redbin.co.kr?test=한글입니다';

var output = '';

output += '★escape()\n';
output += escape(URI) + '\n\n';
output += '★encodeURI()\n';
output += encodeURI(URI) + '\n\n';
output += '★encodeURIComponent()\n';
output += encodeURIComponent(URI) + '\n\n';

console.log(output);
