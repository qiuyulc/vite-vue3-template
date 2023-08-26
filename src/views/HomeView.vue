<template>
  <main>home</main>
</template>

<script setup lang="ts">
import instance from '@/utils/request'
instance({ method: 'post', url: '/login' }).then((res) => console.log(res))
</script>
