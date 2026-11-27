<script setup lang="ts">
import Header from "./Header.vue";
import CatalogCardEmpty from "./CatalogCardEmpty.vue";
import CatalogCardChristmas from "./CatalogCardChristmas.vue";
import CatalogCardLong from "./CatalogCardLong.vue";
</script>

<template>
  <div class="flex min-w-0 flex-1 flex-col">
    <Header />
    <section class="flex flex-col gap-2.5 px-4 pb-8">
      <div class="h-7" />
      <div class="grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-3">
        <CatalogCardEmpty />
        <CatalogCardChristmas />
        <CatalogCardLong />
      </div>
    </section>
  </div>
</template>
