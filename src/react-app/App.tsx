import React, { useState } from 'react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText('play.zalendral.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="page-container">
        {/* Header */}
        <header className="header">
          <div className="container">
            <div className="header-content">
              <div className="logo">
                <div className="logo-icon">⚔️</div>
                <div className="logo-text">
                  <span className="logo-title">ZALENDRAL</span>
                  <span className="logo-subtitle">Servidor Brasileiro</span>
                </div>
              </div>

              <button 
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>

              <nav className={`nav ${mobileMenuOpen ? 'nav-mobile-open' : ''}`}>
                <a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Início</a>
                <a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
                <a href="#recursos" onClick={() => setMobileMenuOpen(false)}>Recursos</a>
                <a href="#jogar" onClick={() => setMobileMenuOpen(false)}>Como Jogar</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section id="inicio" className="hero">
          <div className="hero-bg"></div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">🇧🇷 Servidor Brasileiro de Hytale</div>
              <h1 className="hero-title">
                Bem-vindo ao Reino de<br />
                <span className="gradient-text">Zalendral</span>
              </h1>
              <p className="hero-description">
                Uma experiência única em Hytale. Explore, construa e aventure-se 
                com seus amigos em um mundo PvE repleto de possibilidades.
              </p>
              
              <div className="ip-container">
                <div className="ip-label">IP do Servidor</div>
                <button className="ip-button" onClick={copyIP}>
                  <span className="ip-text">play.zalendral.com</span>
                  <span className="ip-icon">{copied ? '✓' : '📋'}</span>
                </button>
                {copied && <div className="ip-copied">IP copiado!</div>}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="section-about">
          <div className="container">
            <h2 className="section-title">Sobre Zalendral</h2>
            <p className="section-subtitle">Um servidor pensado para a comunidade brasileira</p>
            
            <div className="about-grid">
              <div className="about-card">
                <div className="about-icon">🇧🇷</div>
                <h3>100% Brasileiro</h3>
                <p>Servidor hospedado no Brasil com baixíssima latência para jogadores brasileiros. Comunidade ativa e receptiva.</p>
              </div>
              
              <div className="about-card">
                <div className="about-icon">🛡️</div>
                <h3>Modo PvE</h3>
                <p>Foco em exploração, construção e cooperação. Jogue tranquilo com seus amigos sem preocupações com PvP.</p>
              </div>
              
              <div className="about-card">
                <div className="about-icon">⚙️</div>
                <h3>Mods & Plugins</h3>
                <p>Sistema customizado com mods e plugins dedicados para melhorar sua experiência de jogo medieval.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="recursos" className="section-features">
          <div className="container">
            <h2 className="section-title">Recursos do Servidor</h2>
            <p className="section-subtitle">Experiências únicas esperam por você</p>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🏰</div>
                <h3>Construção Medieval</h3>
                <p>Construa castelos, vilas e fortalezas com nossos blocos e ferramentas customizadas.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🗺️</div>
                <h3>Mundo Vasto</h3>
                <p>Explore biomas únicos, cavernas misteriosas e ruínas antigas em um mapa expansivo.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Jogue com Amigos</h3>
                <p>Sistema de grupos facilitado para você e seus amigos construírem juntos.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🎭</div>
                <h3>Proteção</h3>
                <p>Proteção de terreno usando easyclaim.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⚔️</div>
                <h3>Dungeons PvE</h3>
                <p>Enfrente chefes e criaturas em dungeons cooperativas desafiadoras.</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">💎</div>
                <h3>Mods/Plugins Dedicados</h3>
                <p>Os mods e plugins do Zalendral são dedicados e exclusivos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Play Section */}
        <section id="jogar" className="section-howto">
          <div className="container">
            <h2 className="section-title">Como Jogar</h2>
            <p className="section-subtitle">Siga estes passos simples para começar sua aventura</p>
            
            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Adquira Hytale</h3>
                <p>Certifique-se de ter o jogo Hytale instalado em seu computador.</p>
              </div>

              <div className="step-arrow">→</div>

              <div className="step">
                <div className="step-number">2</div>
                <h3>Copie o IP</h3>
                <p>Clique no IP <strong>play.zalendral.com</strong> acima para copiar.</p>
              </div>

              <div className="step-arrow">→</div>

              <div className="step">
                <div className="step-number">3</div>
                <h3>Conecte-se</h3>
                <p>Cole o IP no menu multiplayer do Hytale e conecte-se ao servidor.</p>
              </div>

              <div className="step-arrow">→</div>

              <div className="step">
                <div className="step-number">4</div>
                <h3>Divirta-se!</h3>
                <p>Comece sua jornada em Zalendral e explore tudo que oferecemos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-cta">
          <div className="container">
            <div className="cta-box">
              <h2>Pronto para a Aventura?</h2>
              <p>Junte-se à comunidade de Zalendral e comece sua jornada medieval hoje mesmo!</p>
              <button className="cta-button" onClick={copyIP}>
                {copied ? '✓ IP Copiado!' : 'Copiar IP do Servidor'}
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-logo">
                <div className="logo-icon">⚔️</div>
                <div>
                  <div className="footer-title">ZALENDRAL</div>
                  <div className="footer-subtitle">Servidor Brasileiro de Hytale</div>
                </div>
              </div>
              
              <div className="footer-info">
                <p>&copy; 2026 Zalendral.</p>
                <p className="footer-ip">IP: play.zalendral.com</p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #e5e7eb;
          background: #0a0a0a;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .page-container {
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          font-size: 32px;
          filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.5));
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-title {
          font-size: 24px;
          font-weight: 900;
          letter-spacing: 1px;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-subtitle {
          font-size: 11px;
          color: #9ca3af;
          font-weight: 600;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          padding: 8px;
        }

        .nav {
          display: flex;
          gap: 30px;
        }

        .nav a {
          color: #d1d5db;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          transition: width 0.3s ease;
        }

        .nav a:hover {
          color: #a855f7;
        }

        .nav a:hover::after {
          width: 100%;
        }

        /* Hero Section */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 80px;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%),
            radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%);
        }

        .hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          padding: 40px 20px;
        }

        .hero-badge {
          display: inline-block;
          padding: 10px 20px;
          background: rgba(168, 85, 247, 0.2);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          color: #d8b4fe;
          margin-bottom: 30px;
          backdrop-filter: blur(10px);
        }

        .hero-title {
          font-size: 64px;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 25px;
          letter-spacing: -1px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: dr// src/App.tsx

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/hono.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("unknown");

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<a href="https://hono.dev/" target="_blank">
					<img src={honoLogo} className="logo cloudflare" alt="Hono logo" />
				</a>
				<a href="https://workers.cloudflare.com/" target="_blank">
					<img
						src={cloudflareLogo}
						className="logo cloudflare"
						alt="Cloudflare logo"
					/>
				</a>
			</div>
			<h1>Vite + React + Hono + Cloudflare</h1>
			<div className="card">
				<button
					onClick={() => setCount((count) => count + 1)}
					aria-label="increment"
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<div className="card">
				<button
					onClick={() => {
						fetch("/api/")
							.then((res) => res.json() as Promise<{ name: string }>)
							.then((data) => setName(data.name));
					}}
					aria-label="get name"
				>
					Name from API is: {name}
				</button>
				<p>
					Edit <code>worker/index.ts</code> to change the name
				</p>
			</div>
			<p className="read-the-docs">Click on the logos to learn more</p>
		</>
	);
}

export default App;
op-shadow(0 0 30px rgba(168, 85, 247, 0.5));
        }

        .hero-description {
          font-size: 20px;
          color: #9ca3af;
          margin-bottom: 50px;
          line-height: 1.8;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .ip-container {
          position: relative;
          display: inline-block;
        }

        .ip-label {
          font-size: 13px;
          color: #9ca3af;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: 1px;
        }

        .ip-button {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 18px 35px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2));
          border: 2px solid rgba(168, 85, 247, 0.4);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          font-family: 'Courier New', monospace;
        }

        .ip-button:hover {
          transform: translateY(-2px);
          border-color: rgba(168, 85, 247, 0.8);
          box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);
        }

        .ip-text {
          font-size: 22px;
          font-weight: 700;
          color: white;
          letter-spacing: 1px;
        }

        .ip-icon {
          font-size: 20px;
        }

        .ip-copied {
          position: absolute;
          bottom: -35px;
          left: 50%;
          transform: translateX(-50%);
          padding: 8px 16px;
          background: rgba(34, 197, 94, 0.9);
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          color: white;
          animation: fadeIn 0.3s ease;
        }

        /* Sections */
        .section-about,
        .section-features,
        .section-howto,
        .section-cta {
          padding: 100px 20px;
          position: relative;
        }

        .section-title {
          font-size: 48px;
          font-weight: 900;
          text-align: center;
          margin-bottom: 15px;
          background: linear-gradient(135deg, #ffffff, #d1d5db);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          text-align: center;
          font-size: 18px;
          color: #9ca3af;
          margin-bottom: 60px;
        }

        /* About Grid */
        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .about-card {
          padding: 40px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .about-card:hover {
          transform: translateY(-5px);
          border-color: rgba(168, 85, 247, 0.5);
          box-shadow: 0 20px 40px rgba(168, 85, 247, 0.2);
        }

        .about-icon {
          font-size: 48px;
          margin-bottom: 20px;
          filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.5));
        }

        .about-card h3 {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 15px;
          color: #f3f4f6;
        }

        .about-card p {
          color: #9ca3af;
          line-height: 1.7;
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .feature-card {
          padding: 35px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(168, 85, 247, 0.3);
          transform: translateY(-3px);
        }

        .feature-icon {
          font-size: 40px;
          margin-bottom: 18px;
        }

        .feature-card h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #f3f4f6;
        }

        .feature-card p {
          color: #9ca3af;
          font-size: 15px;
          line-height: 1.6;
        }

        /* Steps */
        .steps-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-top: 50px;
          flex-wrap: wrap;
        }

        .step {
          flex: 1;
          min-width: 200px;
          text-align: center;
          padding: 30px 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
        }

        .step-number {
          width: 60px;
          height: 60px;
          margin: 0 auto 20px;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: 900;
          color: white;
          box-shadow: 0 10px 25px rgba(168, 85, 247, 0.4);
        }

        .step h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #f3f4f6;
        }

        .step p {
          color: #9ca3af;
          font-size: 15px;
          line-height: 1.6;
        }

        .step-arrow {
          font-size: 32px;
          color: #6b7280;
          flex-shrink: 0;
        }

        /* CTA */
        .section-cta {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1));
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cta-box {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-box h2 {
          font-size: 42px;
          font-weight: 900;
          margin-bottom: 20px;
          color: #f3f4f6;
        }

        .cta-box p {
          font-size: 18px;
          color: #9ca3af;
          margin-bottom: 35px;
        }

        .cta-button {
          padding: 18px 45px;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(168, 85, 247, 0.4);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(168, 85, 247, 0.6);
        }

        /* Footer */
        .footer {
          padding: 50px 20px;
          background: rgba(0, 0, 0, 0.5);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 30px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-title {
          font-size: 20px;
          font-weight: 900;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-subtitle {
          font-size: 12px;
          color: #6b7280;
          font-weight: 600;
        }

        .footer-info {
          text-align: right;
          color: #6b7280;
          font-size: 14px;
        }

        .footer-ip {
          margin-top: 8px;
          font-family: 'Courier New', monospace;
          font-weight: 600;
          color: #9ca3af;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }

          .nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(10, 10, 10, 0.98);
            flex-direction: column;
            padding: 20px;
            gap: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .nav-mobile-open {
            display: flex;
          }

          .nav a {
            padding: 15px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .hero-title {
            font-size: 42px;
          }

          .hero-description {
            font-size: 16px;
          }

          .section-title {
            font-size: 36px;
          }

          .step-arrow {
            display: none;
          }

          .footer-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-info {
            text-align: center;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </>
  );
}