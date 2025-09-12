import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-vivid-green-600 text-sm font-medium tracking-widest uppercase mb-4">
            Notre Histoire
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-8">
            Qui Sommes-Nous
          </h1>
          <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <div>
            <h2 className="text-2xl font-light text-slate-800 mb-8">
              Une assemblée née d'une vision divine
            </h2>
            <div className="space-y-6 text-slate-600 font-light leading-relaxed">
              <p>
                Une assemblée née d'une vision divine. L'assemblée des Frères Chrétiens - Les Amis du Germe 
                est une Association Sans But Lucratif ayant pour but de répandre et de restaurer la vérité 
                sur l'évangile du Christ contenu dans la Bible.
              </p>
              <p>
                "Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit, 
                et enseignez-leur à observer tout ce que je vous ai prescrit." (Matthieu 28:19-20)
              </p>
              <p>
                "Plusieurs faux prophètes s'élèveront, et ils séduiront beaucoup de gens. Et, parce que l'iniquité se sera accrue, 
                la charité du plus grand nombre se refroidira. Mais celui qui persévérera jusqu'à la fin sera sauvé. 
                Cette bonne nouvelle du royaume sera prêchée dans le monde entier." (Matthieu 24:11-15)
              </p>
            </div>
            <div className="mt-8 p-6 bg-vivid-green-50 border-l-4 border-vivid-green-600">
              <p className="text-vivid-green-800 font-medium text-lg">
                Devenez disciple : Portes ouvertes à tous
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/8466757/pexels-photo-8466757.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Histoire de l'assemblée"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Leadership */}
        <div className="py-20 border-t border-gray-100">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8466809/pexels-photo-8466809.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Frère Paul André"
                className="w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-light text-slate-800 mb-8">
                Frère Paul André
              </h2>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p>
                  Serviteur de Dieu appelé dès son jeune âge, le Frère Paul André dirige 
                  cette assemblée avec sagesse et dans la crainte de l'Écriture. Son ministère 
                  est marqué par un enseignement biblique profond et une vie d'exemple.
                </p>
                <p>
                  "Je les rassemblerai de tous les pays où je les ai dispersés dans ma colère, 
                  dans ma fureur, et dans ma grande irritation." (Jérémie 32:37)
                </p>
                <p>
                  "Jésus lui dit: Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi." (Jean 14:6)
                </p>
                <p>
                  "Vous avez été édifiés sur le fondement des apôtres et des prophètes, Jésus-Christ lui-même étant la pierre angulaire." (Éphésiens 2:20)
                </p>
                <p>
                  "Afin que tous soient un, comme toi, Père, tu es en moi, et comme je suis en toi." (Jean 17:21)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Beliefs */}
        <div className="py-20 bg-slate-50 -mx-6 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-slate-800 mb-8">
                Nos Croyances Fondamentales
              </h2>
              <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  title: "La Sainte Bible",
                  description: "Nous croyons en l'autorité suprême et l'inspiration divine des Écritures saintes.",
                  verse: "2 Timothée 3:16"
                },
                {
                  title: "Jésus-Christ",
                  description: "Nous confessons que Jésus est le Fils unique de Dieu, notre Sauveur et Seigneur.",
                  verse: "Jean 1:14"
                },
                {
                  title: "Le Germe de Dieu",
                  description: "Car voici, je ferai venir mon serviteur, le Germe.",
                  verse: "Zacharie 3:8"
                },
                {
                  title: "La Vraie Doctrine de Christ",
                  description: "Quiconque va plus loin et ne demeure pas dans la doctrine de Christ n'a point Dieu.",
                  verse: "2 Jean 1:9"
                },
                {
                  title: "Le Saint-Esprit",
                  description: "Quand le consolateur sera venu, l'Esprit de vérité, il vous conduira dans toute la vérité.",
                  verse: "Jean 16:13"
                },
                {
                  title: "L'Église",
                  description: "Vous êtes le corps de Christ, et vous êtes ses membres, chacun pour sa part.",
                  verse: "1 Corinthiens 12:27"
                }
              ].map((belief, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-vivid-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-medium text-slate-800 mb-4">{belief.title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed">{belief.description}</p>
                  <p className="text-vivid-green-600 text-sm font-medium mt-2">({belief.verse})</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="py-20">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-light text-vivid-green-600 mb-2">8</div>
              <p className="text-slate-600 font-light tracking-wide">Pays d'implantation</p>
            </div>
            <div>
              <div className="text-4xl font-light text-vivid-green-600 mb-2">15+</div>
              <p className="text-slate-600 font-light tracking-wide">Assemblées locales</p>
            </div>
            <div>
              <div className="text-4xl font-light text-vivid-green-600 mb-2">500+</div>
              <p className="text-slate-600 font-light tracking-wide">Frères et sœurs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;