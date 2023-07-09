<script setup>
    const btn = defineProps(['icon', 'color', 'href']);
</script>

<template>
    <div class="btn-icon">
        <div :class="btn.icon, btn.color" class="btn-image">
        </div>
        <a :href="btn.href" class="btn-text" :class="btn.color"><slot /></a>      
    </div>
</template>