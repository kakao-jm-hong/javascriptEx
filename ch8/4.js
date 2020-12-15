var obj = { property : 273};

var output ='';

output += "HOP('property') :"+ obj.hasOwnProperty('property') +'\n';
output += "HOP('constructor') :"+obj.hasOwnProperty('constructor')+'\n';
output += "PIE('property') :"+obj.propertyIsEnumerable('property')+'\n';
output += "PIE('constructor') :"+obj.propertyIsEnumerable('constructor')+'\n';
console.log(output);

for(var key in obj){
    console.log(obj[key]);
}