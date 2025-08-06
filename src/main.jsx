import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const HugoRomantisme = () => {
  // [Ton code React identique]


  const [activePopup, setActivePopup] = useState(null);

  // Définitions des mots clés
  const definitions = {
    Hugo: {
      term: "Victor Hugo",
      definition: "Écrivain français (1802-1885), figure majeure du romantisme, auteur des Misérables et Notre-Dame de Paris."
    },
    romantisme: {
      term: "Romantisme",
      definition: "Mouvement artistique et littéraire du XIXe siècle privilégiant l'émotion, la nature et l'individualité face au classicisme."
    },
    lyrisme: {
      term: "Lyrisme",
      definition: "Expression poétique des sentiments personnels et des émotions intimes de l'auteur."
    },
    sublime: {
      term: "Sublime",
      definition: "Concept esthétique désignant ce qui élève l'âme par sa grandeur, sa beauté ou sa puissance émotionnelle."
    },
    mélancolie: {
      term: "Mélancolie",
      definition: "Sentiment de tristesse douce et rêveuse, thème récurrent de la littérature romantique."
    },
    nature: {
      term: "Nature",
      definition: "Élément central du romantisme, perçue comme source d'inspiration et miroir des émotions humaines."
    },
    passion: {
      term: "Passion",
      definition: "Émotion intense et ardente, souvent destructrice, thème privilégié des écrivains romantiques."
    }
  };

  const ClickableWord = ({ word, definitionKey, children }) => {
    const hasDefinition = definitions[definitionKey];
    
    if (!hasDefinition) {
      return <span>{children || word}</span>;
    }

    return (
      <span
        className="text-blue-600 hover:text-blue-800 cursor-pointer underline decoration-dotted hover:decoration-solid transition-all duration-200"
        onClick={() => setActivePopup(definitionKey)}
      >
        {children || word}
      </span>
    );
  };

  const Popup = ({ definitionKey }) => {
    if (!definitionKey || !definitions[definitionKey]) return null;
    
    const { term, definition } = definitions[definitionKey];

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={() => setActivePopup(null)}
      >
        <div 
          className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-3">{term}</h3>
          <p className="text-gray-600 leading-relaxed mb-4">{definition}</p>
          <button
            onClick={() => setActivePopup(null)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Victor Hugo et le Romantisme
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 text-lg leading-relaxed text-gray-700">
          <p className="mb-4">
            <ClickableWord word="Hugo" definitionKey="Hugo" /> incarne parfaitement l'esprit du{' '}
            <ClickableWord word="romantisme" definitionKey="romantisme" /> français par son{' '}
            <ClickableWord word="lyrisme" definitionKey="lyrisme" /> puissant et sa quête du{' '}
            <ClickableWord word="sublime" definitionKey="sublime" />.
          </p>
          
          <p className="mb-4">
            Ses œuvres explorent les thèmes de la <ClickableWord word="mélancolie" definitionKey="mélancolie" /> 
            {' '}et de la <ClickableWord word="passion" definitionKey="passion" />, tout en célébrant 
            la <ClickableWord word="nature" definitionKey="nature" /> comme source d'inspiration poétique.
          </p>
          
          <p className="mb-4">
            À travers ses vers, <ClickableWord word="Hugo" definitionKey="Hugo" /> révolutionne 
            la poésie française en libérant l'alexandrin des contraintes classiques.
          </p>
          
          <p>
            Son génie réside dans sa capacité à transformer l'émotion personnelle en 
            art universel, essence même du <ClickableWord word="romantisme" definitionKey="romantisme" />.
          </p>
        </div>

        <div className="text-center mt-6 text-gray-600 text-sm">
          Cliquez sur les mots soulignés pour découvrir leur définition
        </div>
      </div>

      {activePopup && <Popup definitionKey={activePopup} />}
    </div>
  );
};

export default HugoRomantisme;


  
};

// Rendu de l'app
const root = createRoot(document.getElementById('root'));
root.render(<HugoRomantisme />);
