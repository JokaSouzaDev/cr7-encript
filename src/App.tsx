import { useState } from "react";
import Background3D from "./components/Background3D";
import HolographicKey from "./components/HolographicKey";
import EncrypterCard from "./components/EncrypterCard";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative min-h-screen w-screen flex flex-col items-center justify-between overflow-hidden bg-white">
      <Background3D />
      
      {showSplash ? (
        <HolographicKey onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          {/* Div Invisível só para ajudar a centralizar o card no espaço restante */}
          <div className="flex-1 flex items-center justify-center w-full">
            <main className="z-10 w-full flex justify-center items-center">
              <EncrypterCard />
            </main>
          </div>

          {/* O GLORIOSO FOOTER DO PAPAI CRIS */}
          <footer className="w-full z-10 bg-neutral-50 border-t-4 border-red-600 py-3 px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
            <div>
              <p className="text-xs font-black tracking-tight text-neutral-800 font-sans italic">
                CR7 ENCRIPT SYSTEM <span className="text-red-600">#7</span>
              </p>
              <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mt-0.5">
                © DESENVOLVIDO PELO JOKA NÉ VIDA. TODOS OS RECORDES RESERVADOS. <span className="text-red-600">SIUUUUU!</span>
              </p>
            </div>
            
            {/* Hashtags e Marcas do Robozão */}
            <div className="flex gap-4 items-center">
              <span className="text-xs font-black italic text-red-600 tracking-tighter animate-pulse">
                #SIUUUUU
              </span>
              <span className="text-[10px] font-mono font-bold bg-red-600 text-white px-2 py-0.5 rounded">
                PIEDADE
              </span>
              <span className="text-[10px] font-mono font-bold bg-neutral-900 text-white px-2 py-0.5 rounded">
                CR7 DRIVE
              </span>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}