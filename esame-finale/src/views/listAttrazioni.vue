<template>
    <div id="products" class="row view-group">
                                <div class="item col-xs-4 col-lg-4">
                                    <div class="thumbnail card">
                                        <div class="img-event">
                                            <img class="group list-group-image img-fluid" src="/assets/roma.jpg" alt="Immagine colliseo di roma ,ci sono tante persone" />
                                        </div>
                                        <div class="caption card-body">
                                            <h4 class="group card-title inner list-group-item-heading">
                                                Roma</h4>
                                            <p class="group inner list-group-item-text">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                                            <div class="row">
                                                <div class="col-xs-12 col-md-6">
                                                    <p class="lead">
                                                        15 €</p>
                                                </div>
                                                <div class="col-xs-12 col-md-6">
                                                    <router-link to="/dettaglio">
                                                    <a class="btn btn-success" href="./pages/details.html">Scopri di più</a>
                                                    </router-link>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {

    return {

    };
  },
});
</script>