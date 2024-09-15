<script setup lang="ts">
interface TestProps {
  id: string
}

withDefaults(defineProps<TestProps>(), {
  id: 'Test ID',
})
</script>

<template>
  <div>
    <h1>{{ id }}</h1>
  </div>
</template>
