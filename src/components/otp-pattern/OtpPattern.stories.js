import OtpPattern from "@/components/otp-pattern/OtpPattern.vue";

export default {
  name: "Otp Pattern",
  component: OtpPattern,
  argTypes: {},
};

const Template = (args) => ({
  components: {
    OtpPattern,
  },
  setup() {
    return { args };
  },
  template: `<otp-pattern v-bind="args"></otp-pattern>`,
});

export const Default = Template.bind({});

export const NoPinInput = Template.bind({});
NoPinInput.args = {
  pinInput: false,
};
