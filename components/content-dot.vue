<script setup>
    const content = defineProps(['img', 'alt', 'title', 'desc']);
</script>


<template>
    <div class="content-dot">
        <div class="content-img">
            <img :src="content.img" :alt="content.alt"/>
        </div>
        <div class="content-text">
            <h4>{{ content.title }}</h4>
            <p>{{ content.desc }}</p>
        </div>
    </div>
</template>