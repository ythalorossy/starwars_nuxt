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
                <div class="flex">
                    <div class="basis-1/4">Planet</div>
                    <div class="basis-3/4">{{ planet.name }}</div>
                </div>
                <div class="flex">
                    <div class="basis-1/4">Films</div>
                    <div class="basis-3/4">
                        <NuxtLink v-for="film in listOfFilms" 
                            :to="`/films/${extractId(film.url)}`">
                            {{ film.title }}
                        </NuxtLink>
                    </div>
                </div>
                <div class="flex">
                    <div class="basis-1/4">Vehicles</div>
                    <div class="basis-3/4">
                        <NuxtLink v-for="vehicle in listOfVehicles" 
                            :to="`/vehicles/${extractId(vehicle.url)}`">
                            {{ vehicle.name }}
                        </NuxtLink>
                    </div>
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
        <p>{{ planet }}</p>
        <p>{{ character }}</p>
    </pre>
    
</template>

<script setup>
    import { useStarWars } from "@/composables/startwars";
    definePageMeta({ layout: "characters" })

    const { id } = useRoute().params;
    
    const { characters, planets, films, vehicles, extractId} = useStarWars();
    
    const { data: character } = await characters({id});
    const { data: planet } = await planets({id: extractId(character.value.homeworld) });

    const listOfFilms = await Promise.all( character.value.films.map(async f => {
        const filmId = extractId(f);
        const {data: film} = await films({id: filmId});
        return film.value;
    }));

    const listOfVehicles = await Promise.all( character.value.vehicles.map(async filmUrl => {
        const {data: vehicle} = await vehicles({ id: extractId(filmUrl) });
        return vehicle.value;
    }));

</script>

<style scoped></style>