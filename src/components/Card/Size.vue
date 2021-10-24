<template>
  <div class="d-flex">
    <button
      class="sizebtn"
      @click="selectSize = item"
      v-for="(item, index) in size"
      :key="index"
      :class="[
        item === 35 && !selectSize
          ? 'active'
          : item === selectSize
          ? 'active'
          : '',
      ]"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Size",
  props: {
    size: Array,
    dataSize: Number,
  },
  data() {
    return {
      selectSize: null,
    };
  },
  created() {
    console.log(this.dataSize);
  },

  watch: {
    // !size datasını izliyerek her değiştiğinde ana componente veriyi gönderir.
    selectSize() {
      this.$emit("selectSize", parseInt(this.selectSize));
    },
  },
};
</script>

<style>
.card-male > .card-body > .leftSide > .Sizes > div > .sizebtn:hover {
  background-color: #80b0e2;

  color: white;
}
.card-male > .card-body > .leftSide > .Sizes > div > .active {
  background-color: #6d7c8c;
}
.card-female > .card-body > .leftSide > .Sizes > div > .sizebtn:hover {
  background-color: #eb9bd3;
  color: white;
}
.card-female > .card-body > .leftSide > .Sizes > div > .active {
  background-color: #a27ea1;
}
.sizebtn {
  width: 34px;
  height: 34px;
  margin-right: 2px;
}

.active {
  background-color: red;
}
</style>
