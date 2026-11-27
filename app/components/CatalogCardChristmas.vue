<script setup lang="ts">
import Button from "./Button.vue";
import Badge from "./Badge.vue";
</script>

<template>
  <article
    class="flex flex-col gap-3 rounded-lg border border-grey-200 bg-white p-2.25"
  >
    <div class="flex h-14.5 items-center gap-2">
      <h3 class="line-clamp-2 flex-1 text-lg font-semibold text-black">
        Christmas 2024
      </h3>
      <Button variant="icon">
        <img src="/icons/ellipsis.svg" alt="" width="16" height="16" />
      </Button>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-wrap gap-2">
        <Badge>Sneakers</Badge>
        <Badge>boots</Badge>
      </div>
      <div class="flex flex-col">
        <div class="flex gap-1 py-1 text-xs text-grey-500">
          <span>Created on</span>
          <span>12.27.2024</span>
        </div>
        <div class="flex gap-1 py-1 text-xs font-medium text-grey-900">
          254 products
        </div>
      </div>
    </div>
  </article>
</template>
