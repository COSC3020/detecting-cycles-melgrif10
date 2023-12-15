function hasCycle(graph) {
    const visited = new Set();      //Tracks visited nodes during traversal
    const cycleArray = new Set();   //Tracks nodes in current cycle being explored

    function findCycles(node){      //Depth-first-search that detects cycles
        if(!visited.has(node)){     //If the node hasn't been visited
            visited.add(node);      //Mark as visited
            cycleArray.add(node);   //Add node to current cycle

            const surrNodes = graph[node] || [];    //Get surrounding node of the current node
            const surrNodesArray = Array.isArray(surrNodes) ? surrNodes: Object.values(surrNodes);  //Convert or make sure surrNodes is an array

            surrNodesArray.forEach(surrNode => {    //Iterate over surrounding nodes
                    if(!visited.has(surrNode)){     //If the surrouding node hasn't been visited
                        if(findCycles(surrNode)){   //Recursive call to check for cycles
                            return true;            //A cycle has been found, return true
                        }
                    }
                    else if(cycleArray.has(surrNode)){  //If the surrounding node is in already in the current cycle a cycle has been found
                        return true;                    //A cycle has been found, return true
                    }
            });
            cycleArray.delete(node);    //Remove current node from cycle, already found the cycle
    }
    return false;       //No cycles were detected for the current node
}
    for(const node in graph){   //Iterate over every node in the graph
        if(findCycles(node)){   //If a cycle has been found, return true
            return true;
        }
    }
    return false;   //No cycles were found in the entire graph
}
