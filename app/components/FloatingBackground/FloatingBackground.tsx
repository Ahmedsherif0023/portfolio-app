import React from "react";
import "./FloatingBackground.css";

const FloatingBackground = () => {
  return (
    <div className="floating-background">
      {/* Geometric shapes */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>
      <div className="shape shape-4"></div>
      
      {/* Floating icons - using emojis or your own icons */}
      <div className="icon icon-1">✏️</div>
      <div className="icon icon-2">💻</div>
      <div className="icon icon-3">🔗</div>
      <div className="icon icon-4">🎨</div>
      <div className="icon icon-5">❤</div>
      <div className="icon icon-6">☕</div>
      <div className="icon icon-7">🦾</div>
      <div className="icon icon-8">⚡</div>
    </div>
  );
};

export default FloatingBackground;