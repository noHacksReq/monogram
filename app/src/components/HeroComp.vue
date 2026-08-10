<script setup lang="ts">
import { ref } from 'vue'


</script>

<template>
  <section class="heroImg">
    
        
        <div class="heroTxt">
            <h1>A Console for Every Workflow</h1>
            <p>Discover the perfect console for yours.</p>
        </div>
    
  </section>

 
</template>

<style>

* {
    outline: 1px solid red;
}


.heroImg {
    background-image: url("https://picsum.photos/2000/3000?grayscale");
    height: 75vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    top: -17vh;

    
}

.heroTxt {
    color: #ff8b68;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}



</style>