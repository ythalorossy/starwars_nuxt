<template>
    <div class="flex flex-auto border-b-2">
        <h2 class="text-3xl">Films</h2>
    </div>

    <DataTable :value="entities.results" lazy paginator :rows="10" :totalRecords="entities.count" :loading="pending"
        @page="changePage" tableStyle="min-width: 50rem">
        <Column v-for="col in columns" :key="col.field" :field="col.field" :header="col.header"></Column>
        <Column header="Actions">
            <template #body="{ data }">
                <NuxtLink :to="`/films/${extractId(data.url)}`">Details</NuxtLink>
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
    { field: 'episode_id', header: 'Episode' },
    { field: 'title', header: 'Title' },
    { field: 'director', header: 'Director' },
    { field: 'producer', header: 'Producer' },
    { field: 'release_date', header: 'Release Date' },
    { field: 'skin_color', header: 'Skin Color' },
];

const page = ref(1);

const { films, extractId } = useStarWars();

const { data: entities, pending } = await films({ page });

const changePage = (event) => {
    page.value = event.page + 1;
}

</script>

<style scoped></style>