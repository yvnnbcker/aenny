<script setup>
    const card = defineProps(['url', 'img', 'alt', 'task', 'title', 'desc', 'bg']);
</script>


<template>
    <a :href="card.url" class="card-url" :class="card.bg">
        <img :src="card.img" :alt="card.alt"/>
        <div class="card-text">
            <h3>{{ card.title }}</h3>
            <b>{{ card.task }}</b>
            <p>{{ card.desc }}</p>
        </div>
    </a>
</template>