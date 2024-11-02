import React from 'react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="Drone flying in sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Leading the Future of<br />
            <span className="text-blue-400">Aerial Innovation</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Pioneering drone solutions for industry, agriculture, and surveillance. 
            Experience the next generation of aerial technology with Manvi Aero Tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors text-center">
              Get Started
            </a>
            <a href="#services" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors text-center">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}