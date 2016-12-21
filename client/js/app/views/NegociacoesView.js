class NegociacoesView extends View {

  template( model ) {
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
          ${
            model.negociacoes.map( n => `
              <tr>
                <td>${ DateHelper.dataParaTexto( n.date ) }</td>
                <td>${ n.amount }</td>
                <td>${ n.value }</td>
                <td>${ n.volum }</td>
              </tr>
            `).join( '' )
          }
        </tbody>

        <tfoot>
          <td colspan="3"></td>
          <td>
            ${ model.negociacoes.reduce( ( total, n ) => total + n.volum, 0.0 ) }
          </td>
        </tfoot>
      </table>
    `;
  }
}
