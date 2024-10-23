import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem{
    static tipo = 'Guerreiro'
    static descricao = 'Você será esmagado pela força do guerreiro!'
    forca 

    constructor(nome, forca){
        super(nome)
        this.forca = forca
    }
    obterInsigna(){
        if(this.forca >=7){
            return "Guerreiro furioso"
        }
        return super.obterInsigna()
    }
}