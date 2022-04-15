<template>
    <div>
        {{ msg }}
    </div>
</template>
<script setup>
defineProps({
    msg: {
        type: String,
        default: 'hello',
    },
})
</script>
