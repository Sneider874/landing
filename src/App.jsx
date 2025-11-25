import React, { useState, useEffect } from 'react';
import { ChevronDown, Droplets, TrendingUp, Shield, Users, Mail, Github, Linkedin, Menu, X } from 'lucide-react';
import Esteban from './images/Esteban_perfil.png';
import Juan_carlos from './images/Juancarlos_perfil.png';
import Daniel from './images/Daniel_perfil.png';
import logo from './images/Logo.png';
import Sneider from './images/Sneider_perfil.png';
import Edwar from './images/Edwar_perfil.png';
import quantumLogo from './images/Quantum_logo.png';
import uniminutoLogo from './images/Uniminuto_logo.jpeg';
import isumLogo from './images/Isum_logo.png';

export default function SkyfusionLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'features', 'business', 'team', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const teamMembers = [
    {
      name: "Daniel Andrade",
      role: "Ciencia de datos e inteligencia artificial",
      image: Daniel,
      email: "danielandrade.0937@gmail.com",
      linkedin: "https://www.linkedin.com/in/danielandrade0937",
      github: "https://github.com/Dany0937"
    },
    {
      name: "Sneider Murillo",
      role: "Desarrollo frontend y backend",
      image: Sneider,
      email: "niesmurillgon@gmail.com",
      linkedin: "https://www.linkedin.com/in/sneider-murillo-gonzalez-791a73276",
      github: "https://github.com/Sneider874"
    },
    {
      name: "Edwar Ibague",
      role: "Tester QA",
      image: Edwar,
      email: "edwaribague@gmail.com",
      linkedin: "https://www.linkedin.com/in/edwar-ibague-937419343",
      github: "https://github.com/edwardibague"
    },
    {
      name: "Esteban Morales",
      role: "Asesor Área de programación",
      image: Esteban,
      email: "esteban.morales@uniminuto.edu", 
      linkedin: "https://www.linkedin.com/in/estebanmorales84",
      github: "https://github.com/estemoca"
    },
    {
      name: "Juan Carlos González",
      role: "Asesor área de investigación",
      image: Juan_carlos,
      email: "juan.gonzalez.s@uniminuto.edu",
      linkedin: "https://www.linkedin.com/in/juan-carlos-gonz%C3%A1lez-62643a36a/",
      github: ""
    }
  ];

  const features = [
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "Catálogo Interactivo",
      description: "Acceso a un extenso catálogo de estudios hidrológicos con visualización en mapas interactivos de puntos de interés."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Modelos Predictivos",
      description: "Algoritmos avanzados de machine learning para predicción y análisis de dinámicas hídricas personalizables."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Seguridad y Cumplimiento",
      description: "Plataforma que cumple con normativas internacionales, garantizando seguridad y privacidad de datos."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Gestión Institucional",
      description: "Sistema completo de gestión de usuarios, suscripciones y pagos para entidades gubernamentales."
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md shadow-2xl' : 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-md drop-shadow-xl'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="relative drop-shadow-xl">
                <img src={logo} alt="Skyfusion Logo" className="w-40 h-32 object-contain brightness-110 filter" />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
                Skyfussion Analytics
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'features', 'business', 'team', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-cyan-400 transition-colors ${activeSection === item ? 'text-cyan-400' : 'text-slate-200'}`}
                >
                  {item === 'home' ? 'Inicio' : item === 'about' ? 'Acerca' : item === 'features' ? 'Características' : item === 'business' ? 'Negocio' : item === 'team' ? 'Equipo' : 'Contacto'}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-cyan-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-700 py-4">
              <div className="flex flex-col space-y-3">
                {['home', 'about', 'features', 'business', 'team', 'contact'].map(item => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-left px-4 py-2 rounded-lg capitalize transition-colors ${activeSection === item ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-200 hover:bg-slate-800'}`}
                  >
                    {item === 'home' ? 'Inicio' : item === 'about' ? 'Acerca' : item === 'features' ? 'Características' : item === 'business' ? 'Negocio' : item === 'team' ? 'Equipo' : 'Contacto'}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-slate-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
                Skyfussion Analytics
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Plataforma Inteligente de Gestión y Análisis Hidrológico para Entidades Gubernamentales
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Transformando la gestión de recursos hídricos mediante inteligencia artificial, 
              visualización avanzada y un catálogo interactivo de estudios hidrológicos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
              >
                Conocer Más
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 border border-slate-700"
              >
                Contactar
              </button>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Acerca del Proyecto
              </span>
            </h2>
            
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 mb-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">¿Qué es Skyfussion?</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Skyfussion SaaS es un software como servicio orientado al sector público que implementa 
                un catálogo interactivo de productos sobre estudios hidrológicos de ríos. Los usuarios 
                acceden a un mapa de puntos de interés, eligen el caso de estudio, y deciden entre 
                modelos predictivos listos o configuraciones personalizadas.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Ofrece compra de productos bajo demanda o suscripción periódica, facilitando la 
                planificación territorial, monitoreo ambiental y cumplimiento regulatorio.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 mb-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Problemática</h3>
              <p className="text-slate-300 leading-relaxed">
                La gestión hídrica enfrenta desafíos de información fragmentada y baja capacidad de 
                predicción, dificultando acciones efectivas para prevención, mitigación y planeación 
                en las cuencas fluviales. Las entidades gubernamentales requieren herramientas que 
                integren ciencia de datos, inteligencia artificial y visualización avanzada.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Objetivo General</h3>
              <p className="text-slate-300 leading-relaxed">
                Diseñar, implementar y lanzar una plataforma SaaS con catálogo de productos de 
                inteligencia ambiental, que permita a los usuarios institucionales seleccionar puntos 
                de interés sobre un mapa de ríos, analizar modelos predictivos o solicitar estudios 
                personalizados sobre recursos hídricos, gestionando la adquisición de productos mediante 
                suscripción o pago por uso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Características Principales
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section id="business" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Modelo de Negocio
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">SaaS - Suscripciones</h3>
              <p className="text-slate-300 mb-4">Planes escalonados: Free/Demo, Pro y Enterprise con acceso progresivo a funcionalidades.</p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• Ingresos recurrentes mensuales/anuales</li>
                <li>• Escalabilidad automática</li>
                <li>• Actualizaciones continuas</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/20 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Licenciamiento Institucional</h3>
              <p className="text-slate-300 mb-4">Licencias anuales para ministerios, agencias ambientales y universidades.</p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• Contratos de alto valor</li>
                <li>• Soporte técnico dedicado</li>
                <li>• Entrenamiento personalizado</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-900/20 to-cyan-900/20 rounded-xl p-6 border border-slate-500/30">
              <h3 className="text-xl font-bold mb-3 text-slate-300">Consultoría Premium</h3>
              <p className="text-slate-300 mb-4">Servicios de análisis avanzado y desarrollo de proyectos personalizados.</p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• Proyectos ad-hoc</li>
                <li>• Capacitación especializada</li>
                <li>• Integración personalizada</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/20 to-slate-900/20 rounded-xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Marketplace de Datos</h3>
              <p className="text-slate-300 mb-4">Repositorio comercial de modelos prediseñados y datos procesados.</p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• Venta por producto digital</li>
                <li>• Modelos prediseñados</li>
                <li>• Datos satelitales procesados</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Alianzas Estratégicas</h3>
              <p className="text-slate-300 mb-4">Acuerdos B2G y B2B con entidades gubernamentales y empresas.</p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• Proyectos piloto</li>
                <li>• Cofinanciación</li>
                <li>• Posicionamiento sectorial</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-900/20 to-blue-900/20 rounded-xl p-6 border border-slate-500/30">
              <h3 className="text-xl font-bold mb-3 text-slate-300">Presupuesto</h3>
              <p className="text-slate-300 mb-4">Inversión total estimada para desarrollo, validación y despliegue.</p>
              <p className="text-3xl font-bold text-cyan-400">$150M COP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Nuestro Equipo
            </span>
          </h2>
          
          <div className="flex flex-col items-center gap-8">
            {/* Primera fila: 3 integrantes centrados */}
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                {teamMembers.slice(0, 3).map((member, index) => (
                <div 
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 text-center"
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-cyan-500/30"
                  />
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-3">
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors" title="Email">
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" title="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" title="GitHub">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
              </div>
            </div>
            
            {/* Segunda fila: 2 asesores centrados */}
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
                {teamMembers.slice(3, 5).map((member, index) => (
                <div 
                  key={index + 3}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 text-center"
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-cyan-500/30"
                  />
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-3">
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors" title="Email">
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" title="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" title="GitHub">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ¿Interesado en Skyfussion?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Contáctanos para conocer más sobre cómo podemos transformar la gestión de recursos hídricos en tu entidad
            </p>
            
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <span>contacto@skyfussionanalytics.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-slate-300">
                  <Users className="w-6 h-6 text-cyan-400" />
                  <span>Corporacion Universitaria Uniminuto de Dios - Ibagué</span>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50">
                  Solicitar Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 py-12 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <div className="text-center">
            {/* Logos */}
            <div className="flex flex-col items-center gap-8 mb-8">
              <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
                <div className="flex flex-col items-center">
                  <img src={logo} alt="Skyfusion Logo" className="w-40 h-40 object-contain mb-2 flex-shrink-0" />
                  <span className="text-s font-semibold text-cyan-400">Skyfusion</span>
                </div>
                <div className="hidden sm:block h-12 w-px bg-slate-600"></div>
                <div className="flex flex-col items-center">
                  <img src={quantumLogo} alt="Quantum Logo" className="w-40 h-40 object-contain mb-2 flex-shrink-0" />
                  <span className="text-s font-semibold text-blue-400">Quantum</span>
                </div>
                <div className="hidden sm:block h-12 w-px bg-slate-600"></div>
                <div className="flex flex-col items-center">
                  <a  href="https://www.uniminuto.edu/centro-sur">
                  < img  src={uniminutoLogo} alt="Uniminuto Logo" className="w-40 h-40 object-contain mb-2 flex-shrink-0" />
                  <span  className="text-s font-semibold text-blue-400">Uniminuto</span>
                  </a>
                </div>
                <div className="hidden sm:block h-12 w-px bg-slate-600"></div>
                <div className="flex flex-col items-center">
                  <a href="https://www.uniminuto.edu/oferta-academica/ingenieria-de-sistemas/ingenieria-de-sistemas-5">
                  <img src={isumLogo} alt="ISUM Logo" className="w-40 h-40 object-contain mb-2 flex-shrink-0" />
                  <span className="text-s font-semibold text-cyan-300">ISUM</span>
                  </a>
                </div>
              </div>
              <p className="text-slate-300 text-sm max-w-2xl">
                Plataforma colaborativa desarrollada por el Semillero de Investigación Quantum
              </p>
            </div>

            {/* Info */}
            <div className="border-t border-slate-700 pt-6">
              <p className="text-slate-400 text-sm mb-2">
                © 2025 Skyfussion Analytics. Plataforma de Gestión Hidrológica Inteligente.
              </p>
              <p className="text-slate-500 text-xs">
                Corporación Universitaria Minuto de Dios - Programa de Ingeniería de Sistemas
              </p>
              <p className="text-slate-600 text-xs mt-3">
                Desarrollado con React • Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

