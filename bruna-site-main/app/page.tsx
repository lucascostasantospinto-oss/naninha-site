"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Nao",
      "tens acerteza nana?",
      "vou te bater",
      "nao vou nada",
      "vou ficar triste ;(",
      "so porque sou uma criança?",
      "tas a brincar certo",
      "vou dizer a minha mae",
      "vou chamar os indonesios para te baterem",
      "ok vou ter de ir alem",
      "vou chamar os velhos bebados.",
      "assim nao ajudas bro",
      "nao te dou mais panics",
      "pensa denovo",
      "again?...",
      "anda la naninha :c",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
          <img src="hhttps://tenor.com/pt-PT/view/котик-gif-7311458600395934001" />
          <div className="text-4xl font-bold my-4"> YIPPIEEEEEEEEE </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media1.tenor.com/m/02_hWz29FCcAAAAC/fighting-flying.gif"
          />
          <h1 className="text-4xl my-4">queres voltar a sair comigo??</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "Nao" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}