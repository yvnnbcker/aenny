<template>
  <main>
    <div id="error-container">
      <div class="error-message">
        Ooops, seems like an error occurred.
      </div>
      <div class="error-code">      
        <b>{{ error.statusCode }}</b> – {{ error.message }}
      </div>
      <ButtonIcon href="/" icon="arrow-left">
            go back to main page
      </ButtonIcon>
    </div>    
    <Footer />
  </main>
  </template>
  
  <script setup>
    defineProps(['error'])
  </script>

  