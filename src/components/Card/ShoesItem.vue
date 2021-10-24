<template>
  <div class="cardList">
    <b-card
      tag="article"
      style=" width:33rem; height:25rem;"
      class="mb-2 card_main"
      :class="{
        'card-male': shoe.category === 'Male',
        'card-female': shoe.category === 'Female',
      }"
    >
      <div class="leftSide">
        <div class="image">
          <b-img
            class="imageee"
            :src="shoe.img"
            fluid
            alt="Fluid image"
          ></b-img>
        </div>
        <div class="Sizes">
          <Size
            :size="shoe.sizes"
            :dataSize="shoe.size"
            @selectSize="selectSizeFn"
          />
        </div>
      </div>
      <div class="rightSide">
        <b-card-title>{{ shoe.title }}</b-card-title>
        <b-card-text class=" price mb-3">$ {{ shoe.price }} </b-card-text>
        <Rating :rating="shoe.star" />
        <b-card-text class="mb-3">
          {{ shoe.summary }}
        </b-card-text>

        <div class="downSide">
          <Count :stock="shoe.stock" @selectCount="selectCountFn" />
          <b-button
            class="ml-2 basketbtn"
            href="#"
            @click="addBasket(shoe)"
            variant="primary"
            >Add to basket</b-button
          >
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import Rating from "./Rating.vue";
import Count from "./Count.vue";
import Size from "./Size";
export default {
  props: {
    shoe: Object,
  },
  data() {
    return {
      selectSize: null,
    };
  },
  components: {
    Rating,
    Count,
    Size,
  },
  methods: {
    // ! Ekle butonuna basıldığı zaman emit ile üst componente veriyi gönderir.
    addBasket(shoe) {
      this.$emit("addProduct", shoe);
    },
    // ! size componentinden gelen veriyi ayakkabıya ekler ve fiyat bilgisini ölçesine göre günceller.
    selectSizeFn(e) {
      this.shoe.size = e;
      if (e != 35) {
        let tempPrice = (parseInt(e) - 35) * 5;
        this.shoe.price = 100 + tempPrice;
      } else this.shoe.price = 100;
    },
    selectCountFn(e) {
      this.shoe.count = parseInt(e);
      console.log(this.shoe.count);
    },
  },
};
</script>

<style>
.downSide {
  margin-top: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.price {
  font-size: 2rem;
  font-weight: 500;
  color: #875856;
}
.rightSide {
  margin-left: 1rem;
}
.card-male > .card-body > .rightSide > .price {
  font-size: 2rem;
  font-weight: 500;
  color: #448fa4;
}
.card-female > .card-body > .rightSide > .price {
  font-size: 2rem;
  font-weight: 500;
  color: #875856;
}
.card-male > .card-body > .rightSide > .card-title {
  color: #448fa4;
}
.card-female > .card-body > .rightSide > .card-title {
  color: #875856;
}
.card-male > .card-body > .rightSide > .card-text {
  color: #448fa4;
}
.card-female > .card-body > .rightSide > .card-text {
  color: #875856;
}
.card-male > .card-body > .rightSide > .downSide > .basketbtn {
  background-color: #448fa4;
  border-color: azure !important;
}
.card-female > .card-body > .rightSide > .downSide > .basketbtn {
  background-color: #875856;
  border-color: azure !important;
}
.card-male > .card-body > .rightSide > .downSide > .basketbtn:hover {
  background-color: white;
  color: #448fa4;
  border-color: azure !important;
}
.card-female > .card-body > .rightSide > .downSide > .basketbtn:hover {
  color: #875856;
  background-color: rgb(182, 176, 176);
  border-color: azure !important;
}

.leftSide {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.imageee {
  width: 260px;
  height: 183px !important;
  object-fit: cover;
}
.card-body {
  display: flex;
  box-shadow: 1px 10px 15px 1px #888888;
}

.card-body:hover {
  box-shadow: 4px 20px 15px 1px #888888;
}
.card-img-top {
  height: 138px;
  object-fit: cover;
}
.card-female {
  background-color: #fbe7e6 !important;
}
.card-male {
  background-color: #0d1b29 !important;
}
/* .card-male {
  background-color: #588fb7 !important;
} */
</style>
