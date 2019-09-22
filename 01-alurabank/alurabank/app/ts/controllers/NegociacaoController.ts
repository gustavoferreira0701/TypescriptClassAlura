class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacaoView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        //casting explicito no ts <type>objectToBeCasted
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacaoView.update(this._negociacoes);
    }


    adiciona(event: Event) {
        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        // setar o length de um array pra zero eh suficiente para esvazia-lo
        //this._negociacoes.listar().length = 0;

        this._negociacaoView.update(this._negociacoes);
        this._mensagemView.update("Negociacao adicionada com sucesso!");
    }
}