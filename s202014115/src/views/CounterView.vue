<template>
    <div id="CounterView">
        <p> {{ counter }} </p>
        <button @click="counter++">++</button>
    </div>
</template>

<script>
export default {
    name: "CounterView",
    data() {
        return { counter: 0}
    }
}
</script>

<style>
div { text-align: left;}
</style>