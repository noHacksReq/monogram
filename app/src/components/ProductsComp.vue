<script setup lang="ts">
import { ref } from 'vue';





</script>

<template>
  <section class="prodContainer">
        <div class="prod">
            <div class="prodCard">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="Product Image"/>
                <h3>Prod Title</h3>
                <p>price</p>
                <p>Item description</p>
            </div>
            <div class="prodCard">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="Product Image"/>
                <h3>Prod Title</h3>
                <p>price</p>
                <p>Item description</p>
            </div>
            <div class="prodCard">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="Product Image"/>
                <h3>Prod Title</h3>
                <p>price</p>
                <p>Item description</p>
            </div>
            <div class="prodCard">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="Product Image"/>
                <h3>Prod Title</h3>
                <p>price</p>
                <p>Item description</p>
            </div>
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
    width: 100%;
}

.prod {
   display: flex;
   flex-wrap: wrap;
}

.prodCard {
   margin: 5px 10%;
}


</style>