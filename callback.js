<script type="text/javascript">
  var principalForm = document.getElementById('contact-form');
  principalForm.addEventListener('submit', function(){
    setTimeout(function(){
      console.log("Código executando");
      window.dataLayer = window.dataLayer || []; 
      if(principalForm.wpcf7.status === "sent"){
        window.dataLayer.push({ 
          'event': 'formSent', 
          'formPage': 'home'
        })
      }
    }, 4000)
  });
</script>