<script setup>
    const quote = defineProps(['bg', 'text']);
</script>

<template>
    <div class="quote">
        <div :class="quote.bg" class="rect-right rect2"></div>
        <div class="quote-quote">
            <div class="scribble-quote quote-start">
                <img src="/scribble-quote.svg">
            </div>
            <h3 class="quote-content">{{ quote.text }}</h3>
            <div class="scribble-quote quote-end">
                <img src="/scribble-quote.svg">
            </div>
        </div>
    </div>
</template>