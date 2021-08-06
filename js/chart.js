// anim
const CHART_SIZE = 100;
const totalDuration = 3000;
const delayBetweenPoints = totalDuration / CHART_SIZE;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const EASE_ANIMATION = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * delayBetweenPoints;
    }
  },
  y: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: previousY,
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return ctx.index * delayBetweenPoints;
    }
  }
};
// land use graph
var landusegraph_selector, landusegraph;
var landusegraph_options = {
  type:'line',
  data:{
    labels:[...Array(CHART_SIZE).keys()],
    datasets:LAND_USE_GRAPH_DATASETS
  },
  options:{
    EASE_ANIMATION,
    interaction: {
      intersect: false
    },
    responsive: true,
    title:{
      display: true,
      fontSize:25
    },
    plugins:{
      legend:{
        display:false,
        position:'right',
        labels:{
          fontColor: '#000'
        }
      }
    },
    tooltips:{
      enabled:false
    },
    scales: {
      x: {
        type: "linear",
      },
      y: {
        min: 0,      
        max: 100,
        grid: {
          display: false
        }
      }
    }
}
};

// woodland change graph
var woodlandcovergraph, woodlandcovergraph_selector;
const woodlandcovergraph_options = {};


function createChart() {
  landusegraph_selector = document.getElementById('landusegraph').getContext('2d');
  
  landusegraph = new Chart(landusegraph_selector, landusegraph_options);
}

function startLoop() {
  document.querySelector('.intro-page').scrollIntoView({ 
    behavior: 'smooth' 
  });
  //movementLoop();
}

function reset() {
  landusegraph.destroy();
  landusegraph = new Chart(landusegraph_selector, landusegraph_options);
}