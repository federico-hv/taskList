
Date.prototype.yyyymmdd = function() {
 var yyyy = this.getFullYear().toString();
 var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
 var dd  = this.getDate().toString();
 return yyyy +'-'+ (mm[1]?mm:"0"+mm[0]) +'-'+ (dd[1]?dd:"0"+dd[0]); // padding
};

App.FormatDateHelper = Ember.Helper.helper(function(params){
  var date = params[0].get('date');

  if(!date){
    return 'No date assigned';
  }

  return date;

});
