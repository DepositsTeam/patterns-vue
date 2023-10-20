import LoginScreen from "./LoginScreen.vue";

export default {
  name: "LoginScreen",
  component: LoginScreen,
  argTypes: {},
};

const Template = (args) => ({
  components: { LoginScreen },
  setup() {
    return { args };
  },
  template: `<login-screen v-bind="args"></login-screen>`,
});

export const Default = Template.bind({});
