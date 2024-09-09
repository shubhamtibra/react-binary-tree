import logo from './logo.svg';
import './App.css';
import Tree from './Tree';
import { useState } from 'react';

class TreeNode {
  constructor(id, left = null, right = null) {
    this.id = id
    this.left = left
    this.right = right
  }
}

class BST {
  constructor(copyTree=null) {
    if (copyTree != null) {
      this.root = copyTree.root
    }
    else{
      this.root = null
    }
  }
  

  insert(id) {
    if (this.root == null) {
      this.root = new TreeNode(id)
      return
    }
    let curr = this.root
    let prev = null
    while (curr != null) {
      if (id < curr.id) {
        prev = curr
        curr = curr.left
      } else {
        prev = curr
        curr = curr.right
      }
    }
    if (id <= prev.id) {
      prev.left = new TreeNode(id)
    }
    if (id > prev.id) {
      prev.right = new TreeNode(id)
    }
  }
}

function Button({ handlAdd }) {
  const [nodeId, setNodeId] = useState();
  return (
    <>
      <label>
        Node Id:
        <input
          value={nodeId}
          onChange={e => setNodeId(e.target.value)}
          type="number"
        />
        <button onClick={() => handlAdd(parseInt(nodeId))}>
          Add Node to BST
        </button>
      </label>
    </>)
}

function App() {
  const [treeState, setTreeState] = useState(new BST())
  function handlAdd(nodeId) {
    setTreeState(prevTreeState => {
      const newState = new BST(prevTreeState)
      newState.insert(nodeId)
      return newState
    })
  }
  return (
    <>
      <Button handlAdd={handlAdd}>
      </Button>
      <Tree tree_data={treeState.root}>
      </Tree>
    </>);
}

export default App;
