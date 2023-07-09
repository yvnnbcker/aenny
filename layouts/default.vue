<template>
    <div>
        <main>
            <!--<Background />-->
            <Navigation />            
            <div class="content">                
                <slot />    
            </div>  
            <Footer />
        </main>
    </div>
</template>

<style>
    @import url("https://use.typekit.net/mno8zad.css");
    @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Outfit&display=swap');
</style>