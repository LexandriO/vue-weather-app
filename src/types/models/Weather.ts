type WeekDayType = 'Понедельник' | 'Вторник' | 'Среда' | 'Четверг' | 'Пятница' | 'Суббота' | 'Воскресенье';
type WeatherConditionType = 'Облачно' | 'Ветренно' | 'Солнечно' | 'Дождливо';
type WeatherConditionIconType = 'cloudy' | 'windy' | 'sunny' | 'rainy';

interface ICurrentWeather {
  temperature: number;
  condition: WeatherConditionType;
  humidity: string;
  wind: string;
  icon: WeatherConditionIconType;
}

interface IHourlyWeather {
  time: string;
  label: string;
  temperature: number;
  condition: WeatherConditionType;
  icon: WeatherConditionIconType;
  humidity: string;
  wind: string;
}

interface IWeeklyWeather {
  day: WeekDayType;
  temperature: number;
  condition: WeatherConditionType;
  icon: WeatherConditionIconType;
}

interface IPopularCityWeather {
  city: string;
  temperature: number;
  condition: WeatherConditionType;
  icon: WeatherConditionIconType;
  humidity: string;
}

export interface IWeatherResponse {
  currentCity: string;
  currentDate: string;
  currentWeather: ICurrentWeather;
  hourlyForecast: IHourlyWeather[];
  weeklyForecast: IWeeklyWeather[];
  popularCities: IPopularCityWeather[];
  availableCities: string[];
}
