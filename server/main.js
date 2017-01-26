import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Meteor.publish( 'tarefas', function() {
    return Tarefas.find( { usuario: this.userId } );
  });
});
