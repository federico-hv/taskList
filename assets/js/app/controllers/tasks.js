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
        that.transitionToRoute('error');
      });
    }
  }
});


App.AppTasksCreateController = Ember.Controller.extend({
  title: '',
  body: '',
  date: '',
  actions: {
    create: function(){
      var that = this;
      var ti   = this.get('title').trim().capitalize();
      var bo   = this.get('body').trim().capitalize();
      var da   = this.get('date').trim();


      if(!checkInput(ti, bo, da)){
        return false;
      }



      /**
       * Check if not empty in both [MINLENGTH <= 3]
       * Check no special chars
       *
       **/

      App.Task.loadSaveResponse = true;
      this.store.createRecord('task', {
        title: ti,
        body : bo,
        date : da
      })
      .save()
      .then(function(){
        that.set('title', '');
        that.set('body', '');
        that.set('date', '');
        that.transitionToRoute('app.tasks');
      })
      .catch(function(err){
        that.transitionToRoute('error');
      });

    },
    cancel: function(){
      this.set('title', '');
      this.set('body', '');
      this.set('date', '');
      this.transitionToRoute('app.tasks');
    }
  }
});


App.AppTasksTaskController = Ember.Controller.extend({
  actions: {
    update: function(model){
      var ti   = model.get('title').trim().capitalize();
      var bo   = model.get('body').trim().capitalize();
      var da   = model.get('date').trim();


      if(!checkInput(ti, bo, da)){
        return false;
      }

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
