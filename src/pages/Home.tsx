import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Button} from "@/components/ui/button";
import naruto from "@/assets/naruto.png";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [selectedWord, setSelectedWord] = useState('');
  const [fontSize, setFontSize] = useState(18);
  const [showResult, setShowResult] = useState(false);

  const words = ['Por favor', 'por favor por favor ', 'Lo siento', 'mi vida perdón'];

  const handleNoClick = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setSelectedWord(words[randomIndex]);
    setFontSize(currentSize => currentSize + 20);
  };

  const handleYesClick = () => {
    setShowResult(true);
  };

  return (
    <div>
      <div className="flex gap-2 justify-center items-center flex-col mt-10">
        <p>
          <span className="text-violet-600">De:</span> Orianis
        </p>
        <p>
          <span className="text-violet-600">Para:</span> Para tí
        </p>
        <img className="w-52" src={naruto} alt="Naruto" />
        <Button onClick={() => { navigate("/"); window.localStorage.removeItem("username"); }}>
          Cerrar sesión💖
        </Button>
      </div>
      <div className="container">
        <img
          src="https://media1.tenor.com/m/zD5PGsh7ngQAAAAC/amor.gif"
          alt="Amor Gif"
          className="center-image"
        />
        <p className="question">Me perdonas?</p>
        <button className="btn-green mx-2" onClick={handleYesClick} style={{ display: showResult ? '' : '', fontSize }}>
          Sí
        </button>
        <button className="btn-red" onClick={handleNoClick}>
          {selectedWord || 'No'}
        </button>
        {showResult && <div className="result-text">Gracias amor, Te amo ❤️</div>}
      </div>
    </div>
  );
}
