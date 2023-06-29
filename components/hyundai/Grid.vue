<template>
  <div>
    <grid
      ref="gridComponent"
      class="custom-grid"
      :cols="columns"
      :rows="rows"
      :class-names="classNames"
      :autoWidth="true"
      :pagination="true"
      :language="language"
      :theme="'mermaid'"
    />
    <button @click="addRow">추가하기</button>
    <button @click="save">저장하기</button>
  </div>
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
          name: "순번", // 헤더에 html
        },
        {
          id: "team",
          name: "팀/협력사",
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
          onClick: (row) => console.log("로우클릭"),
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
      editedRows: [],
    };
  },
  mounted() {
    this.columns.forEach((col) => {
      col.data = (row) =>
        this.$gridjs.h("input", {
          className: `gridjs-cell ${col.id}-${row.index}`,
          value: `${row[col.id]}`,
          onInput: (e) => this.updateRowData(e, row, col.id),
          onChange: (e) => this.editCell(e, row),
        });
    });

    this.$nextTick(() => {
      this.grid = this.$refs.gridComponent;
      console.log(this.grid);
    });
  },
  methods: {
    updateRowData(e, row, colId) {
      row[colId] = e.target.value;
      console.log(row[colId]);
    },
    save() {
      console.log(this.editedRows);
    },
    editCell(e, rowData) {
      this.editedRows.push(this.rows[rowData.index - 1]);
      this.editedRows = this.editedRows.filter(
        (editedRow, idx) => this.editedRows.indexOf(editedRow) === idx
      );
      console.log(this.editedRows);

      this.$emit("edit-cell", this.editedRows);
    },
    addRow() {
      this.rows.push({
        index: this.rows.length + 1,
        team: "",
        shipId: "",
        block: "",
        bay: "",
        sched: "",
        seq: "",
        etc: "",
        preProcessor: "",
        stock: "",
        cut: "",
        press: "",
        heat: "",
      });
    },
  },
};
</script>

<style lang="scss">
/* .custom-grid {
} */
</style>
