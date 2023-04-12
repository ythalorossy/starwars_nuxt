<template>

    <div class="flex flex-auto border-b-2">
        <h2 class="text-3xl">Characters</h2>
    </div>

    <DataTable :value="entities.results" lazy paginator 
        :rows="10" :totalRecords="entities.count" 
        :loading="pending"
        @page="changePage"
        tableStyle="min-width: 50rem">
        <Column field="name" header="Name"></Column>
        <Column field="gender" header="Gender"></Column>
        <Column field="mass" header="Mass"></Column>
        <Column field="height" header="Height"></Column>
        <Column field="hair_color" header="Hair Color"></Column>
        <Column field="skin_color" header="Skin Color"></Column>
        <Column header="Actions">
            <template #body="{ data }">
                <NuxtLink :to="`/characters/${extractId(data.url)}`">Details</NuxtLink>
            </template>
        </Column>
    </DataTable>

</template>

<script setup>
import { useStarWars } from "@/composables/startwars";
definePageMeta({
    layout: "characters"
})

const page = ref(1);

const { characters, extractId } = useStarWars();

const { data: entities, pending } = await characters({page});

const changePage = (event) => {
    page.value = event.page + 1;
}

</script>

<style scoped></style>