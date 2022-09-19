function getNextElement() {
  var field = document.getElementById("my-form");

  if (!field) {
    return;
  }

  var form = field.form;

  for (var e = 0; e < form.elements.length; e++) {
    if (field == form.elements[e]) {
      break;
    }
  }
  return form.elements[++e % form.elements.length];
}

function tabOnEnter(field, evt) {
  if (evt.keyCode === 13) {
    if (evt.preventDefault) {
      evt.preventDefault();
    } else if (evt.stopPropagation) {
      evt.stopPropagation();
    } else {
      evt.returnValue = false;
    }
    getNextElement(field).focus();
    return false;
  } else {
    return true;
  }
}

function isNumberKey(event) {
  var charCode = event.which ? event.which : event.keyCode;
  if (charCode == 8 || (charCode > 47 && charCode < 58)) {
    return true;
  } else {
    event.preventDefault();
  }
}
