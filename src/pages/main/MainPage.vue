<script setup lang="ts">
import WeatherCard from '@/components/WeatherCard/WeatherCard.vue';
import WeatherCardSkeleton from '@/components/WeatherCard/WeatherCardSkeleton.vue';

import { useWeatherStore } from '@/stores/weatherStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const weatherStore = useWeatherStore();
const { weatherData, loadingWeather } = storeToRefs(weatherStore);

onMounted(() => {
  weatherStore.fetchWeather();
});
</script>

<template>
  <h1>Погода в городе: {{ weatherData?.currentCity }}</h1>

  <div
    class="main-page__weather-cards hide-scrollbar"
    v-if="loadingWeather"
  >
    <WeatherCardSkeleton
      v-for="i in 5"
      :key="i"
    />
  </div>

  <div
    class="main-page__weather-cards hide-scrollbar"
    v-else
  >
    <WeatherCard
      v-for="popularCity in weatherData?.popularCities"
      :key="popularCity.city"
      :popularCity
    />
  </div>
</template>

<style lang="scss" scoped>
.main-page {
  &__weather-cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 37px;
    overflow-x: auto;
  }
}
</style>
