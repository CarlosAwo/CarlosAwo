<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <img class="h-10 w-10 rounded-full" :src="item.image" alt="Product Image">
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900"> {{item.description}} </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-left text-sm text-gray-900"> <span>$</span>{{ item.price }}</div>
    </td>
    <td class="text-left px-6 py-4 whitespace-nowrap">
      <input @input="sayHello" type="number" class="text-black text-left w-16 px-3 py-1 border border-gray-300 rounded-md" v-model="item.qte">
    </td>
    <td class="text-left px-6 py-4 whitespace-nowrap">
      <div class="text-left text-sm text-gray-900">$ {{ item.price * item.qte }} {{ item.qte }}</div>
    </td>
  </tr>
</template>

<script setup>
import { defineProps, defineModel } from 'vue';



const sayHello = () => {
  let prods = store.state.cart_items

  prods.forEach((element, index) => {
    if (element.id == props.item.id) {
      element.qte = props.item.qte
    }
  });

  VueCookies.set("cart_items", JSON.stringify(prods))

};
const props = defineProps({ item: { type: Object, required: true },});
</script>

<style>
/* Add your Tailwind CSS styles here */
</style>
