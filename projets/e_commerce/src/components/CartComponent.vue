<template>
  <div class="container mx-auto py-6" v-if="cartItems.length > 0">
    <h1 class="text-3xl mb-6">Shopping Cart 2</h1>
    <div class="flex flex-col">
      <!-- Product Items -->
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <CartItemComponent v-for="prod, index in cartItems" :item="prod" :key="index" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- End of Product Items -->
      <!-- Total Amount -->
      <div class="mt-6 lg:ml-auto lg:w-1/2">
        <div class="text-xl font-bold text-gray-900"> {{ total }} </div>
      </div>
      <!-- End of Total Amount -->
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import CartItemComponent from './CartItemComponent.vue';

const cartItems = computed(() => store.state.cart_items);

const total = computed(() => {
  console.log(cartItems.value.reduce((acc, item) => acc + (item.price * item.qte), 0))
  return cartItems.value.reduce((acc, item) => acc + (item.price * item.qte), 0);
});
</script>

<style>
/* Add your Tailwind CSS styles here */
</style>
