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
               L’assemblée des Frères Chrétiens, les Amis du Germe, est une Association Sans But Lucratif ayant pour
but de répandre et de restaurer la vérité sur l’évangile du Christ contenu dans la Bible.
              </p>
              <p>
              A l’heure du Germe est une école ouverte à tous
Le Frère Paul prêche la parole de Christ à toute langue, à toutes les nations selon qu’il est écrit
Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint Esprit,
Et enseignez-leur à observer tout ce que je vous ai prescrit. (Matthieu 28 : 19- 20)
A l’heure du Germe est un nouveau son de cloche dans le monde Chrétien
              </p>
              <p>
             Le Frère Paul nous révèle la réalité des Dimes et offrandes dans l’église du Christ ; selon qu’il est écrit :
C'est pourquoi, lorsque vous verrez l'abomination de la désolation, dont a parlé le prophète Daniel,
établie en lieu saint, -que celui qui lit fasse attention ! – (Matthieu 24 : 11 ; 15)
A l’heure du Germe : le mensonge ne règnera pas toujours :
Le Frère Paul nous enseigne la pure vérité , il nous révèle le vrais sens des écrits de la bible car par ce
temps qui court , il est important que le vrai chrétien comprenne l’écriture qui déclare que Plusieurs faux
prophètes s'élèveront, et ils séduiront beaucoup de gens (Matthieu 24 : 11 )
A l’heure du Germe : Heure de la delivrance
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
                Le frère Paul André est l’initiateur de la véritable doctrine du Christ qui rassemble tous les enfants
dispersé du germe enseignant la parole de Dieu révélée par JC. Comme un semeur envoyé dans la
moisson du Seigneur, il proclame la Parole qui ne passe point, afin que ceux qui étaient éloignés
entendent de nouveau la voix du Bon Berger.

                </p>
                <p>
                Sa mission est semblable à celle annoncée par l’Écriture : « Je les rassemblerai de tous les pays où je les
ai dispersés » (Jérémie 32:37). Il exhorte chacun à revenir à la semence incorruptible, à ce germe divin
qui est Jésus-Christ, « le chemin, la vérité et la vie » (Jean 14:6).
                </p>
                <p>
                Tel un gardien de la foi, il veille à ce que le troupeau du Seigneur ne soit pas emporté par des
vents de doctrine, mais demeure ferme sur le fondement posé une fois pour toutes par les apôtres
et les prophètes, ayant Jésus-Christ pour pierre angulaire (Éphésiens 2:20).
                </p>
                <p>
                Par sa fidélité, le frère Paul André témoigne que le dessein de Dieu est d’unir ses enfants dans
une même alliance, accomplissant la prière du Christ : « Père, qu’ils soient un, comme nous
sommes un » (Jean 17:21).
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
                  description: "Nous croyons que la Sainte Écriture est la Parole inspirée de Dieu, parfaite et immuable, révélant la volonté divine pour l’humanité. ",
                  verse: "2 Timothée 3:16"
                },
                {
                  title: "Jésus-Christ",
                  description: "Nous croyons que Jésus-Christ est le Fils unique de Dieu, la Parole faite chair, morte et ressuscité pour notre salut.",
                  verse: "Jean 1:14"
                },
                {
                  title: "Le Germe de Dieu",
                  description: "Nous croyons que Jesus-Christ est le Germe annoncé par les prophetes, par qui Dieu rassemble ses enfants disperses et établit son régne éternel.",
                  verse: "Zacharie 3:8"
                },
                {
                  title: "La Vraie Doctrine de Christ",
                  description: "Nous croyons que la véritable doctrine est celle transmise par Jésus-Christ et les apôtres, fondement unique de la foi, qui garde l’Église dans la vérité.",
                  verse: "2 Jean 1:9"
                },
                {
                  title: "Le Saint-Esprit",
                  description: "Nous croyons que le Saint-Esprit est donné pour conduire le croyant dans toute la vérité",
                  verse: "Jean 16:13"
                },
                {
                  title: "L'Église",
                  description: "Nous croyons que l’Église est l’assemblée des rachetés, le corps de Christ, appelée à marcher dans l’unité et à annoncer la vérité jusqu’aux extrémités de la terre. ",
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