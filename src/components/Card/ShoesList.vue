<template>
  <div class="container-fluid mr-5 ml-5">
    <Alert :showDismissibleAlert="isAlert" />
    <div class="row mt-5">
      <div class="col-md-6" v-for="(item, index) in Shoes" :key="index">
        <ShoesItem :shoe="item" @addProduct="addProduct" />
      </div>
    </div>
  </div>
</template>

<script>
import ShoesItem from "./ShoesItem.vue";
import Alert from "./Alert.vue";
export default {
  name: "ShoesList",
  components: {
    ShoesItem,
    Alert,
  },
  data() {
    return {
      isAlert: false,
      Shoes: [
        {
          category: "Female",
          seller: "Trendyol",
          img: require("@/assets/pembe1.png"),
          title: "Nike Epic React Flyknit Pearl Pink",
          price: 100,
          size: 35,
          count: 1,
          stock: 10,
          summary:
            "Nike Running React Infinity Run Flyknit trainers in all over pink",
          star: 2,
          sizes: [35, 36, 37, 38, 39, 40, 41, 42],
        },
        {
          category: "Male",
          seller: "Hepsiburada",
          img: require("@/assets/mavi2.png"),
          title: "Nike Epic React Flyknit Sky Blue",
          price: 100,
          size: 35,
          count: 1,
          stock: 10,
          summary:
            "Nike Running React Infinity Run Flyknit trainers in all over pink",
          star: 5,
          sizes: [35, 36, 37, 38, 39, 40, 41, 42],
        },
        {
          category: "Female",
          seller: "Getir",
          img: require("@/assets/pembe1.png"),
          title: "Nike Epic React Flyknit Pearl Pink",
          price: 100,
          stock: 10,
          count: 1,
          size: 35,
          summary:
            "Nike Running React Infinity Run Flyknit trainers in all over pink",
          star: 4,
          sizes: [35, 36, 37, 38, 39, 40, 41, 42],
        },
        {
          category: "Female",
          seller: "Cimri",
          img: require("@/assets/pembe1.png"),
          title: "Nike Epic React Flyknit Pearl Pink",
          price: 100,
          stock: 10,
          count: 1,
          size: 35,
          summary:
            "Nike Running React Infinity Run Flyknit trainers in all over pink",
          star: 5,
          sizes: [35, 36, 37, 38, 39, 40, 41, 42],
        },
        {
          category: "Male",
          seller: "Çiçeksepeti",
          img: require("@/assets/mavi2.png"),
          title: "Nike Epic React Flyknit Sky Blue",
          price: 100,
          size: 35,
          count: 1,
          stock: 10,
          summary:
            "Nike Running React Infinity Run Flyknit trainers in all over pink",
          star: 4,
          sizes: [35, 36, 37, 38, 39, 40, 41, 42],
        },
      ],
    };
  },
  methods: {
    // ! Ürün eklendiğinde alerti 3 saniye çalıştırır ve ürünü vuexe eklemek için gönderir.
    addProduct(product) {
      this.isAlert = true;
      setTimeout(() => {
        this.isAlert = false;
      }, 1000);
      this.$store.dispatch("actionsBasket", product);
    },
  },
};
</script>

<style>
.cardList {
  margin: 70px 10px;
  border-radius: 100%;
}
</style>
