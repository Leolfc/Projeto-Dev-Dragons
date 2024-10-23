import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";
export class ArqueiroMago extends Personagem {
  ladoArqueiro;
  ladoMago;
  static tipo = "ArqueiroMago";
static descricao = 'Detentor de lancas e flechas mágicas!'
  constructor(
    nome,
    destreza,
    elementoMagico,
    levelMagico,
    Inteligencia
  ) {
    super(nome);
    this.ladoArqueiro = new Arqueiro(nome, destreza);
    this.ladoMago = new Mago(
      nome,
      elementoMagico,
      levelMagico,
      Inteligencia
    );
  }
  obterInsigna() {
    return `${this.ladoArqueiro.obterInsigna()} e ${this.ladoMago.obterInsigna()}`;
  }
}
