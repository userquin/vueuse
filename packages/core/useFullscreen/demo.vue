<script setup lang="ts">
import { ref } from 'vue-demi'
import { useFullscreen } from '.'

const el = ref(null)
const { toggle, isFullscreen } = useFullscreen(el)
</script>

<template>
  <div class="text-center">
    <video
      ref="el"
      class="my-6 rounded-md"
      src="https://vjs.zencdn.net/v/oceans.mp4"
      controls
    />
    <button @click="toggle">
      Go Fullscreen
    </button>
  </div>
</template>
