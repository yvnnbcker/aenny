<script setup>
    const btn = defineProps(['icon', 'href', 'mail']);
</script>

<template>
    <div class="btn-icon">
        <a :href="btn.href" class="btn-text"><slot /></a>     
        <div :class="btn.icon" class="btn-image"></div> 
    </div>
</template>