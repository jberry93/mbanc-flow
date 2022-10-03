import { useCallback } from "react";
import ReactFlow, { addEdge, Background, Connection, Controls, Edge, MiniMap, Node, useEdgesState, useNodesState } from "reactflow";
import "reactflow/dist/style.css";

import initialNodes from '../data/nodes.json';
import initialEdges from '../data/edges.json';

export function FlowChart() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes as Node<any>[]);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges as Edge<any>[]);

    const onConnect = useCallback(
        (params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)),
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
