<template>
    <p :value="$store.state.mynt" @click="$store.commit('valorer')">{{$store.state.mynt}}</p>
</template>

<script>
export default {
    name: "Mynt"
}
</script>