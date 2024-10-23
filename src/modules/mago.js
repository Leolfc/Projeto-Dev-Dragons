import { Personagem } from "./personagem.js";

export class Mago extends Personagem {
  elementoMagico;
  levelMagico;
  Inteligencia;
  static tipo = "Mago";
  static descricao = 'O mago é implacável!'
  constructor(nome,  elementoMagico, levelMagico, Inteligencia) {
    super(nome);
    this.elementoMagico = elementoMagico;
    this.levelMagico = levelMagico;
    this.Inteligencia = Inteligencia;
  }

  obterInsigna() {
    if (this.levelMagico >= 5 && this.Inteligencia >= 5) {
      return `Mestre do ${this.elementoMagico}`;
    }

    return super.obterInsigna();
  }
}
