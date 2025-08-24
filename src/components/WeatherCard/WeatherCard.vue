<script setup lang="ts">
import type { IWeatherResponse } from '@/types/models/Weather';

defineProps<{ popularCity: IWeatherResponse['popularCities'][0] }>();
</script>

<template>
  <div class="weather-card">
    <div class="weather-card__city-condition">
      <h2 class="weather-card__city">{{ popularCity.city }}</h2>
      <span class="weather-card__condition">{{ popularCity.condition }}</span>
    </div>

    <div class="weather-card__icon">
      <img
        :src="`src/sdk/assets/icons/${popularCity.icon}.svg`"
        :alt="popularCity.condition"
      />
    </div>

    <div class="weather-card__temperature">
      <h3>{{ popularCity.temperature }}°</h3>
    </div>

    <div class="weather-card__humidity">
      <span>Влажность: {{ popularCity.humidity }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.weather-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 242px;
  height: 303px;
  border-radius: 8px;
  padding: 26px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-image: radial-gradient(
    163.87% 184.27% at -17.89% -22.86%,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(238, 237, 237, 0.1) 100%
  );

  &__city-condition {
    text-align: center;
  }
}
</style>
