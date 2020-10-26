import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));

const Alternatif = React.lazy(() => import("./views/Alternatif/Alternatif"));
const TambahAlternatif = React.lazy(() =>
  import("./views/Alternatif/TambahAlternatif")
);
const EditAlternatif = React.lazy(() =>
  import("./views/Alternatif/EditAlternatif")
);

const Kriteria = React.lazy(() => import("./views/Kriteria/Kriteria"));
const TambahKriteria = React.lazy(() =>
  import("./views/Kriteria/TambahKriteria")
);

const SubKriteria = React.lazy(() => import("./views/SubKriteria/SubKriteria"));
const TambahSubKriteria = React.lazy(() =>
  import("./views/SubKriteria/TambahSubKriteria")
);

const Bobot = React.lazy(() => import("./views/Bobot"));
const HasilPerhitunganBobot = React.lazy(() =>
  import("./views/Bobot/HasilPerhitunganBobot")
);
const HasilPerhitunganFuzzy = React.lazy(() =>
  import("./views/Bobot/HasilPerhitunganFuzzy")
);

const Pengguna = React.lazy(() => import("./views/Pengguna/Pengguna"));
const Perhitungan = React.lazy(() => import("./views/Perhitungan/Perhitungan"));

// user
const UserAlternatif = React.lazy(() => import("./views/User/Alternatif"));
const UserPerhitungan = React.lazy(() => import("./views/User/Perhitungan"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  // { path: '/', name: 'Home' },
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  // Alternatif
  {
    path: "/alternatif",
    name: "Alternatif",
    component: Alternatif,
    exact: true,
  },
  { path: "/alternatif/tambah", name: "Tambah", component: TambahAlternatif },
  { path: "/alternatif/edit/:id", name: "Edit", component: EditAlternatif },
  // Kriteria
  { path: "/kriteria", name: "Kriteria", component: Kriteria, exact: true },
  { path: "/kriteria/tambah", name: "Tambah", component: TambahKriteria },
  // Sub Kriteria
  {
    path: "/subkriteria/:idkriteria",
    name: "Sub Kriteria",
    component: SubKriteria,
    exact: true,
  },
  {
    path: "/subkriteria/tambah/:idKriteria",
    name: "Tambah",
    component: TambahSubKriteria,
  },
  // Bobot Kriteria
  {
    path: "/bobot",
    name: "Bobot",
    component: Bobot,
    exact: true,
  },
  {
    path: "/hasil-perhitungan-bobot",
    name: "Hasil Perhitungan Bobot",
    component: HasilPerhitunganBobot,
    exact: true,
  },
  {
    path: "/hasil-perhitungan-fuzzy/:idBobot",
    name: "Hasil Perhitungan Bobot",
    component: HasilPerhitunganFuzzy,
    exact: true,
  },

  // pengguna
  { path: "/pengguna", name: "Pengguna", component: Pengguna, exact: true },

  // perhitungan
  {
    path: "/perhitungan",
    name: "Perhitungan",
    component: Perhitungan,
    exact: true,
  },
  

  // user
  {
    path: "/user/alternatif",
    name: "Alternatif",
    component: UserAlternatif,
    exact: true,
  },
  {
    path: "/user/perhitungan",
    name: "Perhitungan",
    component: UserPerhitungan,
    exact: true,
  },
];

export default routes;
