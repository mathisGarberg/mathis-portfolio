import { SettingsActionTypes, SettingsActions } from './settings.actions';

export interface SettingsState {
    theme: string;
    autoNightMode: boolean;
    pageAnimations: boolean;
    pageAnimationsDisabled: boolean;
    elementsAnimations: boolean;
  }

  export const initialState: SettingsState = {
    theme: 'DEFAULT-THEME',
    autoNightMode: false,
    pageAnimations: true,
    pageAnimationsDisabled: false,
    elementsAnimations: true
  };

export const NIGHT_MODE_THEME = 'BLACK-THEME';

export const selectorSettings = state =>
  <SettingsState>(state.settings || { theme: '' });

export function settingsReducer(
    state: SettingsState = initialState,
    action: SettingsActions
): SettingsState {
    switch (action.type) {
        case SettingsActionTypes.CHANGE_THEME:
        case SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE:
            return { ...state, ...action.payload };
        
        case SettingsActionTypes.CHANGE_ANIMATIONS_PAGE_DISABLED:
            return {
              ...state,
              pageAnimations: false,
              pageAnimationsDisabled: action.payload.pageAnimationsDisabled
            };

        default:
            return state;
    }
}