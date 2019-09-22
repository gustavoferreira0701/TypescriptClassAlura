class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    listar() {
        return [].concat(this._negociacoes);
    }
}
