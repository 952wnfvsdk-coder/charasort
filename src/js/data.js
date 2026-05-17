const dataSet = {};
const dataSetKey = '2026-05-17';
let dataSetVersion = '2026-05-17';
const imageRoot = '';

dataSet[dataSetKey] = {};

const options = [
  {
    name: 'Filter by Series',
    key: 'series',
    tooltip: 'Check to include.',
    checked: true,
    sub: [
      { name: '타이틀곡', key: 'title', checked: true },
      { name: '수록곡', key: 'b-side', checked: true }
    ]
  }
];

dataSet[dataSetKey][1] = { name: "기다릴게", img: "", opts: { series: ["title"] } };
dataSet[dataSetKey][2] = { name: "여섯 번째 여름", img: "", opts: { series: ["title"] } };
dataSet[dataSetKey][3] = { name: "WAY 4 LUV", img: "", opts: { series: ["title"] } };
dataSet[dataSetKey][4] = { name: "Pump Up The Volume", img: "", opts: { series: ["title"] } };
dataSet[dataSetKey][5] = { name: "픽셀월드 (Pixel World)", img: "", opts: { series: ["b-side"] } };
dataSet[dataSetKey][6] = { name: "W4L (Our Movie)", img: "", opts: { series: ["b-side"] } };
dataSet[dataSetKey][7] = { name: "From", img: "", opts: { series: ["b-side"] } };
