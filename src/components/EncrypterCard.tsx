import { useState } from "react";
import { encrypt, decrypt } from "../utils/cryptoEngine";
import { motion } from "framer-motion";

export default function EncrypterCard() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");

  const handleProcess = (text: string) => {
    setInput(text);
    setOutput(mode === "encrypt" ? encrypt(text) : decrypt(text));
  };

  const toggleMode = (newMode: "encrypt" | "decrypt") => {
    setMode(newMode);
    setInput("");
    setOutput("");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="w-full max-w-5xl p-5 md:p-8 mx-2 my-6 bg-neutral-50 border-4 border-red-600 rounded-3xl text-neutral-900 shadow-2xl"
    >
      {/* Grid responsivo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* COLUNA DO PAPAI CRIS */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-neutral-200 pb-4 lg:pb-0 lg:pr-6">
          <div className="relative w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-4 border-red-600 shadow-lg">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCMpnex-ekupsG2grBmdBRqXvbijBc1kHtO7lwW7U1XJaaaoami2I0-rP&s=10" 
              alt="Cristiano Ronaldo Comemoração"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-700/40 to-transparent" />
            <div className="absolute bottom-2 left-0 right-0 text-center">
              <span className="text-[10px] md:text-xs font-black tracking-widest bg-red-600 text-white px-2 py-0.5 rounded-full uppercase">CRISTIANO #7</span>
            </div>
          </div>
          
          <div className="text-center mt-3">
            <h3 className="font-sans italic font-black text-base md:text-xl text-red-600 tracking-tight">Papai Cris Sistema</h3>
            <p className="text-[10px] md:text-[11px] font-bold text-neutral-500 tracking-widest uppercase">Perfeição em cada caractere</p>
          </div>
        </div>

        {/* COLUNA DO MOTOR DE CRIPTOGRAFIA */}
        <div className="lg:col-span-8 flex flex-col justify-between gap-4">
          
          {/* Cabeçalho */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pb-3 border-b border-neutral-200">
            <div className="text-center sm:text-left">
              <h2 className="text-xl md:text-3xl font-black tracking-tighter text-red-600 font-sans italic uppercase">
                CR7 // CODIFICADOR
              </h2>
              <p className="text-[9px] md:text-[10px] text-neutral-500 font-bold tracking-wider">A MAIS FORTE DO PLANETA</p>
            </div>
            
            {/* Abas */}
            <div className="flex gap-1 bg-neutral-200 p-1 rounded-xl w-full sm:w-auto justify-center">
              <button 
                onClick={() => toggleMode("encrypt")} 
                className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs uppercase font-black tracking-wider transition-all ${
                  mode === "encrypt" ? "bg-red-600 text-white shadow-md" : "text-neutral-600"
                }`}
              >
                Criptografar
              </button>
              <button 
                onClick={() => toggleMode("decrypt")} 
                className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs uppercase font-black tracking-wider transition-all ${
                  mode === "decrypt" ? "bg-red-600 text-white shadow-md" : "text-neutral-600"
                }`}
              >
                Descriptografar
              </button>
            </div>
          </div>

          {/* Áreas de Texto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-neutral-500 tracking-widest uppercase pl-1">Mensagem_</span>
              <textarea 
                value={input} 
                onChange={(e) => handleProcess(e.target.value)} 
                placeholder={mode === "encrypt" ? "Insira o texto para proteger..." : "Insira o código do Robozão..."} 
                className="w-full h-32 md:h-40 bg-white border-2 border-neutral-300 focus:border-red-600 rounded-xl p-3 font-mono text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none resize-none shadow-sm" 
              />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-red-600 tracking-widest uppercase pl-1">Resultado Protegido_</span>
              <div className="w-full h-32 md:h-40 bg-white border-2 border-red-200 rounded-xl p-3 font-mono text-xs overflow-y-auto break-all relative flex items-start shadow-sm">
                <div className={`w-full h-full pr-6 font-bold text-xs ${mode === "encrypt" ? "text-red-600" : "text-neutral-800"}`}>
                  {output || <span className="text-neutral-300 italic font-normal">Aguardando comando...</span>}
                </div>
                
                {output && (
                  <button 
                    onClick={() => { navigator.clipboard.writeText(output); alert("COPIADO! SIUUUUU! ⚽"); }} 
                    className="absolute bottom-2 right-2 bg-red-600 hover:bg-red-700 text-white text-[10px] font-black px-3 py-1.5 rounded-lg italic font-sans shadow-md"
                  >
                    COPIAR
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Frase de Efeito */}
          <div className="text-center lg:text-right mt-1">
            <span className="text-[10px] font-sans italic font-bold text-red-600 tracking-wide">
              "Eu busco a perfeição." — CR7
            </span>
          </div>

        </div>
      </div>
    </motion.div>
  );
}