<template>
  <grid
    class="custom-grid"
    :cols="columns"
    :rows="rows"
    :class-names="classNames"
    :autoWidth="true"
    :pagination="true"
    :language="language"
    :theme="'mermaid'"
  />
</template>

<script>
export default {
  name: "HyundaiGrid",
  data() {
    return {
      language: {
        search: {
          placeholder: "검색어 입력...",
        },
        sort: {
          sortAsc: "내림차순 정렬",
          sortDesc: "오름차순 정렬",
        },
        pagination: {
          previous: "이전",
          next: "다음",
          navigate: (page, pages) => `${pages} 중 ${page} 페이지`,
          page: (page) => `${page} 페이지`,
          showing: "결과보기:",
          of: "까지 총",
          to: "에서",
          results: "개",
        },
        loading: "로딩중...",
        noRecordsFound: "일치하는 레코드 없음",
        error: "데이터 조회 오류",

        // pagination: {
        //   previous: "⬅️",
        //   next: "➡️",
        //   showing: "😃 Displaying",
        //   results: () => "Records",
        // },
      },
      classNames: {
        container: "",
        table: "custom-table-class",
        th: "asd",
        td: "my-td-class",
      },
      columns: [
        {
          id: "index",
          name: this.$gridjs?.html(`<i>순번</i>`), // 헤더에 html
          formatter: (cell, row) => `Name: ${cell}`, // cell에 html
        },
        {
          id: "team",
          name: "팀/협력사",
          formatter: (cell, row) => this.$gridjs.html(`<b>${cell}</b>`),
        },
        { id: "shipId", name: "호선" },
        { id: "block", name: "단위블록" },
        { id: "bay", name: "BAY" },
        { id: "sched", name: "요구일" },
        { id: "seq", name: "절단작업순서" },
        { id: "etc", name: "비고" },
        { id: "preProcessor", name: "전처리" },
        { id: "stock", name: "강제입고" },
        { id: "cut", name: "절단" },
        { id: "press", name: "프레스" },
        { id: "heat", name: "가열" },
      ],
      rows: [
        {
          index: "1",
          team: "대조립 1부",
          shipId: "1111",
          block: "A11P/S",
          bay: "N",
          sched: "긴급",
          seq: "1/27",
          etc: "4/18성형완료",
          preProcessor: "완",
          stock: "",
          cut: "완",
          press: "완",
          heat: "",
        },
        {
          index: "2",
          team: "대조립 2부",
          shipId: "2222",
          block: "B12R",
          bay: "N",
          sched: "긴급",
          seq: "1/27",
          etc: "4/9성형완료",
          preProcessor: "완",
          stock: "",
          cut: "완",
          press: "완",
          heat: "",
        },
      ],
    };
  },
  mounted() {
    console.log(this.$gridjs);
    // 헤더에 html
    // this.columns = [
    //   {
    //     id: "index",
    //     name: this.$gridjs.html(`<i>순번</i>`),
    //     formatter: (cell, row) => `Name: ${cell}`,
    //   },
    //   {
    //     id: "team",
    //     name: "팀/협력사",
    //     formatter: (cell, row) => this.$gridjs.html(`<b>${cell}</b>`),
    //   },
    //   { id: "shipId", name: "호선" },
    //   { id: "block", name: "단위블록" },
    //   { id: "bay", name: "BAY" },
    //   { id: "sched", name: "요구일" },
    //   { id: "seq", name: "절단작업순서" },
    //   { id: "etc", name: "비고" },
    //   { id: "preProcessor", name: "전처리" },
    //   { id: "stock", name: "강제입고" },
    //   { id: "cut", name: "절단" },
    //   { id: "press", name: "프레스" },
    //   { id: "heat", name: "가열" },
    // ];
  },
  methods: {},
};
</script>

<style lang="scss">
/* .custom-grid {
} */
</style>
