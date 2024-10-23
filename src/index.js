import { Personagem } from "./modules/personagem.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { PersonagemView } from "./components/personagem-view.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";



const MagoLeo = new Mago("Leo", 4, "Fogo", 7, 9);//! Personagem criado
const MagaMeriele = new Mago("Meriele", 10, "Gelo", 10, 10);//! Personagem criado


const arqueiroLuis = new Arqueiro('Luis', 8, )//! Personagem criado
const arqueiroMagoChico = new  ArqueiroMago('Chico', 7, 10, 'ar', 4, 10)//! Personagem criado
const arqueiroAdirso = new Arqueiro('Adirso', 10)
const guerreiroJose = new Guerreiro('Jose', 10)

const personagens = [MagaMeriele, MagoLeo, arqueiroLuis, arqueiroMagoChico, arqueiroAdirso,guerreiroJose];

new PersonagemView(personagens).render(); //!Exibir a imagem na tela de personagens
 //console.log(Personagem.verificaVencedor(arqueiroAdirso, MagoLeo));
 
 console.log(guerreiroJose);
 