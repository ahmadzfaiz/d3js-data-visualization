const width = 1000;
const height = 500;

// const svg = document.createElement('svg');
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', width /*1000*/);
svg.setAttribute('height', height /*500*/);

const mainElement = document.getElementById('basic-js-svg');
mainElement.appendChild(svg);

const n = 50;
for(let i=0; i<n; i++){
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', i * 20);
  rect.setAttribute('width', 10);
  rect.setAttribute('height', height /*500*/);
  rect.setAttribute('mask', 'url(#circle-mask-1)');
  svg.appendChild(rect);
};

const mask1 = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
mask1.setAttribute('id', 'circle-mask-1');
svg.appendChild(mask1);

const maskRect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
maskRect1.setAttribute('width', width);
maskRect1.setAttribute('height', height);
maskRect1.setAttribute('fill', 'white');
mask1.appendChild(maskRect1);

const maskCircle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
maskCircle1.setAttribute('cx', width / 2);
maskCircle1.setAttribute('cy', height / 2);
maskCircle1.setAttribute('r', 200);
maskCircle1.setAttribute('fill', 'black');
mask1.appendChild(maskCircle1);

for(let i=0; i<n; i++){
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('y', i * 20)
  rect.setAttribute('width', width);
  rect.setAttribute('height', 10);
  rect.setAttribute('mask', 'url(#circle-mask-2)');
  svg.appendChild(rect);
};

const mask2 = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
mask2.setAttribute('id', 'circle-mask-2');
svg.appendChild(mask2);

const maskRect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
maskRect2.setAttribute('width', width);
maskRect2.setAttribute('height', height);
maskRect2.setAttribute('fill', 'black');
mask2.appendChild(maskRect2);

const maskCircle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
maskCircle2.setAttribute('cx', width / 2);
maskCircle2.setAttribute('cy', height / 2);
maskCircle2.setAttribute('r', 200);
maskCircle2.setAttribute('fill', 'white');
mask2.appendChild(maskCircle2);