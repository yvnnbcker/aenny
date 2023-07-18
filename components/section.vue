<script setup>
    const section = defineProps(['title', 'sub', 'desc']);
</script>


<template>
    <div class="section-content">
        <h2 class="section-title">{{ section.title }}</h2>
        <b v-if="section-sub!==undefined" class="section-sub">{{ section.sub }}</b>
        <p class="section-desc">{{ section.desc }}</p>
    </div>
</template>