<script setup lang="ts">
import { ref } from 'vue';

//const props = defineProps(['prodTitle', 'price', 'prodDesc'])

defineProps<{
    prodTitle?: string
    price?: number
    prodDesc?: string 
}>()


</script>

<template>
  <section class="prodCardContainer"
  data-test="prodCardContainer">
        
            <div class="prodCard"
            data-test="prodCard">
                <img src="https://picsum.photos/seed/picsum/550/370" alt="Product Image"/>
                <div class="prodText">
                    <h3 class="prodTitle">{{ prodTitle }}</h3>
                    <p class="price">{{ price }}</p>
                </div>
                    <p class="prodDesc">{{ prodDesc }}</p>
                
            </div>
            
        
  </section>

 
</template>

<style>

* {
    outline: 1px solid red;
}

.prodCardContainer {
   
    display: flex;
    justify-content: center;
}

.prodCard {
   margin: 5px 10%;
   width: fit-content;
}

.prodText {
    display: flex;
    justify-content: space-between;
    
}

.price {
    color: #6c757d;
}

.prodTitle, .prodDesc {
    color: #080b1b;
   
}


</style>