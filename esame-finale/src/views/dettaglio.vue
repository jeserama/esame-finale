<template>
     <div class="container-fluid">
                    <div class="content-wrapper">	
                        <div class="item-container">	
                            <div class="container">	
                                <div class="col-md-12">
                                    
                                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-indicators">
                                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div class="carousel-inner">
                                          <div class="carousel-item active">
                                            <img src="../assets/roma.jpg"  class="d-block w-100" alt="Immagine colliseo di roma ,ci sono tante persona">
                                          </div>
                                          <div class="carousel-item">
                                            <img src="../assets/firenze.jpg" class="d-block w-100" alt="Imagine di firenze, ci vede Santa Maria del Fiore">
                                          </div>
                                          <div class="carousel-item">
                                            <img src="../assets/firenze.jpg" class="d-block w-100" alt="Imagine di firenze, ci vede Santa Maria del Fiore">
                                          </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                          <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                          <span class="visually-hidden">Next</span>
                                        </button>
                                      </div>
                                </div>
                                    
                                <div class="col-md-7">
                                    <div class="product-title">Roma</div>
                                    <div class="product-desc">Il Colosseo di Roma</div>
                                    <div class="product-rating"><i class="fa fa-star gold"></i> <i class="fa fa-star gold"></i> <i class="fa fa-star gold"></i> <i class="fa fa-star gold"></i> <i class="fa fa-star-o"></i> </div>
                                    <hr>
                                    <div class="product-price">15 €</div>
                                    <div class="product-stock">Pass disponibile</div>
                                    <hr>
                                    <div class="btn-group cart">
                                        <router-link to="/acquista">
                                                    <button  type="button" class="btn button-sec">
                                           <a href="buy.html">Acquista </a> 
                                        </button>
                                        </router-link>
                                        
                                    </div>
                                    <div class="btn-group wishlist">
                                        <button type="button" class="btn button-save">
                                            Salvare
                                        </button>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="container-fluid">		
                            <div class="col-md-12 product-info">
                                    <ul id="myTab" class="nav nav-tabs card-header-tabs">
                                        
                                        <li  class=" nav-item tab-pane active" role="tabpanel"><a href="#service-one" class=" nav-link no-link" data-toggle="tab">DESCRIPTION</a></li>
                                        <li class=" nav-item tab-pane" role="tabpanel"><a href="#service-two" data-toggle="tab"  class=" nav-link no-link">ATTRAZIONE</a></li>
                                        <li  class=" nav-item tab-pane" role="tabpanel"><a href="#service-three" data-toggle="tab"  class=" nav-link no-link">RECESSIONE</a></li>
                                        
                                    </ul>
                                <div id="myTabContent" class="tab-content">
                                        <div class="tab-pane " id="service-one">
                                         
                                            <section class="container product-info">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget erat eget magna laoreet fringilla eget placerat tellus. Proin in porttitor nibh. Sed varius tincidunt massa, id porttitor ipsum. Fusce quam mi, congue ac lectus at, pulvinar varius elit. Ut feugiat eget nulla ut condimentum. Vestibulum metus dolor, pellentesque et tellus quis, accumsan lobortis turpis. Vestibulum vestibulum eleifend blandit. Integer at porta dolor. In dignissim, dolor quis pulvinar faucibus, augue justo fermentum neque, sed commodo enim mi euismod massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed convallis risus vitae lacus pellentesque eleifend. Donec iaculis massa ac sem semper, at egestas urna varius. In hac habitasse platea dictumst. Phasellus tincidunt neque ac posuere eleifend.</p>
                                            </section>
                                                          
                                        </div>
                                    <div class="tab-pane fade" id="service-two">
                                        
                                        <section class="container">
                                                <p>bla bla bla</p>
                                        </section>
                                        
                                    </div>
                                    <div class="tab-pane fade" id="service-three">
                                                                
                                    </div>
                                </div>
                                <hr>
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
<style >


.gold{
	color: #FFBF00;
}

.product{
	border: 1px solid #dddddd;
	height: 321px;
}

.product>img{
	max-width: 230px;
}

.product-rating{
	font-size: 20px;
	margin-bottom: 25px;
}

.product-title{
	font-size: 50px;
}

.product-desc{
	font-size: 14px;
}

.product-price{
	font-size: 22px;
}

.product-stock{
	color: #74DF00;
	font-size: 20px;
	margin-top: 10px;
    font-size: 20px;
}

.product-info{
		margin-top: 50px;
}

.content-wrapper {
	max-width: 1140px;
	background: #fff;
	margin: 0 auto;
	margin-top: 25px;
	margin-bottom: 10px;
	border: 0px;
	border-radius: 0px;
}



.view-wrapper {
	float: right;
	max-width: 70%;
	margin-top: 25px;
}

.container {
	padding-left: 0px;
	padding-right: 0px;
	max-width: 100%;
}
.button-sec{
    background-color: #f25743; 
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
.button-save{
    background-color: #6cbbe4;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
}

</style>