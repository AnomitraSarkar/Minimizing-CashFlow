console.log("DOM JS running live");

function addToNodeManage() {
  nodemanage = document.querySelector(".nodemanage");
  nodemanage.innerHTML = "";
  for (let i = 0; i < nodes.length; i++) {
    nodemanage.innerHTML += `<div class="ele">${nodes[i]}<button class="delnode${nodes[i]}" onclick="removeN('${nodes[i]}')">Delete Node</button></div>`;
  }
}

function removeN(val) {
  const index = nodes.indexOf(val);
  if (index > -1) {
    nodes.splice(index, 1);
  }
  addToNodeManage()
  startGraphing()
}
function removeE(val) {
    let index = -1
    for(let i = 0 ; i < edges.length; i++){
        temp = edges[i]
        let str = `${temp[0]},${temp[1]},${temp[2]}`
        if(str == val){
          index = i
        }
    }
    if (index > -1) {
      edges.splice(index, 1);
    }
    addToEdgeManage()
    startGraphing()
  }


function addToEdgeManage() {
    edgemanage = document.querySelector(".edgemanage");
    edgemanage.innerHTML = "";
    for (let i = 0; i < edges.length; i++) {
      edgemanage.innerHTML += `<div class="ele">${edges[i]}<button class="delnode${edges[i]}" onclick="removeE('${edges[i]}')">Delete Edge</button></div>`;
    }
}
