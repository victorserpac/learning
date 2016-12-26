import { NegociacaoController } from './controllers/NegociacaoController';

let negociacaoController = new NegociacaoController();

document.querySelector( '.form' ).onsubmit         = negociacaoController.adiciona.bind( negociacaoController );
document.querySelector( '#button-delete' ).onclick = negociacaoController.apaga.bind( negociacaoController );
document.querySelector( '#button-import' ).onclick = negociacaoController.importaNegociacoes.bind( negociacaoController );
