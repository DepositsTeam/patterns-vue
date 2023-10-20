import PasswordlessLoginPattern from "@/components/passwordless-login-pattern/PasswordlessLoginPattern.vue";

export default {
  name: "Passwordless Login",
  component: PasswordlessLoginPattern,
  argTypes: {},
};

const Template = (args) => ({
  components: {
    PasswordlessLoginPattern,
  },
  setup() {
    return { args };
  },
  template: `<passwordless-login-pattern v-bind="args"></passwordless-login-pattern>`,
});

export const Default = Template.bind({});
