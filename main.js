console.log("Logic JS running live");

let nodes = [];
let edges = [];
let graph = [];
let solnedge = [];

function edgesIndexing() {
  eilist = [];
  for (let i = 0; i < edges.length; i++) {
    let temp = edges[i];
    let s = temp[0],
      e = temp[1],
      a = temp[2];
    for (let j = 0; j < nodes.length; j++) {
      if (s == nodes[j]) {
        s = j;
      }
      if (e == nodes[j]) {
        e = j;
      }
    }
    indexedTemp = [s, e, a];
    eilist.push(indexedTemp);
  }
  return eilist;
}

function createAdjGraph() {
  graph = [];
  // initialising
  for (let i = 0; i < nodes.length; i++) {
    let temp = [];
    for (let j = 0; j < nodes.length; j++) {
      temp.push(0);
    }
    graph.push(temp);
  }
  let Iedges = edgesIndexing();
  for (let k = 0; k < Iedges.length; k++) {
    let temp = Iedges[k];
    graph[temp[0]][temp[1]] = temp[2];
  }
}

function print(stuff) {
  document.write("<br>");
  document.write(stuff);
  document.write("<br>");
}

var N = 3;

function getMin(arr) {
  var minInd = 0;
  for (i = 1; i < N; i++) if (arr[i] < arr[minInd]) minInd = i;
  return minInd;
}
function getMax(arr) {
  var maxInd = 0;
  for (i = 1; i < N; i++) if (arr[i] > arr[maxInd]) maxInd = i;
  return maxInd;
}

function minOf2(x, y) {
  return x < y ? x : y;
}

function getLabel(i) {
  return nodes[i];
}

function minCashFlowRec(amount) {
  var mxCredit = getMax(amount),
    mxDebit = getMin(amount);
  if (amount[mxCredit] == 0 && amount[mxDebit] == 0) return;

  var min = minOf2(-amount[mxDebit], amount[mxCredit]);
  amount[mxCredit] -= min;
  amount[mxDebit] += min;

  let temp = [mxDebit, mxCredit, min];
  solnedge.push(temp);
  console.log(
    "<br>Person " +
      getLabel(mxDebit) +
      " pays " +
      min +
      " to " +
      "Person " +
      getLabel(mxCredit)
  );

  minCashFlowRec(amount);
}

function minCashFlow(graph) {
  solnedge = [];
  var amount = Array.from({ length: N }, (_, i) => 0);
  for (p = 0; p < N; p++)
    for (i = 0; i < N; i++) amount[p] += graph[i][p] - graph[p][i];

  minCashFlowRec(amount);
}

function fetchNode() {
  let nodename = document.querySelector("#nodename").value;
  nodes.push(nodename);
  nodes = nodes.sort();
  addToNodeManage();
  startGraphing();
}

function fetchEdge() {
  let edgestart = document.querySelector("#edgestart").value;
  let edgeend = document.querySelector("#edgeend").value;
  let edgeamt = document.querySelector("#edgeamt").value;
  let w = [edgestart, edgeend, edgeamt];
  edges.push(w);
  addToEdgeManage();
  startGraphing();
}

function solve() {
  startGraphing();
  createAdjGraph();
  minCashFlow(graph);
  edges = solnedge;
  addToNodeManage();
  addToEdgeManage();
  startGraphing();
}

function reloadPanel() {
  nodes = [];
  edges = [];
  graph = [];
  solnedge = [];
  startGraphing();
}
