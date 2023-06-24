<template>
  <b-row align-h="between">
    <b-col cols="10" align-self="center" class="d-inline-flex">
      <h3
        class="search-filter-title"
        style="
          font-size: 18px;
          font-weight: 600;
          line-height: 44px;
          margin-bottom: 0;
        "
      >
        {{ current.year }}년 {{ current.month }}월
      </h3>

      <b-form-spinbutton
        v-model="current.month"
        :formatter-fn="monthFomatter"
        min="1"
        max="12"
        class="custom-spin-button"
        inline
        @change="changeMonth"
      >
        <template #decrement>
          <img src="@/assets/icons/spin_left.svg" alt="이전 달 버튼 아이콘" />
        </template>
        <template #increment>
          <img src="@/assets/icons/spin_right.svg" alt="다음 달 버튼 아이콘" />
        </template>
      </b-form-spinbutton>
    </b-col>

    <b-col cols="auto" align-self="center" class="ml-auto">
      <span style="color: #595959; font-size: 14px; line-height: 20px"
        >근무일수: 20일</span
      >
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "PagePerformanceProductionSearchFilter",
  data() {
    return {
      current: {
        year: 0,
        month: 0,
      },
      lastDayOfCurrentMonth: 0,
    };
  },
  mounted() {
    this.getMonth();
  },
  methods: {
    getMonth() {
      const date = new Date();
      this.current.year = date.getFullYear();
      this.current.month = date.getMonth() + 1;

      this.lastDayOfCurrentMonth = new Date(
        this.current.year,
        this.current.month,
        0
      ).getDate();

      this.$emit("init-month", {
        current: this.current,
        lastDay: this.lastDayOfCurrentMonth,
      });
    },
    monthFomatter() {
      return `${this.current.month}월`;
    },
    changeMonth(e) {
      this.lastDayOfCurrentMonth = new Date(this.current.year, e, 0).getDate();
      this.$emit("change-month", {
        current: this.current,
        lastDay: this.lastDayOfCurrentMonth,
      });
    },
  },
};
</script>
