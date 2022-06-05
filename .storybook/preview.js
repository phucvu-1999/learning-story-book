import { addDecorator } from "@storybook/react";
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/react";
import Center from "../src/Components/Center/Center";
import { withConsole } from "@storybook/addon-console";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <Center>{story()}</Center>
    <CSSReset />
  </ThemeProvider>
));

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
