<template>
  <div class="container-fluid pb-0 mb-0 justify-content-center text-light">
    <footer>
      <div class="row my-5 justify-content-center py-5">
        <div class="col-11">
          <div class="row">
            <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
              <h3 class=" mb-md-0 mb-5 bold-text">MY BRAND NAME</h3>
            </div>
            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
              <h6 class="mb-3 mb-lg-4 bold-text"><b>MENU</b></h6>
              <ul class="list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
              
                
              </ul>
            </div>
            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
              <h6 class="mb-3 mb-lg-4  bold-text mt-sm-0 mt-5">
                <b>ADDRESS</b>
              </h6>
              <p class="mb-1">605, RATAN ICON BUILDING</p>
              <p>SEAWOODS SECTOR</p>
            </div>
          </div>
          <div class="row">
            <div
              class="
                col-xl-8 col-md-4 col-sm-4 col-auto
                my-md-0
                mt-5
                order-sm-1 order-3
                align-self-end
              "
            >
              <p class="social  mb-0 pb-0 bold-text">
                <span class="mx-2"
                  ><i class="fab fa-facebook-square"></i></span>
                <span class="mx-2"
                  ><i class="fab fa-linkedin" aria-hidden="true"></i></span>
                <span class="mx-2"
                  ><i class="fab fa-twitter-square"></i>
                </span>
                <span class="mx-2"
                  ><i class="fab fa-instagram-square"></i></span>
              </p>
              <small class="rights"
                ><span>&#174;</span> Brand All Rights Reserved.</small
              >
            </div>
            <div
              class="
                col-xl-2 col-md-4 col-sm-4 col-auto
                order-2
                align-self-end
                mt-3
              "
            >
              <h6 class=" bold-text"><b>Jese Ramanantsoa</b></h6>
              <small
                ><span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                jese.ramanantsoa@stud.tecnicosuperiorekennedy.it</small
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "myfooter",
});
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Rubik&display=swap");

.container-fluid {
  overflow: hidden;
  margin-top: 250px;
  background: var(--clr-purple-700);
  color: #ffffff ;
}
a {
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: #ffffff;
    text-decoration: none;
  }
}

small {
  font-size: calc(
    12px + (15 - 12) * ((100vw - 360px) / (1600 - 360))
  ) ;
}

.bold-text {
  color: var(--clr-secondary-700) ;
}

.mt-55 {
  margin-top: calc(
    50px + (60 - 50) * ((100vw - 360px) / (1600 - 360))
  ) ;
}

h3 {
  font-size: calc(
    34px + (40 - 34) * ((100vw - 360px) / (1600 - 360))
  ) ;
}

.social {
  font-size: 21px ;
}

.rights {
  font-size: calc(
    10px + (12 - 10) * ((100vw - 360px) / (1600 - 360))
  ) ;
}
</style>