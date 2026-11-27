<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
  <article
    class="flex flex-col gap-3 rounded-lg border border-grey-300 bg-white p-2.25"
  >
    <div class="flex h-24.5 flex-col gap-2">
      <div class="px-2 py-1 text-xs font-medium text-grey-900">
        Create catalog
      </div>
      <div class="px-2 py-1 text-xs text-grey-500">
        Create new catalog to add products and generate content.
      </div>
    </div>
    <Button class="w-full">
      <img src="/icons/square-plus.svg" alt="" width="16" height="16" />
      Create catalog
    </Button>
  </article>
</template>
