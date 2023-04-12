import { ref, computed } from "vue";

export function useStarWars() {
  const urlBase = useAppConfig().starWarsApi;

  const fetch = async (entity: string, page = ref(1)) => {
    return await useFetch(`${urlBase}/${entity}`, {
      query: { page },
      pick: ["results", "count"],
    });
  };

  const fetchById = async (entity: string, id: number) => {
    return await useFetch(`${urlBase}/${entity}/${id}`);
  };

  const characters = async ({ id = null, page = ref(1) }) => {
    return id ? fetchById("people", id) : fetch("people", page);
  };

  const planets = async ({ id = null, page = ref(1) }) => {
    return id ? fetchById("planets", id) : fetch("planets", page);
  };

  const films = async ({ id = null, page = ref(1) }) => {
    return id ? fetchById("films", id) : fetch("films", page);
  };

  const vehicles = async ({ id = null, page = ref(1) }) => {
    return id ? fetchById("vehicles", id) : fetch("vehicles", page);
  };

  const starships = async ({ id = null, page = ref(1) }) => {
    return id ? fetchById("starships", id) : fetch("starships", page);
  };

  const extractId = (urlTarget: string) => {
    const match = /(\d+)/i.exec(urlTarget);
    return match?.[1];
  };

  return { characters, planets, films, vehicles, starships, extractId };
}
