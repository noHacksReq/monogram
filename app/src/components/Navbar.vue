<script setup lang="ts">
import { ref } from 'vue'


</script>

<template>
  <section class="navbar">
    <a id="monogram" href="#####">Monogram</a>
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
    outline: 1px solid red;
}

.navbar {
    margin: 10px 2% 0 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1a2456;
    color: #ff8b68;

    border-radius: 2px;
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