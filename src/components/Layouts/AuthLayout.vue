<script lang="ts" setup>
    import { RouterView } from 'vue-router';
</script>

<template>
    <div class="md:flex md:justify-center md:items-center md:min-h-screen">
        <div class="xl:w-1/3  flex flex-col justify-center items-center p-8">
            <RouterView/>
        </div>

        <div class="md:w-2/3">
            <img 
                src="@/assets/img/portada.jpg" 
                alt="logo arenales" 
                class="min-h-screen bg-center object-cover" 
            />
        </div>
    </div>
</template>



