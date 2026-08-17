<script setup lang="ts">
import { ref } from 'vue';
import { Camera, BirdAlt, Pacman, Play } from '@boxicons/vue';



</script>

<template>
  
  <footer>
    <div class="cookieBanner">
      <p>cookies are here, get your cookies</p>
      <p>LEARN MORE <button>Learn More</button></p>
    </div>
  </footer>

  <footer class="mainFooter">
    <div class="monoInfo">
      <div class="address">
        <p>MONOGRAM</p>
      <address>
        305 King St. W.
        <br>
        Suite 502
        <br>
        Kitchener, ON
        <br>
        Canada
      </address>
      </div>
      <div class="quickLinks">
        <p>QUICK LINKS</p>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>How it works</a>
          </li>
          <li>
            <a>Shop</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          </ul>
      </div>
      <div class="help">
        <p>HELP</p>
        <ul>
          <li>
            <a>FAQs</a>
          </li>
          <li>
            <a>Support Center</a>
          </li>
          <li>
            <a>Shipping and Sales</a>
          </li>
        </ul>
      </div>
      <div class="info">
        <p>INFORMATION</p>
        <ul>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Work With Us</a>
          </li>
          <li>
            <a>Privacy Policy</a>
          </li>
          <li>
            <a>Terms of Use</a>
          </li>
          <li>
            <a>Terms of Sale</a>
          </li>
          <li>
            <a>Press Kit</a>
          </li>
        </ul>
      </div>
      <div class="subscribe">
        <p>SUBSCRIBE TO MONOGRAM</p>
        <p>Master productivity with Creative Console and get all the latest Monogram news.</p>
          <div class="formRow">
            <form id="subscribeForm" name="subscribeForm" action method="post">
            <div>
              <input name="subscribeForm" placeholder="Email Address">
            </div>
            <div>
              <input type="submit" value="Submit">
            </div>
          </form>
          </div>
          <div class="soclialLinks">
              <ul class="socialList">
            <li>
              <a src="https://www.instagram.com/?hl=en">
                <Camera/>
              </a>
            </li>
            <li>
              <a src="https://x.com/">
                <BirdAlt />
              </a>
            </li>
            <li>
              <a src="https://www.facebook.com/">
                <Pacman />
              </a>
            </li>
            <li>
              <a src="https://www.youtube.com/">
                <Play />
              </a>
            </li>
              </ul>
            </div>
            <div class="copywright">
              <p>&copy; Monocgram 2026 </p>
            </div>
        </div>
        
      
    </div>
  </footer>

 
</template>

<style>

* {
    
}

.cookeCont {
  width: 100vw;
  background-color: black;
}

.cookieBanner {
  display: flex;
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

.mainFooter {
  position: sticky;
  height: 300px;
  width: 100;
  background-color: #1a2456;
  color: #ff8b68;
}

.monoInfo{
  display: flex;
}

.socialList {
  display: flex;
}


#subscribeForm{
  display: flex;
}

</style>