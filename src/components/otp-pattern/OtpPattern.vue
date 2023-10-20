<template>
  <d-auto-layout direction="vertical" width="100%" alignment="center">
    <d-auto-layout alignment="center">
      <d-box is="img" :src="logo" height="32px" />
    </d-auto-layout>
    <d-auto-layout
      width="100%"
      max-width="450px"
      direction="vertical"
      border="1px solid #CED6DE"
      border-radius="8px"
      padding="30px"
    >
      <d-heading my0 scale="h5" font-face="heroNew" center> Enter Security Code </d-heading>
      <d-text center color="#6D7786" my0 scale="subhead">
        A verification code has been sent to
        <d-box is="span" font-weight="600" color="#2A2E33">{{ email }}</d-box> Enter it below to
        verify your account.
      </d-text>
      <d-box height="0.5px" width="100%" background="#E1E7EC" v-if="!pinInput" />
      <d-auto-layout
        item-spacing="16px"
        direction="vertical"
        is="form"
        @submit.prevent="handleSubmit"
      >
        <d-auto-layout
          :alignment="pinInput ? 'center' : undefined"
          :stretch-items="!pinInput"
          item-spacing="4px"
        >
          <d-pin-input
            label="Email verification code"
            id="email_verification_code"
            name="email_verification_code"
            v-model="credentials.otp"
            v-if="pinInput"
            is-password
            label-class="center"
          />
          <d-textfield v-else v-model="credentials.otp" placeholder="Enter OTP" />
        </d-auto-layout>

        <d-button color-scheme="primary">{{ computedBtnText }}</d-button>
        <d-auto-layout alignment="center">
          <d-text
            cursor="pointer"
            my0
            class="text-primary-light-500"
            font-weight="450"
            scale="subhead"
            @click="resendCode"
            v-if="remainingSecs < 0"
            >Resend code</d-text
          >
          <d-text my0 scale="subhead" @click="resendCode" v-else
            >Resend code in {{ remainingSecs }}s</d-text
          >
        </d-auto-layout>
      </d-auto-layout>
    </d-auto-layout>
  </d-auto-layout>
</template>

<script setup>
import {
  DBox,
  DAutoLayout,
  DPinInput,
  DButton,
  DText,
  DHeading,
  DTextfield,
} from "@deposits/ui-kit-vue";
import { computed, reactive, ref } from "vue";

const props = defineProps({
  logo: {
    type: String,
    default: "https://assets.ondeposits.com/img/logo/your_brand/png/logo_all_dark.png",
  },
  email: {
    type: String,
    default: "ericmcwinner@deposits.inc",
  },
  resendCodeTimeout: {
    type: Number,
    default: 60,
  },
  pinInput: {
    type: Boolean,
    default: true,
  },
  buttonText: {
    type: String,
  },
});

const computedBtnText = computed(() =>
  props.buttonText ? props.buttonText : props.pinInput ? "Verify account" : "Login"
);

const emit = defineEmits(["submit", "resendCode"]);

const remainingSecs = ref(-1);

const credentials = reactive({
  otp: "",
});

const handleSubmit = () => {
  emit("signInClicked", {
    otp: credentials.otp,
  });
};

const resendCode = () => {
  emit("resendCode", props.email);
  remainingSecs.value = props.resendCodeTimeout;
  const interval = setInterval(() => {
    remainingSecs.value--;
    if (remainingSecs.value < 0) {
      clearInterval(interval);
    }
  }, 1000);
};
</script>

<style lang="scss" scoped></style>
