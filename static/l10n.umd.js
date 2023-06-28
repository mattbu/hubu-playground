!(function (e, r) {
  "object" == typeof exports && "undefined" != typeof module
    ? r(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], r)
    : r((((e || self).gridjs = e.gridjs || {}), (e.gridjs.l10n = {})));
})(this, function (e) {
  (e.arSA = {
    search: { placeholder: "ابدأ البحث" },
    sort: { sortAsc: "الترتيب تصاعدي", sortDesc: "الترتيب تنازلي" },
    pagination: {
      previous: "السابق",
      next: "التالي",
      navigate: function (e, r) {
        return "الصفحة " + e + " من " + r;
      },
      page: function (e) {
        return "الصفحة " + e;
      },
      showing: "المعروض",
      of: "من",
      to: "إلى",
      results: "النتائج",
    },
    loading: "جاري التحميل...",
    noRecordsFound: "لم نجد ما تبحث عنه",
    error: "حصل خطأ ما أثناء جلب البيانات",
  }),
    (e.cnCN = {
      search: { placeholder: "输入关键字..." },
      sort: { sortAsc: "升序排列", sortDesc: "降序排列" },
      pagination: {
        previous: "上一页",
        next: "下一页",
        navigate: function (e, r) {
          return "第" + e + "页，共" + r + "页";
        },
        page: function (e) {
          return "第" + e + "页";
        },
        showing: "第",
        of: "到",
        to: "条记录，共",
        results: "条",
      },
      loading: "玩命加载中...",
      noRecordsFound: "没找到匹配的项",
      error: "获取数据时发生了错误",
    }),
    (e.csCZ = {
      search: { placeholder: "Napište klíčové slovo..." },
      sort: {
        sortAsc: "Seřadit sloupec vzestupně",
        sortDesc: "Seřadit sloupec sestupně",
      },
      pagination: {
        previous: "Předchozí",
        next: "Další",
        navigate: function (e, r) {
          return "Stránka " + e + " z " + r;
        },
        page: function (e) {
          return "Stránka " + e;
        },
        showing: "Zobrazeno",
        of: "z",
        to: "až",
        results: "výsledků",
      },
      loading: "Načítám...",
      noRecordsFound: "Nebyly nalezeny žádné odpovídající záznamy",
      error: "Při načítání dat došlo k chybě",
    }),
    (e.deDE = {
      search: { placeholder: "Geben Sie ein Schlüsselwort ein..." },
      sort: {
        sortAsc: "Spalte aufsteigend sortieren",
        sortDesc: "Spalte absteigend sortieren",
      },
      pagination: {
        previous: "Bisherige",
        next: "Nächste",
        navigate: function (e, r) {
          return "Seite " + e + " von " + r;
        },
        page: function (e) {
          return "Seite " + e;
        },
        showing: "Anzeigen",
        of: "von",
        to: "zu",
        results: "Ergebnisse",
      },
      loading: "Wird geladen...",
      noRecordsFound: "Keine übereinstimmenden Aufzeichnungen gefunden",
      error: "Beim Abrufen der Daten ist ein Fehler aufgetreten",
    }),
    (e.esES = {
      search: { placeholder: "Buscar..." },
      sort: {
        sortAsc: "Ordenar la columna en orden ascendente",
        sortDesc: "Ordenar la columna en orden descendente",
      },
      pagination: {
        previous: "Anterior",
        next: "Siguiente",
        navigate: function (e, r) {
          return "Página " + e + " de " + r;
        },
        page: function (e) {
          return "Página " + e;
        },
        showing: "Mostrando registros del",
        of: "de un total de",
        to: "al",
        results: "registros",
      },
      loading: "Cargando...",
      noRecordsFound: "No se encontraron registros",
      error: "Se produjo un error al recuperar datos",
    }),
    (e.faIR = {
      search: { placeholder: "جست‌جو برای..." },
      sort: { sortAsc: "مرتب سازی صعودی", sortDesc: "مرتب سازی نزولی" },
      pagination: {
        previous: "قبلی",
        next: "بعدی",
        navigate: function (e, r) {
          return "صفحه " + e + " از " + r;
        },
        page: function (e) {
          return "صفحه " + e;
        },
        showing: "نمایش",
        of: "از",
        to: "تا",
        results: "نتایج",
      },
      loading: "در حال دریافت...",
      noRecordsFound: "نتیجه‌ای یافت نشد.",
      error: "دریافت اطلاعات با خطا مواجه شد.",
    }),
    (e.frFR = {
      search: { placeholder: "🔍 Recherche..." },
      sort: {
        sortAsc: "Trier la colonne dans l'ordre croissant",
        sortDesc: "Trier la colonne dans l'ordre décroissant",
      },
      pagination: {
        previous: "Précédent",
        next: "Suivant",
        navigate: function (e, r) {
          return "Page " + e + " de " + r;
        },
        page: function (e) {
          return "Page " + e;
        },
        showing: "Affichage des résultats",
        of: "sur",
        to: "à",
        results: "",
      },
      loading: "Chargement...",
      noRecordsFound: "Aucun résultat trouvé",
      error: "Une erreur est survenue lors de la récupération des données",
    }),
    (e.idID = {
      search: { placeholder: "Cari pada tabel..." },
      sort: { sortAsc: "Sortir kolom naik", sortDesc: "Sortir kolom turun" },
      pagination: {
        previous: "Sebelumnya",
        next: "Berikutnya",
        navigate: function (e, r) {
          return "Halaman " + e + " dari " + r;
        },
        page: function (e) {
          return "Halaman " + e;
        },
        showing: "Menampilkan",
        of: "dari",
        to: "sampai",
        results: "hasil",
      },
      loading: "Memuat...",
      noRecordsFound: "Tidak ada data yang ditemukan",
      error: "Terjadi error saat memuat data",
    }),
    (e.itIT = {
      search: { placeholder: "Ricerca..." },
      sort: { sortAsc: "Ordina ascendente", sortDesc: "Ordina discendente" },
      pagination: {
        previous: "Precedente",
        next: "Successivo",
        navigate: function (e, r) {
          return "Pagina " + e + " di " + r;
        },
        page: function (e) {
          return "Pagina " + e;
        },
        showing: "Mostra",
        of: "dei",
        to: "di",
        results: "risultati",
      },
      loading: "Caricamento...",
      noRecordsFound: "Nessun risultato trovato.",
      error: "Errore durante il caricamento dei dati.",
    }),
    (e.jaJP = {
      search: { placeholder: "検索ワードを入力..." },
      sort: { sortAsc: "昇順でソート", sortDesc: "降順でソート" },
      pagination: {
        previous: "前へ",
        next: "次へ",
        navigate: function (e, r) {
          return e + " / " + r + " ページ";
        },
        page: function (e) {
          return e + " ページ";
        },
        showing: "現在",
        of: "件目を表示中（全",
        to: "～",
        results: "件）",
      },
      loading: "ロード中...",
      noRecordsFound: "一致する検索結果がありません",
      error: "データ取得中にエラーが発生しました",
    }),
    (e.koKR = {
      search: { placeholder: "검색어 입력..." },
      sort: { sortAsc: "내림차순 정렬", sortDesc: "오름차순 정렬" },
      pagination: {
        previous: "이전",
        next: "다음",
        navigate: function (e, r) {
          return r + " 중 " + e + " 페이지";
        },
        page: function (e) {
          return e + " 페이지";
        },
        showing: "결과보기:",
        of: "까지 총",
        to: "에서",
        results: "개",
      },
      loading: "로딩중...",
      noRecordsFound: "일치하는 레코드 없음",
      error: "데이터 조회 오류",
    }),
    (e.nbNO = {
      search: { placeholder: "Søk..." },
      sort: {
        sortAsc: "Sorter kolonne i stigende rekkefølge",
        sortDesc: "Sorter kolonne i synkende rekkefølge",
      },
      pagination: {
        previous: "Forrige",
        next: "Neste",
        navigate: function (e, r) {
          return "Side " + e + " av " + r;
        },
        page: function (e) {
          return "Side " + e;
        },
        showing: "Viser",
        of: "av",
        to: "til",
        results: "resultater",
      },
      loading: "Laster inn...",
      noRecordsFound: "Ingen resultater funnet",
      error: "Det oppsto en feil under henting av data",
    }),
    (e.ptBR = {
      search: { placeholder: "Digite uma palavra-chave..." },
      sort: {
        sortAsc: "Coluna em ordem crescente",
        sortDesc: "Coluna em ordem decrescente",
      },
      pagination: {
        previous: "Anterior",
        next: "Próxima",
        navigate: function (e, r) {
          return "Página " + e + " de " + r;
        },
        page: function (e) {
          return "Página " + e;
        },
        showing: "Mostrando",
        of: "de",
        to: "até",
        results: "resultados",
      },
      loading: "Carregando...",
      noRecordsFound: "Nenhum registro encontrado",
      error: "Ocorreu um erro ao buscar os dados",
    }),
    (e.ptPT = {
      search: { placeholder: "Pesquisar..." },
      sort: {
        sortAsc: "Ordenar por ordem crescente",
        sortDesc: "Ordenar por ordem descendente",
      },
      pagination: {
        previous: "Anterior",
        next: "Próxima",
        navigate: function (e, r) {
          return "Página " + e + " de " + r;
        },
        page: function (e) {
          return "Página " + e;
        },
        showing: "A mostrar",
        of: "de",
        to: "até",
        results: "registos",
      },
      loading: "A carregar...",
      noRecordsFound: "Nenhum registro encontrado",
      error: "Ocorreu um erro a obter os dados",
    }),
    (e.ruRU = {
      search: { placeholder: "Поиск..." },
      sort: {
        sortAsc: "Сортировка по возрастанию",
        sortDesc: "Сортировка по убыванию",
      },
      pagination: {
        previous: "Назад",
        next: "Вперед",
        navigate: function (e, r) {
          return "Страница " + e + " из " + r;
        },
        page: function (e) {
          return "Страница " + e;
        },
        showing: "Отображение с",
        of: "из",
        to: "по",
        results: "записей",
      },
      loading: "Загрузка...",
      noRecordsFound: "Не найдено подходящих записей",
      error: "Ошибка при загрузке данных",
    }),
    (e.trTR = {
      search: { placeholder: "Anahtar kelime girin..." },
      sort: {
        sortAsc: "Artan şekilde sırala",
        sortDesc: "Azalan şekilde sırala",
      },
      pagination: {
        previous: "Önceki",
        next: "Sonraki",
        navigate: function (e, r) {
          return "Sayfa " + e + "/" + r;
        },
        page: function (e) {
          return "Sayfa " + e;
        },
        showing: "Gösteriliyor",
        of: "nın",
        to: "göre",
        results: "Sonuçlar",
      },
      loading: "Bekleniyor...",
      noRecordsFound: "Eşleşen kayıt bulunamadı",
      error: "Veriler alınırken bir hata oluştu",
    }),
    (e.uaUA = {
      search: { placeholder: "Пошук..." },
      sort: {
        sortAsc: "Сортування за зростанням",
        sortDesc: "Сортування за зменшенням",
      },
      pagination: {
        previous: "Назад",
        next: "Далі",
        navigate: function (e, r) {
          return "Сторінка " + e + " з " + r;
        },
        page: function (e) {
          return "Сторінка " + e;
        },
        showing: "Відображення з",
        of: "з",
        to: "до",
        results: "записів",
      },
      loading: "Завантаження...",
      noRecordsFound: "Не знайдено відповідних записів",
      error: "Помилка при завантаженні даних",
    });
});
//# sourceMappingURL=l10n.umd.js.map
