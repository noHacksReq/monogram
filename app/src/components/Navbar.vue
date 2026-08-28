<script setup lang="ts">
import { ref } from 'vue'

//making a change
</script>

<template>
  <section class="navbar">
    <a id="monogram"
    data-test="monogram"
    href="#####">Monogram</a>
    <ul class="navbar-list">
        <li>how it works</li>
        <li>workflows</li>
        <li>blog</li>
        <li>support</li>
        <li>shop</li>
        <li>USD</li>
    </ul>
  </section>

 
</template>

<style>

* {
    
}

.navbar {
    margin: 10px 2% 0 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1a2456;
    color: #ff8b68;

    border-radius: 2px;
    z-index: 10;
}

.navbar-list {
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 48%;
    padding-right: 2%;
}

#monogram{
    font-size: 20px;
    color: #ff8b68;
    padding-left: 2%;
}
</style>