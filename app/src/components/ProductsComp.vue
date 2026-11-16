<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDown } from '@boxicons/vue';




</script>

<template>
  <section class="prodContainer">
        <div class="prod">
            <img src="https://picsum.photos/seed/picsum/200/300" alt="Product Image"/>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="Product Image"/>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="Product Image"/>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="Product Image"/>
        </div>
  </section>

 
</template>

<style>

* {
    outline: 1px solid red;
}


.prodContainer {
    
    height: 1000px;
    background-color: #f0efed;
    display: flex;
}

.prod {
    margin: 10px;
}


</style>