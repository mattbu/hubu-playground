<template>
  <b-container fluid class="login px-0">
    <!-- <img class="login-bg" src="@/assets/img/login_bg.svg" alt="" /> -->
    <b-row class="min-vh-100" align-h="center">
      <b-col align-self="center" cols="auto">
        <UiCard :use-header="true" custom-class="login-card">
          <template #header>
            <img src="@/assets/icons/logo.svg" alt="" />
          </template>

          <template #contents>
            <h1 class="login-title">로그인</h1>

            <label class="login-input-label" for="id-input">사번</label>
            <b-form-input
              id="id-inpiut"
              class="login-input"
              placeholder="사번을 입력하세요."
            />

            <label class="login-input-label" for="id-input">비밀번호</label>
            <b-form-input
              id="password-input"
              type="password"
              class="login-input"
              placeholder="비밀번호를 입력하세요."
            />

            <b-form-checkbox
              class="login-checkbox"
              value="accepted"
              unchecked-value="not_accepted"
            >
              사번 저장
            </b-form-checkbox>

            <UiButton btn-text="로그인" btn-class="login-btn" />
          </template>
        </UiCard>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {};
  },
};
</script>
