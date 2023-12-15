const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test = jsc.forall("dict nat", function(graph){
    const adjList = {};         //Initializes an empty adjacency list to represent the graph
    for(const node in graph){   //Converts the graph to an adjacency list
        const surrNodes = graph[node] || [];
        adjList[node] = surrNodes;
    }

    const hasCycleResult = hasCycle(adjList);   //Call the hasCycle function on the generated graph
    return hasCycleResult == true || hasCycleResult == false;   //Makes sure that the result is either true or false
});
jsc.assert(test);   //Runs the test