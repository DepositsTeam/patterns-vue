import LoginPattern from "./LoginPattern.vue";

export default {
  name: "Login  Pattern",
  component: LoginPattern,
  argTypes: {},
};

const Template = (args) => ({
  components: { LoginPattern },
  setup() {
    return { args };
  },
  template: `<login-pattern v-bind="args"></login-pattern>`,
});

export const Default = Template.bind({});
