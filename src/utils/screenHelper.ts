import {Dimensions} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

export const GUIDELINE_BASE_WIDTH = 1920;
export const GUIDELINE_BASE_HEIGHT = 1080;

export function horizontalScale(size: number): number {
  return (SCREEN_WIDTH / GUIDELINE_BASE_WIDTH) * (size ?? 0);
}

export function verticalScale(size: number): number {
  return (SCREEN_HEIGHT / GUIDELINE_BASE_HEIGHT) * (size ?? 0);
}
