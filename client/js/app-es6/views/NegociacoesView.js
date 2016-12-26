import { View } from './View';

export class NegociacoesView extends View {

  template( model ) {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th onclick="negociacaoController.ordena( 'date' )">DATA</th>
            <th onclick="negociacaoController.ordena( 'amount' )">QUANTIDADE</th>
            <th onclick="negociacaoController.ordena( 'value' )">VALOR</th>
            <th onclick="negociacaoController.ordena( 'volum' )">VOLUME</th>
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
            ${ model.volumeTotal }
          </td>
        </tfoot>
      </table>
    `;
  }
}
