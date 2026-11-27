<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
  <header class="h-18 border-b border-grey-100 px-4 pt-4">
    <div class="flex h-10 items-center gap-2.5">
      <h1
        class="flex-1 font-public-sans text-title font-semibold text-grey-900"
      >
        My Catalogs
      </h1>
      <Button>
        <img src="/icons/square-plus.svg" alt="" width="16" height="16" />
        Create catalog
      </Button>
    </div>
  </header>
</template>
