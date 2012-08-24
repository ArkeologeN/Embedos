
/**
 * Taking Application Instance and Initializing namespace
 */
var Embedos = Em.Application.create({});

Embedos.TitleTextField = Em.TextField.extend({
    insertNewline: function() {
        //console.log(this);
        Embedos.TodosC.loadTodos();
    }
});

/**
 * A simple view named ListTodoView
 */
Embedos.ListTodoView = Em.View.extend({
  loaderBinding: "Embedos.TodoC.loader",
  firstRunBinding: "Embedos.TodoC.firstRun"
});

/**
 * Todo Model - Value Object
 */
Embedos.TodoVO = Em.Object.extend({
	title: null,
	desc: null,
	done: false
});


Embedos.TodosC = Em.ArrayController.create({
  content: [Embedos.TodoVO.create({
          title: "Doing Ember"
  })],
  title: '',
  loader: false,
  firstRun: false,
  loadTodos: function() {
      var me = this;
      var title = me.get('term');
      console.log(this);
  }
});