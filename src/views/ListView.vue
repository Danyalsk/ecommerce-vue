<template>
  Todo List
  <button @click="$router.push({ name: 'home' })">Go to List</button>

  {{ todoStore.todoListItems }}
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'

const todoStore = useTodoStore()
</script>
