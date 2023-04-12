<template>
    <Card>
        <template #title> {{ film.title }} </template>
        <template #subtitle> Character details  </template>
        <template #content>
            <div>
                <div class="flex">
                    <div class="basis-1/4">Episode</div>
                    <div class="basis-3/4">{{ film.episode_id }}</div>
                </div>
                <div class="flex">
                    <div class="basis-1/4">Director</div>
                    <div class="basis-3/4">{{ film.director }}</div>
                </div>
                <div class="flex">
                    <div class="basis-1/4">Producer</div>
                    <div class="basis-3/4">{{ film.producer }}</div>
                </div>              
                <div class="flex">
                    <div class="basis-1/4">Release Date</div>
                    <div class="basis-3/4">{{ film.release_date }}</div>
                </div>  
                <div class="flex">
                    <div class="basis-1/4">Opening Crawl</div>
                    <div class="basis-3/4">{{ film.opening_crawl }}</div>
                </div>
                <div class="flex">
                    <div class="basis-1/4">Characters</div>
                    <div class="basis-3/4">
                        <span> • </span>
                        <span v-for="character in listOfCharacters" >
                            <NuxtLink 
                                :to="`/characters/${extractId(character.url)}`">
                                {{ character.name }}
                            </NuxtLink>
                            <span> • </span>
                        </span>
                    </div>
                </div>
                <div class="flex">
                    <div class="basis-1/4">Planets</div>
                    <div class="basis-3/4">
                        <span> • </span>
                        <span v-for="planet in listOfPlanets" >
                            <NuxtLink 
                                :to="`/planets/${extractId(planet.url)}`">
                                {{ planet.name }}
                            </NuxtLink>
                            <span> • </span>
                        </span>
                    </div>
                </div>
                <div class="flex">
                    <div class="basis-1/4">Starships</div>
                    <div class="basis-3/4">
                        <span> • </span>
                        <span v-for="starship in listOfStarships" >
                            <NuxtLink 
                                :to="`/starships/${extractId(starship.url)}`">
                                {{ starship.name }}
                            </NuxtLink>
                            <span> • </span>
                        </span>
                    </div>
                </div>
                <div class="flex">
                    <div class="basis-1/4">Vehicles</div>
                    <div class="basis-3/4">
                        <span> • </span>
                        <span v-for="vehicle in listOfVehicles" >
                            <NuxtLink 
                                :to="`/vehicles/${extractId(vehicle.url)}`">
                                {{ vehicle.name }}
                            </NuxtLink>
                            <span> • </span>
                        </span>
                    </div>
                </div>
                <div class="flex">
                    <div class="basis-1/4">Species</div>
                    <div class="basis-3/4">
                        <span> • TO BE IMPLEMENTED !!!</span>

                    </div>
                </div>       
            </div>
        </template>
        <template #footer>
            <div class="grid grid-cols-1">
                <div class="flex-1 text-xs">Created at: {{ film.created }}</div>
                <div class="text-xs">Edited at: {{ film.edited }}</div>
                <div class="text-xs">Source: {{ film.url }}</div>
            </div>
        </template>
    </Card>
    <pre>
        {{ listOfSpecies }}
        <p>{{ film }}</p>
    </pre>
    
</template>

<script setup>
    import { useStarWars } from "@/composables/startwars";
    definePageMeta({ layout: "characters" })

    const { id } = useRoute().params;
    
    const { characters, planets, films, vehicles, starships, extractId} = useStarWars();
    
    const { data: film } = await films({id});

    const listOfCharacters = await Promise.all( film.value.characters.map(async c => {
        const {data: character} = await characters({id: extractId(c)});
        return character.value;
    }));

    const listOfPlanets = await Promise.all( film.value.planets.map(async p => {
        const {data: planet} = await planets({id: extractId(p)});
        return planet.value;
    }));

    const listOfStarships = await Promise.all( film.value.starships.map(async s => {
        const {data: starship} = await starships({id: extractId(s)});
        return starship.value;
    }));

    const listOfVehicles = await Promise.all( film.value.vehicles.map(async filmUrl => {
        const {data: vehicle} = await vehicles({ id: extractId(filmUrl) });
        return vehicle.value;
    }));

    // const listOfSpecies = await Promise.all( film.value.species.map(async specieUrl => {
    //     const {data: specie} = await vehicles({ id: extractId(specieUrl) });
    //     return specie.value;
    // }));
</script>

<style scoped></style>