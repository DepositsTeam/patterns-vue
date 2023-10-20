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
      <d-box height="0.5px" width="100%" background="#E1E7EC" />
      <d-banner color-scheme="info" title="We’ll save your information for later use"></d-banner>
      <d-auto-layout
        item-spacing="16px"
        direction="vertical"
        is="form"
        @submit.prevent="handleSubmit"
      >
        <d-textfield
          label="Email Address"
          id="email"
          name="email"
          v-model="credentials.email"
          placeholder="example@gmail.com"
        />

        <d-button color-scheme="primary">Continue</d-button>
        <d-auto-layout alignment="center">
          <d-text my0 scale="subhead"
            >By clicking continue, you agree to the
            <d-box is="span" font-weight="700" color="#2A2E33"> {{ brandName }} </d-box>
            <d-box is="span" cursor="pointer" class="text-primary-light-500" font-weight="450">
              Terms</d-box
            >
            and
            <d-box is="span" cursor="pointer" class="text-primary-light-500" font-weight="450"
              >Privacy Policy.</d-box
            ></d-text
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
  DTextfield,
  DButton,
  DText,
  DHeading,
  DBanner,
} from "@deposits/ui-kit-vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  logo: {
    type: String,
    default: "https://assets.ondeposits.com/img/logo/your_brand/png/logo_all_dark.png",
  },
  brandName: {
    type: String,
    default: "Your Brand",
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
