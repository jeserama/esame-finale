<template>
    <div class="banner-image" id="bannerimage">
        <div class="banner-text" >
            <h1>Welcome to our Site</h1>
            <p>And I'm a Photographer</p>
            <button>Hire me</button>
            <a class="no-link" href="#"> This is link</a>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "banner",
});
</script>
<style lang="scss">
/* The banner image */
.banner-image {
 
 background-image: url('~@/assets/purpleimmage.jpg');

  /* Set a specific height */
  height: 50%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
#bannerimage {
  width: 100%;
  
  height: 405px;
  background-color: purple;
  background-position: center;
}

/* Place text in the middle of the image */
.banner-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>