var api = {};

var fotos = [
  { _id: 1, titulo: 'Leão', url: 'asd' },
  { _id: 2, titulo: 'Leão 2', url: 'asdf' }
];

api.lista = function( req, res ) {

  res.json( fotos );

};

api.buscaPorId = function( req, res ) {


  var foto = fotos.find( foto => {
    return foto._id == req.params.id;
  });

  res.json( foto );
};


module.exports = api;
