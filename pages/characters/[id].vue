<template>
    <Card>
        <template #title> {{ character.name }} </template>
        <template #subtitle> Character details  </template>
        <template #content>
            <div>
                <div class="flex">
                    <div class="basis-1/4">Height</div>
                    <div class="basis-3/4">{{ character.height }}</div>
                </div>
                <div class="flex">
                    <div class="basis-1/4">mass</div>
                    <div class="basis-3/4">{{ character.mass }}</div>
                </div>
                <div class="flex">
                    <div class="basis-1/4">Hair Color</div>
                    <div class="basis-3/4">{{ character.hair_color }}</div>
                </div>    
                <div class="flex">
                    <div class="basis-1/4">Skin Color</div>
                    <div class="basis-3/4">{{ character.skin_color }}</div>
                </div>
                <div class="flex">
                    <div class="basis-1/4">Birth Year</div>
                    <div class="basis-3/4">{{ character.birth_year }}</div>
                </div>
                <div class="flex">
                    <div class="basis-1/4">Gender</div>
                    <div class="basis-3/4">{{ character.gender }}</div>
                </div>
            </div>
        </template>
        <template #footer>
            <div class="grid grid-cols-1">
                <div class="flex-1 text-xs">Created at: {{ character.created }}</div>
                <div class="text-xs">Edited at: {{ character.edited }}</div>
                <div class="text-xs">Source: {{ character.url }}</div>
            </div>
        </template>
    </Card>
    <pre>
        <p>{{ character }}</p>
    </pre>
    
</template>

<script setup>
    import { useStarWars } from "@/composables/startwars";
    definePageMeta({ layout: "characters" })
    const { id } = useRoute().params;
    const startwars = useStarWars('people');
    const { data: character } = await startwars.getById(id);

</script>

<style scoped></style>