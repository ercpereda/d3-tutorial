console.log('===============');
console.log('= scaleLinear ='); 
console.log('===============');
var linearScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 600])
    .clamp(true);
 
console.log(linearScale(-20));
console.log(linearScale(50));
console.log(linearScale(105));
console.log(linearScale.invert(300));

console.log('=============');
console.log('= scaleTime =');
console.log('=============');
var timeScale = d3.scaleTime()
    .domain([new Date(2016, 0, 1), new Date()])
    .range([0, 100]);
    
console.log(timeScale(new Date(2016, 0, 15)));
console.log(timeScale(new Date(2016, 4, 15)));
console.log(timeScale(new Date()));
console.log(timeScale.invert(50));


console.log('=================');
console.log('= scaleQuantize =');
console.log('=================');
var quantizeScale = d3.scaleQuantize()
    .domain([0, 100])
    .range(["red", "white", "green"]);
    
console.log(quantizeScale(22));
console.log(quantizeScale(50));
console.log(quantizeScale(88));
console.log(quantizeScale(99));
console.log(quantizeScale.invertExtent("white"));

console.log('=================');
console.log('= scaleOrdinal =');
console.log('=================');
var ordinalScale = d3.scaleOrdinal()
    .domain(["poor", "good", "great"])
    .range(["red", "white", "green"]);
    
console.log(ordinalScale('poor'));
console.log(ordinalScale('good'));
console.log(ordinalScale('great'));