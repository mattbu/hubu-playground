<template>
  <div class="min-vh-100" style="background-color: #f3f3f3">
    <b-container fluid>
      <b-row v-if="false">
        <b-col cols="6">
          <UiMonthPicker
            placeholder="시작월"
            @select-month="filter.startMonth = $event"
          />
          <UiMonthPicker
            placeholder="종료월"
            @select-month="filter.endMonth = $event"
          />
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <UiCard>
            <template #contents>
              <PagePerformanceProductionSearchFilter
                @init-month="getMonth($event)"
                @change-month="getMonth($event)"
              />

              <HyundaiGrid></HyundaiGrid>
            </template>
          </UiCard>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Hyundai",
  data() {
    return {
      filter: {
        startMonth: "",
        endMonth: "",
      },
      current: {},
      lastDayOfCurrentMonth: 0,
    };
  },
  computed: {},
  watch: {
    lastDayOfCurrentMonth(val) {
      console.log(val);
    },
  },
  mounted() {},
  updated() {},
  methods: {
    getMonth(e) {
      this.current = e.current;
      this.lastDayOfCurrentMonth = e.lastDay;
    },
  },
};
</script>

<style lang="scss">
.table {
  tbody {
    tr {
      td {
        height: 60px;
        border: 1px solid #dee2e9;
      }
    }
  }
}
</style>
