'use client';

import React, { useState, useCallback, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  Connection,
  BackgroundVariant,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import { Play, BookOpen, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import roadmapData  from '../data/roadmapData';
// interface RoadmapNodeData extends RoadmapData {
//   onNodeClick: (data: RoadmapData) => void;
// }

// Tipos para os dados do roadmap
interface RoadmapData {
  title: string;
  description: string;
  freeResources: Array<{
    title: string;
    url: string;
    type: 'video' | 'article' | 'course';
  }>;
  paidResources: Array<{
    title: string;
    url: string;
    platform: string;
    price?: string;
  }>;
}
type RoadmapKey = 'frontend' | 'backend' | 'fullstack' | 'cybersecurity' | 'mobile' | 'devops';
type RoadmapNodeType = Node;
type RoadmapEdgeType = Edge;

// Componente customizado para os nós do roadmap
const RoadmapNode = ({ data }: { data: RoadmapData & { onNodeClick: (data: RoadmapData) => void } }) => {


  return (
    <div 
      className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400 cursor-pointer hover:border-blue-500 transition-colors"
      onClick={() => data.onNodeClick(data)}
    >
      <div className="flex items-center">
        <div className="ml-2">
          <div className="text-lg font-bold">{data.title}</div>
        </div>
      </div>
    </div>
  );
};

// Tipos de nós customizados
const nodeTypes = {
  roadmapNode: RoadmapNode,
};

export default function Home() {
  
  useEffect(()=>{
console.log("roadmapData:",roadmapData)
},[roadmapData])
  
const handleshowRoadmap:any = (()=>{
  console.log(roadmapData)
})
  const [currentRoadmap, setCurrentRoadmap] = useState<RoadmapKey>('frontend');
  const [selectedNode, setSelectedNode] = useState<RoadmapData | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(currentRoadmap)

  // Obter dados do roadmap atual
   const currentData = roadmapData?.[currentRoadmap as keyof typeof roadmapData];

  if (!currentData) {
    return (
      <>
      <button className='cursor-pointer' onClick={handleshowRoadmap} >SHOW</button>
    <div className="p-4 text-red-500">Roadmap não encontrado

    </div></>);
  }
// if (!currentData) {
//   return <div>Roadmap não encontrado</div>;
// }\\
  if (!roadmapData || !roadmapData[currentRoadmap]) {
    return <div>Roadmap não encontrado ou dados não carregados</div>;
  }
  const [nodes, setNodes, onNodesChange] = useNodesState<RoadmapNodeType>(currentData.nodes || []);
  const [edges, setEdges, onEdgesChange] = useEdgesState<RoadmapEdgeType>(currentData.edges || []);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const handleNodeClick = useCallback((data: RoadmapData) => {
    setSelectedNode(data);
    setSidebarOpen(true);
  }, []);

  const handleRoadmapChange = useCallback((roadmapId: string) => {
    const newData = roadmapData[roadmapId as keyof typeof roadmapData];
    setCurrentRoadmap(roadmapId as RoadmapKey);
    setNodes(newData.nodes);
    setEdges(newData.edges);
    setSidebarOpen(false);
  }, [setNodes, setEdges]);

  // Atualizar os nós com a função de callback
  React.useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data: {
          ...node.data,
          onNodeClick: handleNodeClick,
        },
      }))
    );
  }, [handleNodeClick, setNodes]);

  return (
    <div className="w-full h-screen flex">
      {/* Navigation Sidebar */}
      <Navigation 
        currentRoadmap={currentRoadmap} 
        onRoadmapChange={handleRoadmapChange} 
      />

      {/* Área principal do roadmap */}
      <div className="flex-1 relative md:ml-64">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
        
        {/* Header */}
        <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-sm">
          <h1 className="text-2xl font-bold text-gray-800">{currentData.title}</h1>
          <p className="text-gray-600">{currentData.description}</p>
          <p className="text-sm text-gray-500 mt-2">Clique nos blocos para ver recursos de estudo</p>
        </div>
      </div>

      {/* Content Sidebar */}
      {sidebarOpen && selectedNode && (
        <div className="w-96 bg-white border-l border-gray-200 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{selectedNode.title}</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <p className="text-gray-600 mb-6">{selectedNode.description}</p>
          
          {/* Recursos Gratuitos */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Play className="w-5 h-5 mr-2 text-green-600" />
              Recursos Gratuitos
            </h3>
            <div className="space-y-2">
              {selectedNode.freeResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{resource.title}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-sm text-gray-500 capitalize">{resource.type}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Recursos Pagos */}
          {selectedNode.paidResources.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                Cursos Recomendados
              </h3>
              <div className="space-y-2">
                {selectedNode.paidResources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{resource.title}</span>
                      <ExternalLink className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{resource.platform}</span>
                      {resource.price && <span className="font-semibold">{resource.price}</span>}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

