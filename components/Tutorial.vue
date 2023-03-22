<!-- Please remove this file from your project -->
<template>
  <div>
    <ssr-carousel
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
    </ssr-carousel>
  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",
  data() {
    return {
      currentBannerIdx: 0,
      banners: [
        { id: 0, bg: "#eeeee4", obj: "#76b5c5", title: "차무식" },
        { id: 1, bg: "#76b5c5", obj: "#eab676", title: "양정팔" },
        { id: 2, bg: "#bfc2cc", obj: "#154c79", title: "이상구" },
      ],
    };
  },
  methods: {},
};
</script>
