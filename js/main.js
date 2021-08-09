function showCollapse(selector) {
    $(selector).collapse('show')
}

function hideCollapse(selector) {
    $(selector).collapse('hide')
}

function scrollTo(selector) {
    document.querySelector(selector).scrollIntoView({ 
        behavior: 'smooth' 
      });
}

function navigate(section) {
    switch(section) {
        case "start":
            //scrollTo('#start-page');
          break;
        case "intro":
            scrollTo('#intro-page');
            break;
        case "land-use-charts":
            scrollTo('#land-use-chart-page');
            document.getElementById('sankey-chart').src = document.getElementById('sankey-chart').src; //reload sankey iframe
            break;
        case "woodland-use":
            scrollTo('#woodland-use-page');
            break;
        case "local-perceptions":
            scrollTo('#local-perceptions-page');
            break;
        case "conclusion":
            scrollTo('#conclusion-page')
            break;
        default:
          // code block
      }
}