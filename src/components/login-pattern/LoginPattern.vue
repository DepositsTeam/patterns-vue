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
      <d-heading my0 scale="h5" font-face="heroNew" center> Login to your account </d-heading>
      <d-text scale="subhead" my0 center color="#6D7786">
        Welcome back, provide your login details below to access your account.
      </d-text>
      <d-auto-layout direction="vertical" is="form" @submit.prevent="handleSubmit">
        <d-textfield
          label="Email Address"
          id="email"
          name="email"
          v-model="credentials.email"
          placeholder="example@gmail.com"
        />
        <d-auto-layout direction="vertical" item-spacing="4px">
          <d-textfield
            label="Password"
            id="password"
            name="password"
            v-model="credentials.password"
            placeholder="Enter password"
            is-password
          />
          <d-auto-layout alignment="center-right">
            <d-text
              cursor="pointer"
              class="text-primary-light-500"
              font-weight="450"
              my0
              scale="subhead"
              @click="forgotPassword"
              >Forgot password?</d-text
            >
          </d-auto-layout>
        </d-auto-layout>

        <d-button color-scheme="primary">Continue</d-button>
        <d-auto-layout alignment="center">
          <d-text my0 font-weight="450" color="#2A2E33" scale="subhead"
            >Don't have an account?</d-text
          >
          <d-text
            cursor="pointer"
            my0
            class="text-primary-light-500"
            font-weight="450"
            scale="subhead"
            @click="signUp"
            >Sign up</d-text
          >
        </d-auto-layout>
      </d-auto-layout>
    </d-auto-layout>
  </d-auto-layout>
</template>

<script setup>
import { DBox, DAutoLayout, DTextfield, DButton, DText, DHeading } from "@deposits/ui-kit-vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  logo: {
    type: String,
    default: "https://assets.ondeposits.com/img/logo/your_brand/png/logo_all_dark.png",
  },
  signupRoute: {
    type: [String, Object],
  },
  forgotPasswordRoute: {
    type: [String, Object],
  },
});

const forgotPassword = () => {
  if (props.forgotPasswordRoute) {
    router.push(props.forgotPasswordRoute);
  }
};

const signUp = () => {
  if (props.signupRoute) {
    router.push(props.signupRoute);
  }
};

const emit = defineEmits(["submit"]);

const credentials = reactive({
  email: "",
  password: "",
});

const handleSubmit = () => {
  emit("submit", {
    email: credentials.email,
    password: credentials.password,
  });
};
</script>

<style lang="scss" scoped></style>
