<template>
  <b-button
    :variant="variant"
    :class="[btnClass, borderRadius ? `br-${borderRadius}` : '']"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot v-if="useIcon" name="icon" />
    <span
      v-if="btnText"
      :class="[
        textClass,
        fontSize ? `fs-${fontSize}` : '',
        fontWeight ? `fw-${fontWeight}` : '',
      ]"
    >
      {{ btnText }}
    </span>
  </b-button>
</template>

<script>
export default {
  name: "UiButton",
  props: {
    variant: {
      type: String,
      required: false,
      default: "transparent",
    },
    btnText: {
      type: String,
      required: false,
      default: "",
    },
    btnClass: {
      type: String,
      required: false,
      default: "",
    },
    textClass: {
      type: String,
      required: false,
      default: "",
    },
    fontSize: {
      type: String,
      required: false,
      default: "",
    },
    fontWeight: {
      type: String,
      required: false,
      default: "",
    },
    borderRadius: {
      type: String,
      required: false,
      default: "",
    },
    useIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
    iconSrc: {
      type: String,
      required: false,
      default: "",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
