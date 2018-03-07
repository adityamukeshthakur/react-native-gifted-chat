import { Platform } from 'react-native';

export const MIN_COMPOSER_HEIGHT = Platform.select({
  ios: 33,
  android: 41,
});
export const MAX_COMPOSER_HEIGHT = 115;
export const DEFAULT_PLACEHOLDER = 'Tap to write';
export const DATE_FORMAT = 'll';
export const TIME_FORMAT = 'LT';
