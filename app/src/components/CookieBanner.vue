<script setup lang="ts">
import { ref } from 'vue';
import { Camera, BirdAlt, Pacman, Play } from '@boxicons/vue';

let show = ref(false);

function hideCookeBan() {
    show.value = !show.value;
    
    console.log(show.value);
};




</script>

<template>
  
<section>
    <div :class="{ hide: show, show: !show}" class="cookieBanner"
    data-test="cookieBanner">
        <div class="cookieCont">
            <p>Cookies help us deliver our services.</p>
            <p> By using this website you agree to our use of cookies.</p>
            <a class="learnLink" 
             href="https://monogramcc.com/privacy/"
             title="Read our Privacy Policy">Learn More</a>
            <button class="hideBtn"
            @click="hideCookeBan()">I understand</button>
        </div>
        
    </div>
</section>

</template>

<style>

.show {
    display: flex;
}

.hide {
    display: none;
}


.cookieBanner {
  flex-direction: row;
  justify-content: space-around;
  
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #c4beb6;
  color: #1a2456;
  border: 1px solid black;

  z-index: 100;
}

.cookieCont {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    color: #1a2456;
    width: 49%;
    padding: 0 10%;
    font-size: 12px;
}

.hideBtn {
    height: 50%;
    background-color: #1a2456;
    border: none;
    border-radius: 13px;
    cursor: pointer;
}

.learnLink {
    color: #1a2456;
}



</style>