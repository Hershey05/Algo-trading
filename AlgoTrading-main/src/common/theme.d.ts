import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    color: string;
    textAreaBackground: string;
    header: string;
    buttonColor: string;
    footerBackground: string;
  }
}
