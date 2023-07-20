<script setup>
    const section = defineProps(['title', 'text']);
</script>


<template>
    <div class="section-content">
        <h2 class="section-title">{{ section.title }}</h2>
        <h5 class="section-text">{{ section.text }}</h5>
    </div>
</template>