<template>
  <div class="d-flex flex-column h-100">
    <div class="container-fluid main-content media-body">
        <div class="col-3 p-0">
          <navbar/>
        </div>
          <div class="col p-5 scrollable">
                <banner/>
                <router-view />
                <myfooter/>
        </div>

    </div>

  </div>

</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Footer from './components/footer.vue';
import Navbar from './components/navbar.vue';
import Banner from"./components/banner.vue";
@Options({
  components: {
    Navbar,
    Footer,
    Banner
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@use './styles/main.scss';
.scrollable {
  max-height: 90vh;
  overflow: auto;
}
</style>