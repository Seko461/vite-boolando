<script >
import AppLogo from './AppLogo.vue'
export default {
    name: 'AppHeader',
    components: {
        AppLogo,
    }
}




</script>

<template>
    <header class="site_header">
        <nav class="main_menu">
            <ul class="categories">
                <li>Donna</li>
                <li>Uomo</li>
                <li>Bambini</li>
            </ul>
            <AppLogo />

            <div class="nav_icons">
                <ul>
                    <li><i class="fa-regular fa-user"></i></li>
                    <li><i class="fa-regular fa-heart"></i></li>
                    <li><i class="fa-solid fa-bag-shopping"></i></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss"></style>
