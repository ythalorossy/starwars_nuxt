import { ref } from "vue";

export function useStarWars(entity: string) {
  const url = `${useAppConfig().starWarsApi}/${entity}`;

  const resource = (resource: string) => {
    entity = resource;   
  }

  const get = async (options = { page: ref(1) }) => {
    const { page } = options;

    return await useFetch(url, {
      query: { page },
      pick: ["results", "count"],
    });
  };

  const getById = async (id: number) => {
    return await useFetch(`${useAppConfig().starWarsApi}/${entity}/${id}`);
  };

  const extractId = (urlTarget: string) => {
    const match = /(\d+)/i.exec(urlTarget);
    return match?.[1];
  };

  return { get, getById, extractId, resource };
}
