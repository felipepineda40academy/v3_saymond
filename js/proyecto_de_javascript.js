var submit_button = document.getElementById("send")

submit_button.onclick = function(event){
  event.preventDefault();
  var email = document.getElementById("email_input").value;
  var name = document.getElementById("name_input").value;
  var text= document.getElementById("message").value;
  Swal.fire({
    title: '<strong> your information is</strong>',
    icon: 'info',
    html:
      'Inserted email value is : '+email+'<hr> Inserted name value is : '+name+'<hr> Other information inserted is : '+text,
    showCloseButton: true,
    showCancelButton: false,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })
}
