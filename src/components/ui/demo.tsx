import React, { useState } from "react";
import Component from "@/components/ui/dark-mode-toggle";
import { LiquidButton } from "./liquid-glass-button";

export default function DemoOne() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center space-x-2 bg-gray-900 rounded-full px-6 py-3 border border-gray-800">
        <span className="text-xl">🌞</span>
        <span className="text-xl">✨</span>
        <span className="text-white text-xl font-medium tracking-wide mr-4 ml-2">Theme</span>
        <Component checked={isDark} onChange={() => setIsDark(!isDark)} />
      </div>
      <div className="relative flex items-center justify-center p-8"> 
        <LiquidButton>
          Liquid Glass
        </LiquidButton> 
      </div>
    </div>
  );
}

