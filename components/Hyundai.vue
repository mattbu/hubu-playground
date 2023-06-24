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

              <b-table-simple small responsive>
                <!-- <colgroup>
                  <col />
                  <col />
                </colgroup>
                <colgroup>
                  <col />
                  <col />
                  <col />
                </colgroup>
                <colgroup>
                  <col />
                  <col />
                </colgroup> -->
                <b-thead head-variant="dark">
                  <b-tr>
                    <b-th rowspan="2" colspan="2">호선</b-th>

                    <b-th colspan="3">전월 이월분</b-th>
                    <b-th colspan="3">04.03(월)</b-th>
                    <b-th colspan="3">04.04(화)</b-th>
                    <b-th colspan="3">04.05(수)</b-th>
                  </b-tr>

                  <b-tr>
                    <b-th>블록</b-th>
                    <b-th>매수</b-th>
                    <b-th>비고</b-th>

                    <b-th>블록</b-th>
                    <b-th>매수</b-th>
                    <b-th>비고</b-th>

                    <b-th>블록</b-th>
                    <b-th>매수</b-th>
                    <b-th>비고</b-th>

                    <b-th>블록</b-th>
                    <b-th>매수</b-th>
                    <b-th>비고</b-th>
                  </b-tr>
                </b-thead>

                <b-tbody>
                  <b-tr>
                    <b-td rowspan="2">3295</b-td>
                    <b-td rowspan="1">계획</b-td>
                    <b-td>0</b-td>
                    <b-td>0</b-td>
                  </b-tr>

                  <b-tr>
                    <b-td rowspan="1">실적</b-td>
                    <b-td rowspan="2">0</b-td>
                    <b-td>0</b-td>
                  </b-tr>

                  <b-tr> </b-tr>

                  <b-tr> </b-tr>

                  <b-tr> </b-tr>
                </b-tbody>

                <b-tfoot>
                  <b-tr>
                    <b-th colspan="2" variant="secondary">부재매수(일일)</b-th>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                  </b-tr>

                  <b-tr>
                    <b-th colspan="2" variant="secondary">부재매수(누적)</b-th>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                    <b-td variant="secondary">0</b-td>
                  </b-tr>
                </b-tfoot>
              </b-table-simple>
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
