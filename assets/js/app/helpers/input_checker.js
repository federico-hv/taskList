

/**
 * Returns false if any of the params doesn't fulfill requirements
 * @param  {string} title
 * @param  {string} body
 * @param  {string} date
 * @return {boolean}
 */
var checkInput = function (title, body, date){

  //Length checker

  if(!validator.isLength(title, {min:3, max: 20})){
    //Materialize.toast('The title must be between 3 and 20 characters', 2000);
    $('#createModalError').html('Title error');
    $('#createModal').html('The title must be between 3 and 20 characters');
    $('#modal1').openModal();
    return false;
  }

  if(!validator.isLength(body, {min:5, max: 50})){
    $('#createModalError').html('Description error');
    $('#createModal').html('The description must be between 5 and 50 characters');
    $('#modal1').openModal();
    return false;
  }

  //Special chars validation
  //Test function returns true if the string contains a char that doesn't match the regexp
  if(/[^a-zA-Z0-9\n\s]/.test(title)){
    $('#createModalError').html('Title error');
    $('#createModal').html('Please use only numbers and letters in the title');
    $('#modal1').openModal();
    return false;
  }

  if(/[^a-zA-Z0-9\n\s]/.test(body)){
    $('#createModalError').html('Description error');
    $('#createModal').html('Please use only numbers and letters in the description');
    $('#modal1').openModal();
    return false;
  }

  //Check if da is a valid date
  if(!validator.isDate(date)){
    $('#createModalError').html('Date error');
    $('#createModal').html('Please select a valid date');
    $('#modal1').openModal();
    return false;
  }

  if(!validator.isAfter(date)){
    $('#createModalError').html('Date error');
    $('#createModal').html('Selected date must be greater than current');
    $('#modal1').openModal();
    return false;
  }

  return true;
};


//Capitalizer
String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase() + this.substr(1).toLowerCase();
}
