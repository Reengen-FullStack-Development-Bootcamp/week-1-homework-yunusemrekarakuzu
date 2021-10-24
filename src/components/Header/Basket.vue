<template>
  <b-dropdown id="dropdown-right" right variant="primary" class="m-2">
    <template #button-content>
      <i class="fas fa-shopping-basket"></i>
      Basket
      <b-badge variant="primary">{{ getBasket.length }}</b-badge>
    </template>
    <div v-if="getBasket.length > 0">
      <b-dropdown-item href="#" v-for="(item, i) in getBasket" :key="i">
        <div style="width:220px;">
          <b-img class="imagee" :src="item.img" fluid alt="Fluid image"></b-img>
        </div>
        <div>
          <div class="d-flex flex-column">
            <span>{{ item.title }}</span>
            <span>Size:{{ item.size }}</span>
            <span>Price:{{ item.price * item.count }} $</span>
            <span>Total Count:{{ item.count }}</span>
          </div>
          <div class="d-flex justify-content-around">
            <b-button variant="primary" @click="decraseProduct(item)"
              >-</b-button
            >
            <b-button variant="primary" @click="increaseProduct(item)"
              >+</b-button
            >
            <b-button variant="danger" @click="removeProduct(item)">x</b-button>
          </div>
        </div>
      </b-dropdown-item>
    </div>
    <div v-else>Sepetinizde ürün bulunmamakta</div>
  </b-dropdown>
</template>

<script>
//{{ item.title }} - {{ item.size }} {{ item.price * item.count }} $ ({{ item.count }})
export default {
  name: "Basket",
  computed: {
    getBasket() {
      return this.$store.getters.gettterBasket;
    },
  },
  methods: {
    // ! Sepette ki veriyi silmek için vuex'e dispatch eder.
    removeProduct(val) {
      this.$store.dispatch("actionsBasketRemoveProduct", val);
    },
    // ! Sepette ki veriyi azaltmak için vuex'e dispatch eder.
    decraseProduct(val) {
      this.$store.dispatch("actionsBasketDecrase", val);
    },
    // ! Sepette ki veriyi arttırmak için vuex'e dispatch eder.
    increaseProduct(val) {
      console.log("asd", val);
      this.$store.dispatch("actionsBasketIncrease", val);
    },
    companyInfoClickOutside(e) {
      const annotationMessage = document.getElementById("dropdown-right");
      try {
        let target = e.target;
        if (!annotationMessage.contains(target)) {
          this.messageSideSet();
        }
      } catch (error) {
        //console.log(error)
      }
    },
  },
  beforeDestroy() {
    document.removeEventListener("click", this.basketClickOutside);
  },
  beforeMount() {
    document.addEventListener("click", this.basketClickOutside);
  },
};
</script>

<style>
#dropdown-right > button {
  background-color: transparent !important;
  border-color: transparent !important;
}
#dropdown-right > button:hover {
  background-color: #0a58ca !important;
  border-color: transparent !important;
}
.dropdown-item {
  display: flex !important;
}
.dropdown-menu {
  top: 100%;
  right: 10%;
  max-height: 20rem;
  overflow-y: scroll;
}
.dropdown-menu::-webkit-scrollbar {
  width: 3px !important;
}
.dropdown-menu::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px transparent;
  border-radius: 5px;
}

/* Handle */
.dropdown-menu::-webkit-scrollbar-thumb {
  background: #9b9b9b;
  border-radius: 5px;
}

.dropdown-menu > .presentation {
  margin: 0.5rem 0;
}
.imagee {
  height: 138px !important;
  object-fit: cover;
}
</style>
