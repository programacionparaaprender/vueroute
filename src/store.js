

const state = {
  count: 0,
  product:{
    title:"",
    description:"",
    quantity:0
  },
  products:[]
};

const mutations = {
  increment (state) {
    state.count++
  },
  increment (state, payload) {
    state.count++
  }
};

const actions = {
  INCREMENT:({commit}, payload)=>{
    commit('increment', payload);
  },
  /* increment (context) {
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
  } */
}

/* const store = new Vuex.Store({

}); */

//store.dispatch('increment')


  export default{
    namespaced:true,
    state,
    mutations,
    actions
  }

