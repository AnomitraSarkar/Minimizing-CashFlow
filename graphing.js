console.log("Graph JS runnning live")

var grapho = new Springy.Graph();


jQuery(function(){
    var springy = window.springy = jQuery('#springydemo').springy({
      graph: grapho,
      nodeSelected: function(node){
        console.log('Node selected: ' + JSON.stringify(node.data));
      }
    });
  });

nodefns = []
function addNodeVars(){
  if (nodefns != []){
    for(let i=0;i<nodefns.length;i++){
      grapho.removeNode(nodefns[i])
    }
  }
  nodefns = []
  for(let i=0;i<nodes.length;i++){
    var temp = grapho.newNode({label:nodes[i]})
    nodefns.push(temp)
  }
}

  function addEdgeVars(){
    let ledges = edgesIndexing()
    for(let i=0;i<ledges.length;i++){
      let temp = ledges[i]
      grapho.newEdge(
        nodefns[temp[0]],
        nodefns[temp[1]],
        {
          label: temp[2]
        }
      )
    }
  }
  
  function startGraphing(){
    addNodeVars();
    addEdgeVars();
  }
