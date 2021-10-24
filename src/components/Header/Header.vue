<template>
  <div class="header">
    <div class="header-content">
      <b-navbar
        class="d-flex justify-content-between"
        toggleable="lg"
        type="dark"
        variant="info"
      >
        <div class="d-flex align-items-center justify-content-between w-100 ">
          <div class="font-weight-bold text-white" style="margin-left:2rem;">
            <h2>Shoes Shope</h2>
          </div>
          <div style="margin-right:1rem;"><Basket /></div>
        </div>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import Basket from "./Basket.vue";
export default {
  name: "Header",
  components: {
    Basket,
  },
};
</script>

<style>
.header-content > .bg-info {
  background-color: #7a7c7e !important;
  /* background-color: #dfd54a !important; */
}
.header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
}
</style>
