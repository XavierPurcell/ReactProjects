class NodeGraph {
  constructor(_walkNode, _gridX, _gridY, _parent) {
    // create varibles that we can call upon later
    this._parent = _parent;
    this._walkNode = _walkNode;
    this._gridX = _gridX;
    this._gridY = _gridY;

    // we create these ones two with default values
    this.hCost = 0;
    this.gCost = 0;
    this._seeker = false;
    this._target = false;
  }

  // call this to get the fcost of this node
  fCost() {
    return this.gCost + this.hCost;
  }
}

export default NodeGraph;
