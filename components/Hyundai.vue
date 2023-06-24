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
              <b-container fluid>
                <b-row align-h="between">
                  <b-col cols="10" align-self="center" class="d-inline-flex">
                    <h6
                      style="
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 44px;
                        margin-bottom: 0;
                      "
                    >
                      {{ current.year }}년 {{ current.month }}월
                    </h6>
                    <b-form-spinbutton
                      v-model="current.month"
                      :formatter-fn="monthFomatter"
                      min="1"
                      max="12"
                      class="custom-spin-button"
                      inline
                    >
                      <template #decrement>
                        <img
                          src="@/assets/icons/spin_left.svg"
                          alt="이전 달 버튼 아이콘"
                        />
                      </template>
                      <template #increment>
                        <img
                          src="@/assets/icons/spin_right.svg"
                          alt="다음 달 버튼 아이콘"
                        />
                      </template>
                    </b-form-spinbutton>
                  </b-col>
                  <b-col cols="auto" align-self="center" class="text-right">
                    <span
                      style="color: #595959; font-size: 14px; line-height: 20px"
                      >근무일수: 20일</span
                    >
                  </b-col>
                </b-row>
              </b-container>
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
      current: {
        year: 0,
        month: 0,
      },
    };
  },
  computed: {},
  mounted() {
    this.getMonth();
  },
  methods: {
    getMonth() {
      const date = new Date();
      this.current.year = date.getFullYear();
      this.current.month = date.getMonth() + 1;
    },
    monthFomatter() {
      return `${this.current.month}월`;
    },
  },
};
</script>
