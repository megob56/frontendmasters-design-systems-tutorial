import { blue, neutral, yellow, green, red } from './colors'
import { primaryFont } from './typography'

export const defaultTheme = {
    primaryColor: blue[400],
    primaryColorHover: blue[300],
    primaryColorActive: blue[200],
    textColorOnPrimary: neutral[100],
    textColor: neutral[600],
    textColorInverted: neutral[100],
    disabled: neutral[400],
    texOnDisabled: neutral[300],
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
    },
    primaryFont,
    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[600]
};

export const darkTheme = {
    primaryColor: neutral[100],
    primaryHoverColor: neutral[200],
    primaryActiveColor: neutral[300],
    textColorOnPrimary: blue[300],
    textColor: blue[300],
    textColorInverted: neutral[100],
    primaryFont: primaryFont,
    disabled: neutral[400],
    textOnDisabled: neutral[300],
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
    },
    formElementBackground: blue[100],
    textOnFormElementBackground: neutral[100]
};