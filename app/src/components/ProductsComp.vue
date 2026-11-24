<script setup lang="ts">
import { ref } from 'vue';
import ProdCardComp from './ProdCardComp.vue';




</script>

<template>
    
  <section class="prodContainer"
  data-testid="prodContainer">
        <div class="prod">
            <ProdCardComp 
            data-testid="ProdCard1"
            prod-title="Product 1"
            :price=1.99
            prod-desc="Prod Card 1 description"
            img-alt-text="Prod Card 1 image"
            />
            <ProdCardComp 
             data-testid="ProdCard2"
            prod-title="Product 2"
            :price=2.99
            prod-desc="Prod Card 2 description"
            img-alt-text="Prod Card 2 image"
            />
            <ProdCardComp 
             data-testid="ProdCard3"
            prod-title="Product 3"
            :price=3.99
            prod-desc="Prod Card 3 description"
            img-alt-text="Prod Card 3 image"
            />
            <ProdCardComp 
             data-testid="ProdCard4"
            prod-title="Product 4"
            :price=4.99
            prod-desc="Prod Card 4 description"
            img-alt-text="Prod Card 4 image"
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