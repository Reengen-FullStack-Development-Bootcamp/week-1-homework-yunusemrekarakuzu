<template>
  <div class="rating" v-if="rating > 0">
    <i
      class="fas range fa-star"
      style="color: orange"
      v-for="(star, i) in rating"
      :key="'full-' + i"
    >
    </i>
    <i
      class="fas range fa-star"
      v-for="(star, i) in 5 - rating"
      :key="'empty-' + i"
    >
    </i>
  </div>
</template>

<script>
export default {
  name: "Rating",
  props: { rating: Number }
};
</script>

<style>
.rating {
  margin: 10px 0;
}
.range {
  font-size: 10px;
  margin-left: 2px;
}
</style>
