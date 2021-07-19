<template>
<input type="checkbox" id="ham-menu">
<label for="ham-menu">
  <div class="hide-des">
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
    <span class="menu-line"></span>
  </div>
</label>

        <div class="ham-menu">
            <ul class="centre-text bold-text">
                <li><router-link class="no-link" :to="`/mycomponent/`">Home</router-link> </li>
                <li>Categories</li>
                <li>Services</li>
                <li>Shop</li>
                <li>Support</li>
                <li>Contact us</li>

            </ul>
        </div>
</template>



<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "navbar",
});
</script>

<style lang="scss">
:root {
  --home-bg-color: var(--clr-purple-700);
  --menu-bg-color:var(--clr-purple-500);

  --text-color: var(--clr-secondary-700);
  --border-color: var(--clr-secondary-700);
 
  --lightest-green: var(--clr-purple-700);
  --dark-green: rgba(52, 74, 57, 0.86);
 
  --border-radius: 60px 5px;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
body,
html {
  width: 100%;
  font-size: 10px;
}

#ham-menu {
  display: none;
}
label[for="ham-menu"] {
  display: block;
  position: fixed;
  top: 40px;
  left: 50px;
  z-index: 999;
  width: 60px;
  height: 60px;
  
  border-radius: 15px;
  border: 2px solid var(--border-color);
}
.ham-menu {
  width: 50vw;
  height: 100%;
  position: fixed;
  top: 0;
  visibility: hidden;
  transform: translate(-110%);
  z-index: 998;
  background-color: var(--lightest-green);
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ham-menu > ul {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding: 20px;
  height: 50%;
}
.ham-menu > ul > li {
font-size: 3.5vw;
white-space: nowrap;
letter-spacing: 0.15em;
cursor: pointer;
color: #c8230e;
}
#ham-menu:checked + label {
  background-color: transparent;
  border-color:var(--clr-secondary-700);
}
#ham-menu:checked ~ div.ham-menu {
  transform: translate(0px);
  visibility: visible;
}

/*#ham-menu:checked ~ div.full-page-green {
  display: block;
  opacity: 1;
  visibility: visible;
}*/
[for="ham-menu"] > div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  align-items: center;
}
.menu-line {
  display: block;
  width: 17px;
  height: 2px;
  margin: 10px 0 5px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  background-color: var(--border-color);
  transition: 500ms;
  transform-origin: right center;
}
[for="ham-menu"] > div > span:nth-child(4),
[for="ham-menu"] > div > span:nth-child(5),
[for="ham-menu"] > div > span:nth-child(6) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  transform-origin: left center;
}
#ham-menu:checked + label span {
  background-color: var(--clr-secondary-700);
}
#ham-menu:checked + label span:nth-child(2),
#ham-menu:checked + label span:nth-child(5) {
  transform: scale(0);
}
#ham-menu:checked + label span:nth-child(1) {
  transform: translateY(17px) rotate(45deg);
}
#ham-menu:checked + label span:nth-child(4) {
  transform: translateY(17px) rotate(-45deg);
}
#ham-menu:checked + label span:nth-child(3) {
  transform: translateY(-17px) rotate(-45deg);
}
#ham-menu:checked + label span:nth-child(6) {
  transform: translateY(-17px) rotate(45deg);
}
p {
  display: inline;
  font-size: 1.8rem;
  line-height: 1.5em;
  word-spacing: 0.5em;
  letter-spacing: 0.1em;
  font-family: "OpenSansCondensed-Light";
}
a {
  font-size: 1.6rem;
  line-height: 1.5em;
  word-spacing: 0.5em;
  letter-spacing: 0.1em;
 
  font-weight: bold;
  padding: 7px;
  color: var(--icon-hover-bg);
}
a::after {
  display: inline-block;
  font-family: fontello;
  padding: 5px;
  font-size: 1.6rem;
  transform: rotate(-90deg);
}
.text {
  font-size: 2.5rem;
  line-height: 1.5em;
  word-spacing: 0.5em;
  letter-spacing: 0.1em;
  font-family: "OpenSansCondensed-Bold", sans-serif;
}
.title {
  font-size: 3rem;
  line-height: 1.5em;
  word-spacing: 0.5em;
  letter-spacing: 0.1em;
  font-family: "OpenSansCondensed-Bold", sans-serif;
  color: var(--icon-hover-bg);
  padding: 10px;
}
.heading {
  font-size: 6rem;
  line-height: 1.5em;
  word-spacing: 0.5em;
  letter-spacing: 0.1em;
  font-family: "Patua One";
}
.centre-text {
  text-align: center;
}
.bold-text {
  font-weight: bold;
}

</style>