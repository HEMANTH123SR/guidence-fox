// "use client";
// import React from "react";
// import ReactFlow, { Controls, Background } from "reactflow";
// import "reactflow/dist/style.css";

// const initialNodes = [
//   {
//     id: "1",
//     position: { x: 0, y: 0 },
//     data: { label: "Choose Your Path" },
//     type: "input",
//   },
//   { id: "2", position: { x: -200, y: 100 }, data: { label: "Commerce" } },
//   { id: "3", position: { x: 200, y: 100 }, data: { label: "Engineering" } },
//   { id: "4", position: { x: -300, y: 200 }, data: { label: "Accounting" } },
//   { id: "5", position: { x: -100, y: 200 }, data: { label: "Finance" } },
//   {
//     id: "6",
//     position: { x: 100, y: 200 },
//     data: { label: "Computer Science" },
//   },
//   {
//     id: "7",
//     position: { x: 300, y: 200 },
//     data: { label: "Electrical Engineering" },
//   },
//   {
//     id: "8",
//     position: { x: -300, y: 300 },
//     data: { label: "CPA Certification" },
//   },
//   {
//     id: "9",
//     position: { x: -100, y: 300 },
//     data: { label: "Investment Banking" },
//   },
//   {
//     id: "10",
//     position: { x: 100, y: 300 },
//     data: { label: "Software Development" },
//   },
//   { id: "11", position: { x: 300, y: 300 }, data: { label: "Robotics" } },
// ];

// const initialEdges = [
//   { id: "e1-2", source: "1", target: "2" },
//   { id: "e1-3", source: "1", target: "3" },
//   { id: "e2-4", source: "2", target: "4" },
//   { id: "e2-5", source: "2", target: "5" },
//   { id: "e3-6", source: "3", target: "6" },
//   { id: "e3-7", source: "3", target: "7" },
//   { id: "e4-8", source: "4", target: "8" },
//   { id: "e5-9", source: "5", target: "9" },
//   { id: "e6-10", source: "6", target: "10" },
//   { id: "e7-11", source: "7", target: "11" },
// ];

// export default function StudentRoadmap() {
//   return (
//     <div style={{ width: "100%", height: "400px" }}>
//       <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
//         <Controls />
//         <Background color="#aaa" gap={16} />
//       </ReactFlow>
//     </div>
//   );
// }

"use client";
import React, { useState, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", data: { label: "Choose Your Path" }, position: { x: 250, y: 0 } },
  { id: "2", data: { label: "Commerce" }, position: { x: 100, y: 100 } },
  { id: "3", data: { label: "Engineering" }, position: { x: 400, y: 100 } },
];

const hiddenNodes = [
  { id: "4", data: { label: "Accounting" }, position: { x: 0, y: 200 } },
  { id: "5", data: { label: "Finance" }, position: { x: 200, y: 200 } },
  {
    id: "6",
    data: { label: "Computer Science" },
    position: { x: 300, y: 200 },
  },
  {
    id: "7",
    data: { label: "Electrical Engineering" },
    position: { x: 500, y: 200 },
  },
  { id: "8", data: { label: "CPA Certification" }, position: { x: 0, y: 300 } },
  {
    id: "9",
    data: { label: "Investment Banking" },
    position: { x: 200, y: 300 },
  },
  {
    id: "10",
    data: { label: "Software Development" },
    position: { x: 300, y: 300 },
  },
  { id: "11", data: { label: "Robotics" }, position: { x: 500, y: 300 } },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
];

const hiddenEdges = [
  { id: "e2-4", source: "2", target: "4" },
  { id: "e2-5", source: "2", target: "5" },
  { id: "e3-6", source: "3", target: "6" },
  { id: "e3-7", source: "3", target: "7" },
  { id: "e4-8", source: "4", target: "8" },
  { id: "e5-9", source: "5", target: "9" },
  { id: "e6-10", source: "6", target: "10" },
  { id: "e7-11", source: "7", target: "11" },
];

export default function StudentRoadmap() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [expandedNodes, setExpandedNodes] = useState(new Set());

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback(
    (event, node) => {
      setNodes((nds) => {
        if (expandedNodes.has(node.id)) {
          // Collapse the node
          const childrenIds = hiddenNodes
            .filter((n) =>
              hiddenEdges.some((e) => e.source === node.id && e.target === n.id)
            )
            .map((n) => n.id);
          setExpandedNodes((prev) => {
            const next = new Set(prev);
            next.delete(node.id);
            return next;
          });
          return nds.filter((n) => !childrenIds.includes(n.id));
        } else {
          // Expand the node
          const newNodes = hiddenNodes.filter((n) =>
            hiddenEdges.some((e) => e.source === node.id && e.target === n.id)
          );
          const newEdges = hiddenEdges.filter((e) => e.source === node.id);
          setEdges((eds) => [...eds, ...newEdges]);
          setExpandedNodes((prev) => {
            const next = new Set(prev);
            next.add(node.id);
            return next;
          });
          return [...nds, ...newNodes];
        }
      });
    },
    [setNodes, setEdges, expandedNodes]
  );

  return (
    <div style={{ width: "100%", height: "95vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
      >
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}
