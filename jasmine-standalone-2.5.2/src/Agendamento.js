function Agendamento() {

  var clazz = {

    para: function( consulta ) {

      var vinteDiasEmMillisegundos = 1000 * 60 * 60 * 24 * 20;
      var novaData = new Date( consulta.getData().getTime() + vinteDiasEmMillisegundos );

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
