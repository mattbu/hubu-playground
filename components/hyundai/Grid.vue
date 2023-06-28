<template>
  <grid
    class="custom-grid"
    :cols="columns"
    :rows="rows"
    :class-names="classNames"
    :autoWidth="true"
    :pagination="true"
    :language="{}"
  />
</template>

<script>
export default {
  name: "HyundaiGrid",
  data() {
    return {
      classNames: {
        container: "",
        table: "custom-table-class",
        th: "asd",
        td: "my-td-class",
      },
      columns: [
        {
          id: "index",
          name: "순번",
          formatter: (cell, row) => `Name: ${cell}`,
        },
        { id: "team", name: "팀/협력사" },
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
};
</script>

<style>
.custom-grid {
}
</style>
