<script setup lang="ts">
import Menu from "./components/Menu.vue";
import Page from "./components/Page.vue";
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <main class="flex min-h-screen flex-col bg-background lg:flex-row">
      <Menu />
      <Page />
    </main>
  </div>
</template>
