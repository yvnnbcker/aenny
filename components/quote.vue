<script setup>
    const quote = defineProps(['bg', 'text']);
</script>

<template>
    <div class="quote" :class="quote.bg">
        <h2 class="quote-content">{{ quote.text }}</h2>
    </div>
</template>