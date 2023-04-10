<template>
    <div>
        <AppHeader />

        <div class="container mx-auto p-4">
            <slot />
        </div>

        <AppFooter />

    </div>
</template>

<style>
    .router-link-exact-active {
        color: #12b488;
        font-weight: bold;
    }
</style>