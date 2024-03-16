const widthD3 = 1000;
const heightD3 = 500;

const svgD3 = d3.select('div#basic-d3js-svg')
  .append('svg')
  .attr('width', widthD3)
  .attr('height', heightD3);

const nD3 = 50;
// const marks = [];
// for(let i=0; i<nD3; i++){
//   marks.push({
//     y: i * 20,
//     width: widthD3,
//     height: 10,
//     mask: 'url(circle-mask-d3-1)',
//   });
// };

// // console.log(marks);
// svgD3
//   .selectAll('rect')
//   .data(marks)
//   .join('rect')
//   .attr('y', (d) => d.y)
//   .attr('width', (d) => d.width)
//   .attr('height', (d) => d.height)
//   .attr('mask', (d) => d.mask)

// REFACTOR 1 - create array
// console.log(d3.range(5))
svgD3
  .append('g')
  .selectAll('rect')
  .data(d3.range(nD3))
  // .enter().append('rect')
  .join('rect')
    .attr('y', (d) => d * 20)
    .attr('width', widthD3)
    .attr('height', 10)
    .attr('mask', 'url(#circle-mask-d3-1)');

// const maskD3_1 = svgD3.append('mask')
//   .attr('id', 'circle-mask-d3-1');

// maskD3_1.append('rect')
//   .attr('width', widthD3)
//   .attr('height', heightD3)
//   .attr('fill', 'black');

// maskD3_1.append('circle')
//   .attr('cx', widthD3 / 2)
//   .attr('cy', heightD3 / 2)
//   .attr('r', 200)
//   .attr('fill', 'white');

svgD3
  .append('g')
  .selectAll('rect')
  .data(d3.range(nD3))
  .join('rect')
    .attr('x', (d) => d * 20)
    .attr('width', 10)
    .attr('height', widthD3)
    .attr('mask', 'url(#circle-mask-d3-2)');

// const maskD3_2 = svgD3.append('mask')
//   .attr('id', 'circle-mask-d3-2');

// maskD3_2.append('rect')
//   .attr('width', widthD3)
//   .attr('height', heightD3)
//   .attr('fill', 'white');

// maskD3_2.append('circle')
//   .attr('cx', widthD3 / 2)
//   .attr('cy', heightD3 / 2)
//   .attr('r', 200)
//   .attr('fill', 'black');

// REFACTOR 2 - masking
function renderMask(selection, id, inverted){
  const maskD3 = selection.append('mask')
    .attr('id', id);

  maskD3.append('rect')
    .attr('width', widthD3)
    .attr('height', heightD3)
    .attr('fill', inverted ? 'white' : 'black');

  maskD3.append('circle')
    .attr('cx', widthD3 / 2)
    .attr('cy', heightD3 / 2)
    .attr('r', 200)
    .attr('fill', inverted ? 'black' : 'white');
}

// renderMask(svgD3, 'circle-mask-d3-1', true);
// renderMask(svgD3, 'circle-mask-d3-2', false);

svgD3
  .call(renderMask, 'circle-mask-d3-1', true)
  .call(renderMask, 'circle-mask-d3-2', false);