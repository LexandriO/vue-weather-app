<script setup lang="ts"></script>

<template>
  <RouterView />
</template>

<style lang="scss">
@use '@/sdk/assets/styles/styles.scss';

body {
  max-width: 1360px;
  margin: 0 auto;
  padding: 40px 0px 65px 0px;
  background-image: var(--theme-background-gradient);
  color: var(--theme-white);
  font-family: 'Geologica', sans-serif;
}
</style>
