import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    background: {
      purple: string;
      gray: string;
      navy: string;
      lightNavy: string;
      bule: string;
    };
    font: {
      label: string;
      noSelect: string;
    };
  }
}
