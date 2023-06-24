<template>
  <month-picker-input
    class="custom-month-picker"
    ref="monthPicker"
    lang="ko"
    :placeholder="placeholder"
    :no-default="true"
    @change="changeMonth"
  />
</template>

<script>
export default {
  name: "UiMonthPicker",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      currentMonth: "",
      monthPickerInput: null,
      monthPickerYear: null,
      monthPickerNavBtns: null,
    };
  },
  mounted() {
    this.monthPickerYear = this.$refs.monthPicker.$el.querySelector(
      ".month-picker__year p"
    );
    this.monthPickerYear.innerText = `${this.monthPickerYear.innerText.trim()}년`;

    this.monthPickerNavBtns = this.$refs.monthPicker.$el.querySelectorAll(
      ".month-picker__year button"
    );
    this.monthPickerNavBtns.forEach((btn) => {
      btn.innerText = "";
    });
  },
  methods: {
    changeMonth(e) {
      this.currentMonth = `${e.year}-${
        e.monthIndex < 10 ? `0${e.monthIndex}` : e.monthIndex
      }`;

      this.$emit("select-month", this.currentMonth);

      this.$nextTick(() => {
        this.monthPickerYear.innerText = `${e.year}년`;
      });
    },
  },
};
</script>

<style lang="scss">
.custom-month-picker {
  &.month-picker-input-container {
    .month-picker {
      padding: 0 24px 24px;
      box-shadow: none;

      &-input {
        max-width: 160px;
        height: 44px;
        color: #1a1a1a;
        border-radius: 8px;
        border-color: #d9d9d9;
        background: #fff url("@/assets/icons/select_arrow.svg") right 16px
          center/8px 10px no-repeat;
        cursor: pointer;

        &:focus,
        &:active {
          border-color: #014099;
          border-width: 0.5px;
          box-shadow: 0 0 0 4px rgba(1, 64, 153, 0.1);
        }

        &::placeholder {
          color: #595959;
        }
      }

      &__container {
        max-width: 300px;
        width: 300px;
        top: 52px;
        border: solid 1px #1c3655;
        border-radius: 12px;
        box-shadow: 0 16px 32px 0 rgba(0, 31, 74, 0.2);
      }

      &__year {
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding: 24px 24px 8px;
        border-top: {
          left-radius: 12px;
          right-radius: 12px;
        }
        box-shadow: none;

        p {
          color: #242a30;
          margin: 0;
          line-height: 21px;
          letter-spacing: 0;
          font: {
            size: 14px;
            weight: 500;
          }
        }

        button {
          width: 16.8px;
          height: 16.8px;
          padding: 0;
          position: static;
          flex: none;
          border: none;
          border-radius: 0;
          background: {
            color: #fff;
            repeat: no-repeat;
          }

          &:first-child {
            background: {
              position: left center;
              image: url("@/assets/icons/month_picker_left_arrow.svg");
            }
          }

          &:last-child {
            background: {
              position: right center;
              image: url("@/assets/icons/month_picker_right_arrow.svg");
            }
          }
        }
      }

      &__month {
        height: 72px;
        padding: 24px;
        color: #242a30;
        background-color: #fff;
        border-color: #f5f6f8;

        &:hover {
          background-color: #f2f8ff;
          &::after {
            box-shadow: none;
          }
        }

        &.selected {
          color: #fff;
          background-color: #014099;
          border-radius: 0;
          box-shadow: none;
          text-shadow: none;
        }
      }
    }
  }
}
</style>
