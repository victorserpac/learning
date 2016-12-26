import { View } from './View';
import { DateHelper } from '../helpers/DateHelper';
import { currentInstance } from '../controllers/NegociacaoController';

export class NegociacoesView extends View {

  constructor( elemento ) {

    super( elemento );

    elemento.addEventListener( 'click', function( event ) {
      if( event.target.nodeName == 'TH' ) {
        currentInstance().ordena( event.target.textContent.toLowerCase() );
      }
    });
  }

  template( model ) {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Value</th>
            <th>Volum</th>
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
