import { createApp } from 'vue'
import { createStore } from 'vuex'
import VueCookies from 'vue-cookies'

import './style.css'
import App from './App.vue'


let cart_items_in_cookies = VueCookies.get('cart_items')

if(cart_items_in_cookies == null){
    cart_items_in_cookies = []
    VueCookies.set('cart_items', JSON.stringify(cart_items_in_cookies))
}

// Create a new store instance.
const store = createStore({
  state () {
    return {
      cart_items: cart_items_in_cookies
    }
  },
  mutations: {
    addToCart(state, prod) {
      prod.qte = 1
      state.cart_items.push(prod)
      let a = VueCookies.get("cart_items")
      a.push(prod)
      VueCookies.set("cart_items", JSON.stringify(a))
    },

    removeFromCart(state, prod){
      state.cart_items =  state.cart_items.filter((cart_item) => cart_item.id != prod.id);
      let a = window.$cookies.get("cart_items")
      a =  a.filter((item) => item.id != prod.id);
      VueCookies.set("cart_items", JSON.stringify(a))
    }
  }
})

// handle this properly after
window.store = store
window.VueCookies = VueCookies

const a = createApp(App)
a.mount('#app')

// Install the store instance as a plugin
a.use(store)
