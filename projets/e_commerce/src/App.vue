<script setup>
import ProductComponent from './components/ProductComponent.vue';
import CartComponent from './components/CartComponent.vue'; // Assuming you have a CartComponent

import {  generateImagePath, getRandomIntegerBetweenRange} from './utils/helpers'

const data = [];

for (let i = 1; i <= 5; i++) {
    data.push({
        id: i,
        name: `Produit ${i}`,
        quantity: Math.floor(Math.random() * 100) + 1, // Quantité aléatoire entre 1 et 100
        description: `Description du produit ${i}`,
        price: Math.floor(Math.random() * 1000) + 1, // Prix aléatoire entre 1 et 1000
        type: 'velo',
        image: generateImagePath('velo', i)
    });

    data.push({
        id: i + 5,
        name: `Produit ${i + 5}`,
        quantity: Math.floor(Math.random() * 100) + 1,
        description: `Description du produit ${i + 5}`,
        price: Math.floor(Math.random() * 1000) + 1,
        type: 'glass',
        image: generateImagePath('glass', i)
    });

    data.push({
        id: i + 10,
        name: `Produit ${i + 10}`,
        quantity: Math.floor(Math.random() * 100) + 1,
        description: `Description du produit ${i + 10}`,
        price: Math.floor(Math.random() * 1000) + 1,
        type: 'moto',
        image: generateImagePath('moto', i)
    });

    data.push({
        id: i + 15,
        name: `Produit ${i + 15}`,
        quantity: Math.floor(Math.random() * 100) + 1,
        description: `Description du produit ${i + 15}`,
        price: Math.floor(Math.random() * 1000) + 1,
        type: 'shoes',
        image: generateImagePath('shoes', i)
    });

    data.push({
        id: i + 20,
        name: `Produit ${i + 20}`,
        quantity: Math.floor(Math.random() * 100) + 1,
        description: `Description du produit ${i + 20}`,
        price: Math.floor(Math.random() * 1000) + 1,
        type: 'shirt',
        image: generateImagePath('shirt', i)
    });
}

const productsdata = [
    {
        name: 'shirt',
        data: data.filter(item => item.type === 'shirt')
    },
    {
        name: 'shoes',
        data: data.filter(item => item.type === 'shoes')
    },
    {
        name: 'moto',
        data: data.filter(item => item.type === 'moto')
    },
    {
        name: 'glass',
        data: data.filter(item => item.type === 'glass')
    },
    {
        name: 'velo',
        data: data.filter(item => item.type === 'velo')
    }
];

const products = productsdata;

</script>

<template>
  <div>
    <h1 class="text-red-400">Hello </h1>
    <div class="flex flex-wrap">
      <ProductComponent v-for="item, index in products" :variants="item.data" :name="item.name" />  
    </div>
    
    <div>
      <cart-component></cart-component>  
    </div>
  </div>
</template>

<style scoped>

</style>
