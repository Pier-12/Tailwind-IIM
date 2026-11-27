<script setup lang="ts">
withDefaults(defineProps<{ variant?: "primary" | "icon" }>(), {
  variant: "primary",
});
</script>

<template>
  <button
    class="inline-flex h-10 items-center justify-center gap-2 text-sm font-medium leading-6"
    :class="
      variant === 'primary'
        ? 'rounded-md bg-primary px-4 py-2 text-background'
        : 'w-10 rounded-full p-3 text-grey-600'
    "
  >
    <slot />
  </button>
</template>
