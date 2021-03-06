const data = [
    {width: 200, height: 100, fill: 'purple'},
    {width: 100, height: 60, fill: 'pink'},
    {width: 50, height: 30, fill: 'red'}]

const svg = d3.select('svg');

//joining the data to rects
const rects = svg.select('rect')
.data(data)

//add attrs to rects already in the DOM
rects.attr('width', (d,i,n)=>{
    console.log(i)
    console.log(n)
    console.log(n[i])
    return d.width
})
.attr('height',(d)=>{return d.height})
.attr('fill', d=> d.fill);

//append the enter selection to DOM
rects.enter()
.append('rect')
.attr('width',(d,i,n)=> d.width)
.attr('height', d=> d.height)