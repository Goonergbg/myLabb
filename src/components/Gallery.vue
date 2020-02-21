<template>
 <img :src="image" width="200" height="200">
</template>

<script>
export default {
    name: "Gallery",
    props: {
        image: String
    }
}   
</script>
