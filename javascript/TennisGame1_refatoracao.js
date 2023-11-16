const nomeDaPontuacao = {
    0: "Love",
    1: "Fifteen",
    2: "Thirty",
    3: "Forty"
};


class JogoDeTenis1 {
    constructor(jogador1, jogador2) {
        this.pontosDoJogador1 = 0;
        this.pontosDoJogador2 = 0;
        this.jogador1 = jogador1;
        this.jogador2 = jogador2;
    }

    atribuirPontoAoJogador(nomeJogador){
        if(nomeJogador === this.jogador1){
            this.pontosDoJogador1 += 1;
        } else{
            this.pontosDoJogador2 +=1
        }  
        }

    getNomeDaPontuacao(ponto){
        return nomeDaPontuacao[ponto] || "";
    }

    saoPontuacoesIguais() {
        return this.pontosDoJogador1 === this.pontosDoJogador2;
    }

    getPontuacaoIgual(){
        if(this.pontosDoJogador1 < 3){
            return this.getNomeDaPontuacao(this.pontosDoJogador1) + "-ALL";
        } else{
            return "Deuce"
        }
    }

    estaEmVantagemOuVitoria() {
        return this.pontosDoJogador1 >= 4 || this.pontosDoJogador2 >= 4;
    }

    getPontuacaoVantagemOuVitoria() {
        const diferencaPontuacao = this.pontosDoJogador1 - this.pontosDoJogador2;
    
        if (Math.abs(diferencaPontuacao) === 1) {
            return `Vantagem ${diferencaPontuacao === 1 ? this.jogador1 : this.jogador2}`;
        } else {
            return `Vitória para ${diferencaPontuacao === 2 ? this.jogador1 : this.jogador2}`;
        }
    }

    getPontuacaoRegular() {
        return `${this.getNomeDaPontuacao(this.pontosDoJogador1)}-${this.getNomeDaPontuacao(this.pontosDoJogador2)}`;
    }
    

    getPontuacaoTemporaria() {
        const pontuacaoTemporaria = [this.pontosDoJogador1, this.pontosDoJogador2];
        let pontuacao = "";
    
        pontuacaoTemporaria.forEach((ponto, index) => {
            if (index === 0) {
                pontuacao +=  " - ";
            }
            pontuacao += nomeDaPontuacao[ponto];
        });
    
        return pontuacao;
    }
}

const jogo = new JogoDeTenis1("Jogador1", "Jogador2")
console.log(jogo)
jogo.atribuirPontoAoJogador("Jogador1");
jogo.atribuirPontoAoJogador("Jogador2");
jogo.atribuirPontoAoJogador("Jogador1");

console.log("Pontuação Atual:", jogo.getPontuacaoTemporaria());

if (jogo.saoPontuacoesIguais()) {
    console.log("Pontuação Igual:", jogo.getPontuacaoIgual());
} else if (jogo.estaEmVantagemOuVitoria()) {
    console.log("Vantagem ou Vitória:", jogo.getPontuacaoVantagemOuVitoria());
} else {
    console.log("Pontuação Regular:", jogo.getPontuacaoRegular());
}

