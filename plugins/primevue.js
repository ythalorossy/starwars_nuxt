import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Menubar from 'primevue/menubar';
import InputText from "primevue/inputtext";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import Card from 'primevue/card';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripples: true });
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Menubar", Menubar);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("DataTable", DataTable);
  nuxtApp.vueApp.component("Column", Column);
  nuxtApp.vueApp.component("Avatar", Avatar);
  nuxtApp.vueApp.component("Card", Card);
});
