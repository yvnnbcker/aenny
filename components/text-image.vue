<script setup>
    const gallery = defineProps(['img', 'alt', 'title', 'text', 'order']);
</script>


<template>
    <div class="gallery-dot" :class="gallery.order">
        <div class="gallery-img">
            <img :src="gallery.img" :alt="gallery.alt">
        </div>
        <div class="gallery-content">
            <h3 class="gallery-title">{{ gallery.title }}</h3>
            <p class="gallery-text">{{ gallery.text }}</p>
        </div>
    </div>
</template>