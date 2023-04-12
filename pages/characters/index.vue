<template>

    <div class="flex flex-auto border-b-2">
        <h2 class="text-3xl">Characters</h2>
    </div>

    <DataTable :value="entities.results" lazy paginator 
        :rows="10" :totalRecords="entities.count" 
        :loading="pending"
        @page="changePage"
        tableStyle="min-width: 50rem">
        <Column v-for="col in columns" :key="col.field" :field="col.field" :header="col.header"></Column>
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

const columns = [
    { field: 'name', header: 'Nae' },
    { field: 'gender', header: 'Gender' },
    { field: 'mass', header: 'Mass' },
    { field: 'height', header: 'Heigth' },
    { field: 'hair_color', header: 'Hair Color' },
    { field: 'skin_color', header: 'Skin Color' },
];

const page = ref(1);

const { characters, extractId } = useStarWars();

const { data: entities, pending } = await characters({page});

const changePage = (event) => {
    page.value = event.page + 1;
}

</script>

<style scoped></style>