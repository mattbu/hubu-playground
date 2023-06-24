<template>
  <b-modal
    v-model="modalBool"
    title="BootstrapVue"
    @ok="clickOk"
    @cancel="clickCancel"
    @close="clickCancel"
  >
    <ul>
      <li v-for="(option, index) in options" :key="`opt-${index}`">
        {{ option.name }}
        <b-form-checkbox v-model="selectedNames" :value="option" />
      </li>
    </ul>
  </b-modal>
</template>

<script>
export default {
  props: {
    modalValue: {
      type: Boolean,
    },
    options: {
      type: Array,
    },
  },
  data() {
    return {
      selectedNames: [],
    };
  },
  computed: {
    modalBool: {
      get() {
        return this.modalValue;
      },
      set() {
        this._modalValue = false;
      },
    },
  },
  methods: {
    clickOk() {
      this.$emit("select-name", this.selectedNames);
      this.clickCancel();
      this.selectedNames = [];
    },
    clickCancel() {
      this.$emit("close-modal", false);
    },
  },
};
</script>
