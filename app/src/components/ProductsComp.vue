<script setup lang="ts">
import { ref } from 'vue';
import ProdCardComp from './ProdCardComp.vue';




</script>

<template>
    
  <section class="prodContainer">
        <div class="prod">
            <ProdCardComp 
            prod-title="Product 1"
            :price=1.99
            prod-desc="aergae aerga awrgawrg"
            />
            <ProdCardComp 
            prod-title="Product 2"
            :price=2.99
            prod-desc="aergae aerga awrgawrg"
            />
            <ProdCardComp 
            prod-title="Product 3"
            :price=3.99
            prod-desc="aergae aerga awrgawrg"
            />
            <ProdCardComp 
            prod-title="Product 4"
            :price=4.99
            prod-desc="aergae aerga awrgawrg"
            />
            
        </div>
  </section>

 
</template>

<style>

* {
    outline: 1px solid red;
}


.prodContainer {
    display: flex;
    justify-content: center;
    position: relative;
    background-color: #f0efed;
    width: 77%;
    margin: 0 auto;
}

.prod {
   display: flex;
   flex-wrap: wrap;
}



</style>