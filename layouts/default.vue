<template>
    <div>
        <Navigation />  
        <Hero/>  
        <main>
                    <slot />    
        </main>
        <Footer />
    </div>
</template>

<style>
    @import url("https://use.typekit.net/mno8zad.css");
    @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');
</style>