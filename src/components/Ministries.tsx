import React from 'react';

const Ministries: React.FC = () => {
  const programs = [
    {
      title: "Culte du Dimanche",
      description: "Service principal avec prédication, louange et communion fraternelle pour toute la famille.",
      schedule: "Dimanche 9h00"
    },
    {
      title: "Culte du Mercredi",
      description: "Étude biblique approfondie et temps de prière pour l'édification spirituelle.",
      schedule: "Mercredi 16h00"
    },
    {
      title: "Émission « À l'heure du Germe »",
      description: "Émission radio diffusée sur RTVSI pour répandre la Parole de Dieu.",
      schedule: "Jeudi 20h00 (Kinshasa)"
    },
    {
      title: "Nuit de Réflexion",
      description: "Temps de méditation, prière et réflexion spirituelle profonde.",
      schedule: "Vendredi 20h00"
    },
    {
      title: "Émission YouTube",
      description: "Diffusion en direct sur YouTube pour atteindre les fidèles du monde entier.",
      schedule: "Samedi 18h00 GMT"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-vivid-green-600 text-sm font-medium tracking-widest uppercase mb-4">
            Découvrez nos rendez-vous hebdomadaires
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-8">
            Nos Programmes
          </h1>
          <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {programs.map((program, index) => (
            <div key={index} className="group">
              <div className="border border-gray-100 p-8 h-full hover:border-vivid-green-600 transition-colors duration-300">
                <div className="w-8 h-8 bg-vivid-green-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"></div>
                <h3 className="text-xl font-medium text-slate-800 mb-4">{program.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6">{program.description}</p>
                <div className="text-sm text-vivid-green-600 font-medium tracking-wide">{program.schedule}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Formation Section */}
        <div className="py-20 bg-slate-50 -mx-6 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl font-light text-slate-800 mb-8">
                  Formation Biblique Approfondie
                </h2>
                <div className="space-y-6 text-slate-600 font-light leading-relaxed mb-8">
                  <p>
                    Nous offrons des programmes de formation biblique pour équiper les saints 
                    et former de futurs serviteurs de Dieu.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-amber-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      Théologie biblique systématique
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-amber-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      Homilétique et prédication
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-amber-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      Histoire de l'Église
                    </li>
                    <li className="flex items-start">
                      <div className="w-1 h-1 bg-amber-600 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      Ministère pastoral
                    </li>
                  </ul>
                </div>
                <button className="text-slate-800 hover:text-vivid-green-600 font-medium tracking-wide transition-colors border-b border-slate-800 hover:border-vivid-green-600">
                  En savoir plus
                </button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/8466737/pexels-photo-8466737.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Formation biblique"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vie de l'Église */}
        <div className="py-20 bg-slate-50 -mx-6 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-slate-800 mb-8">
                Vie de l'Église
              </h2>
              <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-slate-600 font-light leading-relaxed mb-8 text-lg">
                Bienvenue dans la famille du Germe! Notre assemblée n'est pas seulement un lieu de culte, 
                mais une communauté vivante où chaque membre trouve sa place dans le corps du Christ. 
                Nous croyons en l'importance de la communion fraternelle, de l'édification mutuelle et 
                du service désintéressé.
              </p>
              <blockquote className="text-vivid-green-600 font-medium text-xl mb-4">
                "Je les rassemblerai de tous les pays où je les ai dispersés"
              </blockquote>
              <cite className="text-slate-500 text-sm">— Jérémie 32:37</cite>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-slate-800 mb-8">
              Horaires des Cultes
            </h2>
            <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="border-b-2 border-vivid-green-600">
                  <th className="text-left py-4 px-6 text-slate-800 font-medium">Jour</th>
                  <th className="text-left py-4 px-6 text-slate-800 font-medium">Événement</th>
                  <th className="text-left py-4 px-6 text-slate-800 font-medium">Horaire</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-slate-600">Dimanche</td>
                  <td className="py-4 px-6 text-slate-600">Culte du dimanche</td>
                  <td className="py-4 px-6 text-vivid-green-600 font-medium">9h00</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-slate-600">Mercredi</td>
                  <td className="py-4 px-6 text-slate-600">Culte du mercredi</td>
                  <td className="py-4 px-6 text-vivid-green-600 font-medium">16h00</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-slate-600">Jeudi</td>
                  <td className="py-4 px-6 text-slate-600">Émission radio (RTVSI)</td>
                  <td className="py-4 px-6 text-vivid-green-600 font-medium">20h (Kinshasa)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-slate-600">Vendredi</td>
                  <td className="py-4 px-6 text-slate-600">Nuit de réflexion</td>
                  <td className="py-4 px-6 text-vivid-green-600 font-medium">20h00</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-slate-600">Samedi</td>
                  <td className="py-4 px-6 text-slate-600">Émission YouTube</td>
                  <td className="py-4 px-6 text-vivid-green-600 font-medium">18h GMT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Implantations */}
        <div className="py-20 bg-slate-50 -mx-6 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-slate-800 mb-8">
                Nos Implantations
              </h2>
              <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-medium text-slate-800 mb-6 text-center">République Démocratique du Congo</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {['Kinshasa (N\'sele, N\'Djili, Kasa-vubu, UPN)', 'Lubumbashi', 'Kolwezi', 'Kipushi', 'Kananga', 'Lufu', 'Kikwit'].map((city, index) => (
                  <div key={index} className="p-4 bg-white rounded border">
                    <p className="text-slate-600 font-light">{city}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-slate-800 mb-6 text-center">International</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                {['France', 'USA', 'Canada', 'Belgique', 'Australie', 'Afrique du Sud'].map((country, index) => (
                  <div key={index} className="p-4 bg-white rounded border">
                    <p className="text-slate-600 font-light">{country}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Old Schedule - keeping for reference but hidden */}
        <div className="hidden">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-slate-800 mb-2">Dimanche</h3>
              <p className="text-2xl font-light text-vivid-green-600 mb-4">9h00</p>
              <p className="text-slate-600 font-light">Service principal avec prédication</p>
            </div>
            <div className="text-center p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-slate-800 mb-2">Mercredi</h3>
              <p className="text-2xl font-light text-vivid-green-600 mb-4">16h00</p>
              <p className="text-slate-600 font-light">Étude biblique et prière</p>
            </div>
            <div className="text-center p-8 border border-gray-100">
              <h3 className="text-xl font-medium text-slate-800 mb-2">Vendredi</h3>
              <p className="text-2xl font-light text-vivid-green-600 mb-4">20h00</p>
              <p className="text-slate-600 font-light">Nuit de réflexion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministries;