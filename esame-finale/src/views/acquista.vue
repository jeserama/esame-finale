<template>
    <div class="content">
                    <table id="cart" class="table table-hover table-condensed">
                        <thead>
                            <tr>
                                <th >Product</th>
                                <th >Prezzo</th>
                                <th >Quantà</th>
                                <th class="text-center">Subtotal</th>
                                <th ></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >
                                    <div class="row">
                                        <div class="col-sm-2 hidden-xs"><img src="../assets/roma.jpg"   class="img-thumbnail"/></div>
                                        <div class="col-sm-10">
                                            <h4 class="nomargin">Roma</h4>
                                            <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="price">15 €</td>
                                <td >
                                    <h6>Quantità</h6>
                                    <input type="number" class="form-control text-center" value="1">
                                </td>
                                <td  class="text-center h6">15 </td>
                                <td class="actions" >
                                    <button class="btn btn-info btn-sm"><i class="fas fa-sync-alt"></i></button>
                                    <button class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>								
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr class="visible-xs">
                                <td class="text-center"><strong>Total 15 €</strong></td>
                            </tr>
                            <tr>
                                <td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continuare l'acquista</a></td>
                                <td colspan="2" class="hidden-xs"></td>
                                <td class="hidden-xs text-center total"><strong>Total 15 €</strong></td>
                                <td><a href="#" class="btn btn-success btn-block">Compra <i class="fa fa-angle-right"></i></a></td>
                            </tr>
                        </tfoot>
                    </table>
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
.table>tbody>tr>td, .table>tfoot>tr>td{
    vertical-align: middle;
}
.table{
    margin-top: 20px;
}

    table#cart tbody td .form-control{
		width:20%;
		display: inline !important;
	}
	.actions .btn{
		width:36%;
		margin:1.5em 0;
	}
	
	.actions .btn-info{
		float:left;
	}
	.actions .btn-danger{
		float:right;
	}
	
	table#cart thead  th { display: none;}
	table#cart tbody td { display: block; padding: .6rem; min-width:320px;}
	table#cart tbody tr td:first-child { background:#7ec3e7 ; color: black;  }
	table#cart tbody td:before {
		content: attr(data-th); font-weight: bold;
		display: inline-block; width: 8rem;
	}
	
	
	
	table#cart tfoot td{display:block; }
	table#cart tfoot td .btn{display:block;}
    .price{
        font-size: 18px;
    }
    .total{
        font-size: 22px;
    }

</style>