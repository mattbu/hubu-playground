<template>
  <b-card
    :class="[
      'card-background',
      customClass,
      useBorder && 'bordered',
      usePointer && 'pointer',
    ]"
    :title="title"
    :body-class="bodyClass"
  >
    <template v-if="useHeader" #header>
      <slot name="header" />
    </template>
    <slot name="contents" />
  </b-card>
</template>

<script>
export default {
  name: "UiCard",
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    customClass: {
      type: String,
      required: false,
      default: "",
    },
    bodyClass: {
      type: String,
      required: false,
      default: "",
    },
    useHeader: {
      type: Boolean,
      required: false,
      default: false,
    },
    useBorder: {
      type: Boolean,
      required: false,
      default: false,
    },
    usePointer: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.card-background {
  border: none;
  border-radius: 12px;

  &.bordered {
    border: solid 1px #dee2e9;
  }

  &.pointer {
    cursor: pointer;
  }

  &.card {
    .card-body {
      padding: 24px;
    }
  }
}
</style>
