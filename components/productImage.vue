<template>
    <v-img v-if="product.image" :src="product.image.url"></v-img>
</template>
<script>

export default {
    
    props: ["product"],
    data:()=>({
        // image_url: product.image.url
    }),
    return: {
        // image_url
    }
  };
</script>