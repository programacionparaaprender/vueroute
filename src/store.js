import Vuex from 'vuex';
const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      },
      increment (state, payload) {
        state.count++
      }
    },
    actions: {
      increment (context) {
        context.commit('increment')
      },
      increment ({ commit }) {
        commit('increment')
      },
      incrementAsync ({ commit }) {
        setTimeout(() => {
          commit('increment')
        }, 1000)
      },
      checkout ({ commit, state }, products) {
        // save the items currently in the cart
        const savedCartItems = [...state.cart.added]
        // send out checkout request, and optimistically
        // clear the cart
        commit(types.CHECKOUT_REQUEST)
        // the shop API accepts a success callback and a failure callback
        shop.buyProducts(
          products,
          // handle success
          () => commit(types.CHECKOUT_SUCCESS),
          // handle failure
          () => commit(types.CHECKOUT_FAILURE, savedCartItems)
        )
      }
    }
  });

//store.dispatch('increment')


  export default store