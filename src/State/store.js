import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        basket: []
    },
    getters: {
        //! sepette bulunan ürünleri kullanmak için getirir.
        gettterBasket(state) {
            return state.basket;
        }
    },
    mutations: {
        // ! sepete ürün eklemek için kullandığım mutation. Eğer satıcısı ve size'ı farklı ise sepete ekler değil ise sayısını arttırır.
        mutationBasket(state, data) {
            const isSameItem = state.basket.filter(
                item => item.seller === data.seller && item.size === data.size
            ).length;
            if (isSameItem) {
                let index = state.basket.findIndex(
                    item => item.seller === data.seller && item.size === data.size
                );
                if (state.basket[index].count == data.count)
                    state.basket[index].count++;
                else state.basket[index].count = data.count;
            } else {
                state.basket.unshift({...data });
            }
        },
        // ! sepete ürün arttırmak için kullandığım mutation. Eğer satıcısı ve size'ı farklı ise sayısını arttırır.
        mutationBasketIncrease(state, data) {
            let index = state.basket.findIndex(
                item => item.seller === data.seller && item.size === data.size
            );
            state.basket[index].count++;
        },
        // ! sepete ürün arttırmak için kullandığım mutation. Eğer satıcısı ve size'ı farklı ise sayısını azaltır.
        mutationBasketDecrase(state, data) {
            let index = state.basket.findIndex(
                item => item.seller === data.seller && item.size === data.size
            );
            if (state.basket[index].count > 1) {
                state.basket[index].count--;
            } else {
                state.basket.splice(index, 1);
            }
        },
        //! sepete ürün silmek için kullandığım mutation. Eğer satıcısı ve size'ı aynı ise siler.
        mutationBasketRemoveProduct(state, data) {
            let index = state.basket.findIndex(
                item => item.seller === data.seller && item.size === data.size
            );
            state.basket.splice(index, 1);
        }
    },
    actions: {
        //? mutationlarımı çagırmak için oluşturduğum action. Normalde action async durumlarda yani apilerle gelen datalar için kullanılır.
        //? Burada dışarıdan bir veri gelmemesine rağmen kullanmak istedim.

        actionsBasket({ commit }, data) {
            commit("mutationBasket", data);
        },
        actionsBasketIncrease({ commit }, data) {
            commit("mutationBasketIncrease", data);
        },
        actionsBasketDecrase({ commit }, data) {
            commit("mutationBasketDecrase", data);
        },
        actionsBasketRemoveProduct({ commit }, data) {
            commit("mutationBasketRemoveProduct", data);
        }
    }
});
export default store;