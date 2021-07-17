<script setup lang="ts">
import { isDark } from '../../.vitepress/theme/composables/dark'
import { useToggle } from '@vueuse/shared'

// const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark()">
    <i-carbon-moon v-if="isDark" class="inline-block -mt-0.5" />
    <i-carbon-sun v-else class="inline-block -mt-0.5" />

    <span class="ml-2">{{ isDark ? 'Dark': 'Light' }}</span>
  </button>
</template>
