class NegociacoesView extends View<Negociacoes> {

    update(model: Negociacoes): void {
        this._elemento.html(this.template(model));
    }

    template(negociacoes: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${negociacoes.listar().map(x => `
                        <tr>
                            <td>${x.data.getDate()} / ${x.data.getMonth() + 1} / ${x.data.getFullYear()}</td>
                            <td>${x.quantidade}</td>
                            <td>${x.valor}</td>
                            <td>${x.volume}</td>
                        </tr>`).join('')}
                </tbody>

                <tfoot>
                </tfoot>
            </table>
        `;
    }
}