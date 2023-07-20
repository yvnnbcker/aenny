<script setup>
    const timeline = defineProps(['img', 'alt', 'title', 'desc', 'year', 'order', 'bg']);
</script>


<template>
    <div class="timeline-dot" :class="timeline.order">
        <div class="timeline-img">
            <img :src="timeline.img" :alt="timeline.alt"/>
        </div>
        <div class="timeline-text" :class="timeline.bg">
            <h3>{{ timeline.year }}</h3>
            <h4>{{ timeline.title }}</h4>
            <p>{{ timeline.desc }}</p>
        </div>
    </div>
</template>