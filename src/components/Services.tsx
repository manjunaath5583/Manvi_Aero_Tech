import React from 'react';
import { Camera, Cpu, Building2, Leaf, Shield, Video } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Aerial Photography',
    description: 'High-resolution aerial imaging for mapping, surveying, and creative projects.'
  },
  {
    icon: Building2,
    title: 'Industrial Inspection',
    description: 'Comprehensive drone inspection services for infrastructure and facilities.'
  },
  {
    icon: Leaf,
    title: 'Agricultural Solutions',
    description: 'Precision agriculture with crop monitoring and spraying solutions.'
  },
  {
    icon: Shield,
    title: 'Security & Surveillance',
    description: 'Advanced aerial surveillance systems for security applications.'
  },
  {
    icon: Video,
    title: 'Cinematography',
    description: 'Professional aerial videography for films and events.'
  },
  {
    icon: Cpu,
    title: 'Custom Solutions',
    description: 'Tailored drone solutions for specific industry needs.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive drone solutions tailored to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}