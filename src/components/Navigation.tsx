'use client';

import React, { useState } from 'react';
import { Menu, X, Home, BookOpen, Users, Settings } from 'lucide-react';

interface NavigationProps {
  currentRoadmap: string;
  onRoadmapChange: (roadmap: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentRoadmap, onRoadmapChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const roadmaps = [
    { id: 'frontend', name: 'Frontend Development', icon: '🎨' },
    { id: 'backend', name: 'Backend Development', icon: '⚙️' },
    { id: 'fullstack', name: 'Full Stack Development', icon: '🚀' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒' },
    { id: 'mobile', name: 'Mobile Development', icon: '📱' },
    { id: 'devops', name: 'DevOps', icon: '🔧' },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-lg md:hidden"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Roadmaps</h2>
          
          <nav className="space-y-2">
            {roadmaps.map((roadmap) => (
              <button
                key={roadmap.id}
                onClick={() => {
                  onRoadmapChange(roadmap.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                  currentRoadmap === roadmap.id
                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <span className="text-2xl mr-3">{roadmap.icon}</span>
                <span className="font-medium">{roadmap.name}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
              >
                <Home className="w-5 h-5 mr-3" />
                <span>Início</span>
              </a>
              <a
                href="#"
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-3" />
                <span>Meus Cursos</span>
              </a>
              <a
                href="#"
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
              >
                <Users className="w-5 h-5 mr-3" />
                <span>Comunidade</span>
              </a>
              <a
                href="#"
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
              >
                <Settings className="w-5 h-5 mr-3" />
                <span>Configurações</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;

