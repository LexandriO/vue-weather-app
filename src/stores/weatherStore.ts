import { defineStore } from 'pinia';
import { ref } from 'vue';
import weatherMockData from '@/mocks/weather-mock.json';
import type { IWeatherResponse } from '@/types/models/Weather';

const useWeatherStore = defineStore('weather', () => {
  const weatherData = ref<IWeatherResponse | null>(null);
  const loadingWeather = ref(true);

  async function fetchWeather() {
    try {
      loadingWeather.value = true;

      // Emulate API request timing
      weatherData.value = await new Promise<IWeatherResponse>((resolve) => {
        setTimeout(() => {
          resolve(weatherMockData as IWeatherResponse);
        }, 1000);
      });
    } catch (e) {
      console.error(e);
    } finally {
      loadingWeather.value = false;
    }
  }

  function $reset() {
    weatherData.value = null;
  }

  return {
    loadingWeather,
    weatherData,
    fetchWeather,
    $reset,
  };
});

export { useWeatherStore };
