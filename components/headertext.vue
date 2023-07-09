<script setup>
    const header = defineProps(['headline', 'desc', 'href', 'icon', 'button', 'img', 'alt']);
  </script>

<template>
    <header>
        <div class="header-content">
            <div class="header-text">
                <div class="header-headline">
                    {{header.headline}}
                </div>
                <Slogananimated text="I am&nbsp;" animation="text-animated"/>
                <div class="header-desc">{{header.desc}}</div>
                <Buttonicon :href="header.href" :icon="header.icon">
                    {{header.button}}
                </Buttonicon>
            </div>
            <div class="header-image">
                <img class="img-header" :src="header.img" :alt="header.alt"/>
            </div>
        </div>
    </header>
</template>