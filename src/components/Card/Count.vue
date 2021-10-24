<template>
  <div>
    <select v-model="count" name="size" id="size">
      <option v-for="item in stock" :key="item" :value="item"
        >{{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Count",
  props: {
    stock: Number
  },
  data() {
    return { count: 1 };
  },
  watch: {
    count() {
      this.$emit("selectCount", parseInt(this.count));
    }
  }
};
</script>

<style></style>
