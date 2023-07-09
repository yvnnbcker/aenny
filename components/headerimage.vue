<script setup>
    const header = defineProps(['headline', 'desc', 'href', 'icon', 'button']);
  </script>

<template>
    <header>
        <div class="header-content">
            <div class="header-text">
                <div class="header-headline">
                    {{header.headline}}
                </div>
                <Slogan text="I am&nbsp;" highlight="Yvonne." icon="icon-none"/>
                <div class="header-desc">{{header.desc}}</div>
                <Buttonicon :href="header.href" :icon="header.icon">
                    {{header.button}}
                </Buttonicon>
            </div>
            <div class="header-image">
                <div id="portrait" class="img-header"></div>
            </div>
        </div>
    </header>
</template>