<!-- Please remove this file from your project -->
<template>
  <div>
    <!-- <ssr-carousel
      v-if="false"
      v-model="currentBannerIdx"
      loop
      show-dots
      show-arrows
      :responsive="[{ maxWidth: 768, gutter: 20 }]"
    >
      <div v-for="(item, index) in banners" :key="`banner-${index}`">
        <div :style="{ height: '500px', backgroundColor: `${item.bg}` }">
          <b-container class="objet">
            <transition
              name="fade"
              appear
              appear-to-class="fade-appear-to"
              appear-active-class="fade-appear-active"
            >
              <div
                v-if="currentBannerIdx === index"
                class="objet-circle"
                :style="{ backgroundColor: `${item.obj}` }"
              />
            </transition>
            <transition
              name="text"
              appear
              appear-to-class="text-appear-to"
              appear-active-class="text-appear-active"
            >
              <div v-if="currentBannerIdx === index" class="objet-text">
                <h2>{{ item.title }}</h2>
              </div></transition
            >
          </b-container>
        </div>
      </div>
    </ssr-carousel> -->

    <b-container>
      <!-- <b-row v-if="false">
        <b-col cols="3">
          <b-form-input v-model="test" readonly @click="modalValue = true" />
          <ul>
            <li v-for="(item, index) in names" :key="`name-${index}`">
              {{ item }}
            </li>
          </ul>
          <b-button
            v-for="(item, index) in selectedValue"
            :key="`name-${index}`"
            @click="remove(item.id)"
            >{{ item.name }}</b-button
          >
        </b-col>
      </b-row> -->

      <b-row class="mt-5">
        <b-col>
          <UiMonthPicker
            placeholder="시작월"
            @select-month="filter.startMonth = $event"
          />
        </b-col>

        <b-col>
          {{ filter }}
        </b-col>

        <b-col>
          <UiMonthPicker
            placeholder="종료월"
            @select-month="filter.endMonth = $event"
          />
        </b-col>
      </b-row>
    </b-container>

    <!-- <VModal
      :modal-value="modalValue"
      :options="options"
      @select-name="selectName($event)"
      @close-modal="cl"
    /> -->
  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",
  data() {
    return {
      modalValue: false,
      selectedValue: [],
      currentBannerIdx: 0,
      banners: [
        { id: 0, bg: "#eeeee4", obj: "#76b5c5", title: "차무식" },
        { id: 1, bg: "#76b5c5", obj: "#eab676", title: "양정팔" },
        { id: 2, bg: "#bfc2cc", obj: "#154c79", title: "이상구" },
      ],
      names: [
        // { id: 0, firstName: "Moosik", lastName: "Cha" },
        // { id: 1, firstName: "Jeongpal", lastName: "Yang" },
        // { id: 2, firstName: "Sanggoo", lastName: "Lee" },
      ],
      options: [
        { id: 0, name: "Moosik" },
        { id: 1, name: "Jeongpal" },
        { id: 2, name: "Sanggoo" },
      ],
      dateMonth: "asd",
      //
      filter: {
        startMonth: "",
        endMonth: "",
      },
    };
  },
  computed: {
    // fullName() {
    //   return this.names.map((item) => `${item.lastName} ${item.firstName}`);
    // },
    test: {
      get() {
        return this.selectedValue
          .map((item) => item.name)
          .toString()
          .replace(",", ", ");
      },
    },
    test2: {
      get() {
        return this.selectedValue.map((item) => item.name);
      },
    },
  },
  mounted() {},
  methods: {
    selectName(e) {
      this.selectedValue = e;
    },
    cl(e) {
      console.log("ttttt");
      this.modalValue = e;
    },
    remove(id) {
      console.log(id);
    },
    changeMonth() {},
  },
};
</script>
