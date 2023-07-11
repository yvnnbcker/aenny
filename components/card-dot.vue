<script setup>
    const card = defineProps(['img', 'alt', 'title', 'desc', 'bg']);
</script>


<template>
    <div class="card-dot">
        <div class="card-img">
            <img :src="card.img" :alt="card.alt"/>
        </div>
        <div class="card-text" :class="card.bg">
            <h3>{{ card.title }}</h3>
            <p>{{ card.desc }}</p>
        </div>
    </div>
</template>