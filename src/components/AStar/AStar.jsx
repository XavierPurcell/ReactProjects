class AStar {
  constructor(_Nodes, _Width, _Height, _Seeker, _Target, _FillSquare) {
    // set out class varibles up
    this._Nodes = _Nodes;
    this._Width = _Width;
    this._Height = _Height;
    this._Seeker = _Seeker;
    this._Target = _Target;

    // this is a method passed on from the pathfinding class
    this._FillSquare = _FillSquare;
  }

  // distance of 2 nodes
  GetDistance(nodeA, nodeB) {
    let dstX = Math.abs(nodeA._gridX - nodeB._gridX); // abs = if negative remove the negative sign
    let dstY = Math.abs(nodeA._gridY - nodeB._gridY);

    if (dstX > dstY) {
      return 14 * dstY + 10 * (dstX - dstY);
    } else {
      return 14 * dstX + 10 * (dstY - dstX);
    }
  }

  // get neighbours
  getNeighbours(nodeItem) {
    let neighbours = [];

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (x === 0 && y === 0) {
          continue;
        }

        //diagnoal movement stop
        if (x === -1 && y === -1) {
          continue;
        }

        if (x === 1 && y === 1) {
          continue;
        }

        if (x === 1 && y === -1) {
          continue;
        }
        if (x === -1 && y === 1) {
          continue;
        }

        let checkX = nodeItem._gridX + x;
        let checkY = nodeItem._gridY + y;

        // 00 = node[0] 1 0 = node[1] 0 1 = node [30]

        // 30 is the blocksize
        if (
          checkX >= 0 &&
          checkX < this._Width / 30 &&
          checkY >= 0 &&
          checkY < this._Height / 30
        ) {
          let correctNode = (this._Width / 30) * checkY + checkX;

          neighbours.push(this._Nodes[correctNode]); // array of nodes
        }
      }
    } // end of for loop
    return neighbours;
  }

  FindPath(myCanvas, Seeker, Target) {
    this._myCanvas = myCanvas;
    let startNode = this._Nodes[Seeker];
    let targetNode = this._Nodes[Target];

    let openSet = [];
    let closedSet = [];
    openSet.push(startNode);

    let foundPath = false;

    let j = -1;
    while (openSet.length > 0) {
      let currentNode = openSet[0];
      // start at 1 to ignore the starting block
      for (let i = 1; i < openSet.length; i++) {
        if (
          openSet[i].fCost() < currentNode.fCost() ||
          (openSet[i].fCost() === currentNode.fCost() &&
            openSet[i].hCost < currentNode.hCost)
        ) {
          // currentNode is the small fcost??
          currentNode = openSet[i];
        }
      }

      let index = openSet.indexOf(currentNode);
      openSet.splice(index, 1); // remove node
      closedSet.push(currentNode);

      if (currentNode === targetNode) {
        foundPath = true;
        break;
      }

      let neighbour = this.getNeighbours(currentNode);
      for (let i = 0; i < neighbour.length; i++) {
        //grid.DrawTiles(neighbour.gridPosition, grid.blueTile);

        if (
          neighbour[i]._walkNode === false ||
          closedSet.includes(neighbour[i])
        ) {
          continue; // go to next iteration this neighbour cant bse used due to it being an obstacle or already walked on (we dont want an endless loop of neighbours)
        }

        //animations
        setTimeout(() => {
          if (neighbour[i] !== targetNode) {
            this._FillSquare(neighbour[i]._gridX, neighbour[i]._gridY, "white");
          }

          if (foundPath === true && neighbour[i] === targetNode) {
            this.RetracePath(startNode, targetNode);
          }
        }, 15 * j); // second argument for settimeout = the timeout time
        // end of animations

        let distance = this.GetDistance(currentNode, neighbour[i]);

        let newMovementCostToNeighbour = currentNode.gCost + distance;
        // multiple ways to get to a nod if it isnt less it isnt optimal way to get to said node so we can skip. furthermore if this node has already been added to the openset dont add it again otherwise

        if (
          newMovementCostToNeighbour < neighbour[i].gCost ||
          openSet.includes(neighbour[i]) === false
        ) {
          neighbour[i].gCost = newMovementCostToNeighbour;
          neighbour[i].hCost = this.GetDistance(neighbour[i], targetNode);
          neighbour[i]._parent = currentNode;
          //neighbour = this.getNeighbours(currentNode);

          if (openSet.includes(neighbour[i]) === false) {
            j++;
            openSet.push(neighbour[i]);
          }
        }
      }
    } // end of while
  } // end of findpath

  RetracePath(startNode, endNode) {
    let path = [];
    let currentNode = endNode; // can minus 1 if we want ot overwrite the start

    while (currentNode !== startNode) {
      path.push(currentNode);
      if (currentNode._parent === undefined) {
        break;
      }
      currentNode = currentNode._parent;
    }
    //path.Reverse();
    let path2 = path.reverse();
    // the path.length-1 = we dont overwrite the end
    for (let i = 0; i < path.length - 1; i++) {
      setTimeout(() => {
        this._FillSquare(path2[i]._gridX, path2[i]._gridY, "#2185d0");
      }, 25 * i);
    }
  } // end of retrace path
} // end of class

export default AStar;
