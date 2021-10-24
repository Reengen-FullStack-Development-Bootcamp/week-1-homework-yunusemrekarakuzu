<template>
  <div>
    <Header />
    <ShoesList />
  </div>
</template>

<script>
import Header from "./Header/Header.vue";
import ShoesList from "./Card/ShoesList.vue";
export default {
  name: "Home",
  components: {
    Header,
    ShoesList
  }
};
</script>

<style></style>
