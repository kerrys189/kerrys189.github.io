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
            document.getElementById('sankey-chart').contentDocument.location.reload(true);
            break;
        default:
          // code block
      }
}