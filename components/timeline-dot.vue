<script setup>
    const timeline = defineProps(['img', 'alt', 'title', 'desc', 'class', 'bg']);
</script>


<template>
    <div class="timeline-dot" :class="timeline.class">
        <div class="timeline-img">
            <img :src="timeline.img" :alt="timeline.alt"/>
        </div>
        <div class="timeline-text" :class="timeline.bg">
            <h3>{{ timeline.title }}</h3>
            <p>{{ timeline.desc }}</p>
        </div>
    </div>
</template>