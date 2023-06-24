<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-button @click="viewType = 'paginated'">페이지</b-button>
        <b-button @click="viewType = 'scroll-doc'">스크롤</b-button>
      </b-col>
    </b-row>
    <b-row class="epub-wrapper">
      <b-col cols="12" class="epub-wrapper">
        <div class="prev-btn" @click.prevent="rendition.prev()" />
        <div id="area" style="height: 720px"></div>
        <div class="next-btn" @click.prevent="rendition.next()" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Epub from "epubjs";

export default {
  data() {
    return {
      book: null,
      rendition: null,
      displayed: null,
      viewType: "paginated",
    };
  },
  watch: {
    viewType(val) {
      this.rendition.flow(val);
    },
  },
  mounted() {
    this.book = Epub(
      "https://smcomics-bucket.s3.ap-northeast-2.amazonaws.com/6217/8109/"
    );

    this.rendition = this.book.renderTo("area", {
      method: "default",
      width: "100%",
      height: "100%",
      minSpreadWidth: 768,
      flow: this.viewType,
      spread: "none",
      manager: "continuous",
      allowScriptedContent: true,
    });

    this.displayed = this.rendition.display();

    this.book.opened.then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="scss">
.epub-wrapper {
  position: relative;
  padding: 0;

  .prev-btn {
    cursor: pointer;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 18%;
    z-index: 1;
    background-color: transparent;
  }
  .next-btn {
    cursor: pointer;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 18%;
    background-color: transparent;
  }
}
</style>
