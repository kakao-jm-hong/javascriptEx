var string = 'JavaScript';

var output ='';
output += 'anchor: ' + string.anchor() +'\n';
output += 'big: '+ string.big()+'\n';
output += 'blink: '+string.blink() +'\n';
output += 'bold: '+ string.bold()+'\n';
output += 'fixed: '+ string.fixed()+'\n';
output += 'fontcolor(\'red\'): '+string.fontcolor('red') +'\n';
output += 'fontsize(15): '+ string.fontsize(15)+'\n';
output += 'italics: '+ string.italics()+'\n';
output += 'link: '+string.link('http://www.naver.com') +'\n';
output += 'small: '+ string.small()+'\n';
output += 'strike: '+ string.strike()+'\n';
output += 'sub: '+ string.sub()+'\n';
output += 'sup: '+ string.sup()+'\n';

console.log(output);