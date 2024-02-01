<template>
  <div>
    HOME
    <button @click="$router.push({ name: 'list' })">Go to List</button>
  </div>

  <div style="margin-top: 20px">
    Task:
    <input v-model="taskName" type="text" @keyup.enter="addItem" />
    <button @click="addItem">Add</button>
  </div>

  {{ todoStore.todoListItems }}
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'
import { ref } from 'vue'

const todoStore = useTodoStore()

const taskName = ref<string>('')

const addItem = () => {
  todoStore.todoListItems.push(taskName.value)
  taskName.value = ''
}
</script>
