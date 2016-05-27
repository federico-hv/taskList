App.AppTasksIndexController = Ember.Controller.extend({
  actions: {
    destroy: function(model){
      var task = model;
      task.deleteRecord();
      task
      .save()
      .then(function(){
        console.log('Task Deleted')
      })
      .catch(function(err){
        console.log('Error: ', err);
      });
    }
  }
});


App.AppTasksCreateController = Ember.Controller.extend({
  title: '',
  body: '',
  actions: {
    create: function(){
      var ti = this.get('title');
      var bo = this.get('body');




      var that = this;

      /**
       * Check if not empty in both [MINLENGTH <= 3]
       * Check no special chars
       *
       **/

      App.Task.loadSaveResponse = true;
      this.store.createRecord('task', {
        title: ti,
        body : bo
      })
      .save()
      .then(function(){
        that.set('title', '');
        that.set('body', '');
        that.transitionToRoute('app.tasks');
      })
      .catch(function(err){
        that.transitionToRoute('error');
      });

    },
    cancel: function(){
      this.set('title', '');
      this.set('body', '');
      this.transitionToRoute('app.tasks');
    }
  }
});


App.AppTasksTaskController = Ember.Controller.extend({
  actions: {
    update: function(model){

      //Use this.model.get() to validate
      var that = this;
      model
      .save()
      .then(function(){
        that.transitionToRoute('app.tasks');
      })
      .catch(function(err){
        that.transitionToRoute('error');
      });
    },
    cancel: function(){
      this.transitionToRoute('app.tasks');
    }
  }
})
