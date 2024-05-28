<template>
  <tr>
    <td class="px-4 md:px-6 py-2 md:py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-8 md:h-10 w-8 md:w-10">
          <img class="h-8 md:h-10 w-8 md:w-10 rounded-full" :src="item.image" alt="Product Image">
        </div>
        <div class="ml-2 md:ml-4">
          <div class="text-xs md:text-sm font-medium text-gray-900">{{item.description}}</div>
        </div>
      </div>
    </td>
    <td class="px-4 md:px-6 py-2 md:py-4 whitespace-nowrap">
      <div class="text-left text-xs md:text-sm text-gray-900"><span>$</span>{{item.price}}</div>
    </td>
    <td class="px-4 md:px-6 py-2 md:py-4 whitespace-nowrap">
      <input @input="sayHello" type="number" class="text-black text-left w-12 md:w-16 px-2 md:px-3 py-1 border border-gray-300 rounded-md" v-model="item.qte">
    </td>
    <td class="px-4 md:px-6 py-2 md:py-4 whitespace-nowrap">
      <div class="text-left text-xs md:text-sm text-gray-900">$ {{ item.price * item.qte }}</div>
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
