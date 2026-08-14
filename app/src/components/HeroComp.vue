<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDown } from '@boxicons/vue';


</script>

<template>
  <section class="heroImg">
    
        
        <div class="heroTxt">
            <h1>A Console for Every Workflow</h1>
            <p>Discover the perfect console for yours.</p>
            <ChevronDown size="2xl" 
            id="chevIcon"/>
        </div>
    
  </section>

 
</template>

<style>

* {
    outline: 1px solid red;
}


.heroImg {
    background-image: url("https://picsum.photos/2000/3000?grayscale");
    position: absolute;
    height: 75vh;
    
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
     
}

.heroTxt {
    color: #ff8b68;
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: center;
    
}
#chevIcon {
    
}

#chevIcon:after {
    content: '';
    clear:both;
}




</style>