<template>
  <div class="w-full md:w-1/2 p-4 md:p-16">
    <a href="#" class="group block">
      <img
        :src="imageUrl"
        alt=""
        class="shadow-md hover:shadow-lg hover:scale-103 h-[350px] md:h-[450px] w-full object-cover"
      />
    
      <div class="mt-3 flex justify-between text-sm">
        <div>
          <h3 class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
            {{name}}
          </h3>
    
          <p class="mt-1.5 text-pretty text-xs text-gray-500">
            {{description}}
          </p>
        </div>
    
        <p class="text-gray-900">{{price}}$</p>
      </div>
    </a>

    <div class="flex justify-center">
      <div v-for="(variant, index) in variants" :key="variant.id">
        <img @mouseover="updateSelectedVariantIndex(index)" class="object-cover cursor-pointer size-20 m-2 border" :src="variant.image" alt="">          
      </div>
    </div>
    
    <div class="flex justify-center items-center">
      <button v-if="!inCart" @click="addToCart" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-4 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
        Add to Cart
      </button>
      <button v-else @click="removeFromCart" class="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-4 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
        Remove From Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';
import {  getRandomIntegerBetweenRange} from './../utils/helpers'


// Define props
const props = defineProps({
  variants: { type: Array, required: true },
  name: { type: String, required: true }
});


let selectedVariantIndex = ref(getRandomIntegerBetweenRange(0, props.variants.length - 1));

const inCart = computed(() => {
  let ids = store.state.cart_items.map(item => item.id)
  return ids.includes(props.variants[selectedVariantIndex.value].id)
});

const price = computed(() => {
  return props.variants[selectedVariantIndex.value].price;
});

const description = computed(() => {
  return props.variants[selectedVariantIndex.value].description;
});

const inStock = computed(() => {
    return props.variants[selectedVariantIndex.value].quantity;
});

const imageUrl = computed(() => {
  return props.variants[selectedVariantIndex.value].image;
});

const addToCart = () => {
  let prod = props.variants[selectedVariantIndex.value]
  store.commit('addToCart', prod)
};

const removeFromCart = () => {
  store.commit('removeFromCart', props.variants[selectedVariantIndex.value] )
};



const updateSelectedVariantIndex = (index) => {
  if (selectedVariantIndex.value === index) return;
  selectedVariantIndex.value = index;
};

</script>
