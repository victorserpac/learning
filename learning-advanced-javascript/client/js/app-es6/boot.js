import { currentInstance } from './controllers/NegociacaoController';

let negociacaoController = currentInstance();

document.querySelector( '.form' ).onsubmit         = negociacaoController.adiciona.bind( negociacaoController );
document.querySelector( '#button-delete' ).onclick = negociacaoController.apaga.bind( negociacaoController );
document.querySelector( '#button-import' ).onclick = negociacaoController.importaNegociacoes.bind( negociacaoController );
