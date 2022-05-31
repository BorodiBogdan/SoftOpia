function refresh(){
    window.addEventListener("DOMContentLoaded", function() {

        // get the form elements defined in your form HTML above
        
        var form = document.getElementById("request");
        var button = document.getElementById("sendbtn");
        var status = document.getElementById("my-form-status");
    
        // Success and Error functions for after the form is submitted
        
        function success() {
          form.reset();
          document.getElementById("my-form-status").style.opacity = "1";
          button.style = "display: none ";
          status.innerHTML = "Trimis!";
        }
        
        function error() {
        document.getElementById("my-form-status").style.opacity = "1";
          status.innerHTML = "Datele nu sunt corecte!Incearca din nou!";
        }
    
        // handle the form submission event
    
        form.addEventListener("submit", function(ev) {
          ev.preventDefault();
          var data = new FormData(form);
          ajax(form.method, form.action, data, success, error);
        });
      });
      
      // helper function for sending an AJAX request
    
      function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
          } else {
            error(xhr.status, xhr.response, xhr.responseType);
          }
        };
        xhr.send(data);
      }
}

refresh();