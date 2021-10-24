<template>
  <div class="product-alert">
    <b-alert :show="showDismissibleAlert" variant="info">
      <p>Product added to cart</p>
    </b-alert>
  </div>
</template>

<script>
export default {
  props: {
    showDismissibleAlert: Boolean
  }
};
</script>
<style>
.product-alert {
  position: absolute;
  right: 0;
  top: 20%;
  z-index: 1;
}
</style>
