function Agendamento() {

  var clazz = {

    para: function( consulta ) {

      var novaData = new Date( 2014, 7, 21 );
      var novaConsulta = new Consulta(
        consulta.getNome(),
        consulta.getProcedimentos(),
        consulta.isParticular(),
        consulta.isRetorno(),
        novaData
      );
      return novaConsulta;
    }
  };

  return clazz;
}
