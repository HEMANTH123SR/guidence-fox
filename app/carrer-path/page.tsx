"use client";
import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Choose Your Path" },
    type: "input",
  },
  { id: "2", position: { x: -200, y: 100 }, data: { label: "Commerce" } },
  { id: "3", position: { x: 200, y: 100 }, data: { label: "Engineering" } },
  { id: "4", position: { x: -300, y: 200 }, data: { label: "Accounting" } },
  { id: "5", position: { x: -100, y: 200 }, data: { label: "Finance" } },
  {
    id: "6",
    position: { x: 100, y: 200 },
    data: { label: "Computer Science" },
  },
  {
    id: "7",
    position: { x: 300, y: 200 },
    data: { label: "Electrical Engineering" },
  },
  {
    id: "8",
    position: { x: -300, y: 300 },
    data: { label: "CPA Certification" },
  },
  {
    id: "9",
    position: { x: -100, y: 300 },
    data: { label: "Investment Banking" },
  },
  {
    id: "10",
    position: { x: 100, y: 300 },
    data: { label: "Software Development" },
  },
  { id: "11", position: { x: 300, y: 300 }, data: { label: "Robotics" } },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
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
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
}
