import { useState } from "react"
import './Tree.css';

export default function Tree({tree_data}) {

    //const [s, sets] = useState(tree_data)
    let render = () => {
        if (tree_data == null) {
            return <></>
        }
        if (tree_data.left && tree_data.right) {
            return (
            <div className="node">
                <div className="id">{tree_data.id}</div>
                <div className="children">
                    <div className="left-child">
                        <Tree tree_data={tree_data.left} />
                    </div>
                    <div className="right-child">
                        
                        <Tree tree_data={tree_data.right} />
                    </div>
                </div>
            </div>
            )
        }
        if (tree_data.left) {
            return (
            <div className="node">
                <div className="id">{tree_data.id}</div>
                <div className="children">
                    <div className="left-child">
                        <Tree tree_data={tree_data.left} />
                    </div>
                </div>
            </div>
            )
        }
        if (tree_data.right) {
            return (
            <div className="node">
                <div className="id">{tree_data.id}</div>
                <div className="children">
                    <div className="right-child">
                        <Tree tree_data={tree_data.right} />
                    </div>
                </div>
            </div>
            )
        }
        else  {
            return (
            <div className="node">
                <div className="id">{tree_data.id}</div>
            </div>
            )
        }
    }
    

    return render()
}