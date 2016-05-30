
App.ApplicationController = Ember.Controller.extend({
  currentPathDidChange: function() {
    Ember.run.schedule('afterRender', this, function() {
      var path = this.get('currentPath');
      setAnimation(path);

      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });

    });
  }.observes('currentPath')
});



function setAnimation(path){
  console.log('CORRIENDO: ', path);

  $('#container').removeClass('animated fadeInUpBig');
  $('#logo').removeClass('animated infinite bounce');
  $('#container').removeClass('animated fadeInLeftBig');
  $('#container').removeClass('animated fadeInDownBig');
  $('#container').removeClass('animated fadeIn');

  $('#errorRowOne').removeClass('animated fadeInDownBig');
  $('#errorRowTwo').removeClass('animated fadeIn');
  $('#errorRowThree').removeClass('animated fadeInUpBig');

  if(path === 'app.main'){
    $('#container').addClass('animated fadeInUpBig');
    $('#logo').addClass('animated infinite bounce');
  }

  if(path === 'app.tasks.index'){
    $('#container').addClass('animated fadeInLeftBig');
  }

  if(path === 'app.tasks.task'){
    $('#container').addClass('animated fadeInDownBig');
  }

  if(path === 'app.tasks.create'){
    $('#container').addClass('animated fadeIn');
  }

  if(path === 'error'){
    $('#errorRowOne').addClass('animated fadeInDownBig');
    $('#errorRowTwo').addClass('animated fadeIn');
    $('#errorRowThree').addClass('animated fadeInUpBig');
  }
}
