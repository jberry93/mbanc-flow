import { useCallback } from "react";
import * as ReactFlow from 'reactflow';
const { addEdge, Background, Controls, MiniMap, useEdgesState, useNodesState } = ReactFlow;
import "reactflow/dist/style.css";

import initialNodes from '../data/nodes.json';
import initialEdges from '../data/edges.json';

export function FlowChart() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes as ReactFlow.Node<any>[]);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges as ReactFlow.Edge<any>[]);

    const onConnect = useCallback(
        (params: ReactFlow.Edge<any> | ReactFlow.Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
        >
            <MiniMap/>
            <Controls/>
            <Background/>
        </ReactFlow>
    );
}
