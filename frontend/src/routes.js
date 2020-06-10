import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));

const Alternatif = React.lazy(() => import('./views/Alternatif/Alternatif'));
const TambahAlternatif = React.lazy(() => import('./views/Alternatif/TambahAlternatif'));

const Kriteria = React.lazy(() => import('./views/Kriteria/Kriteria'));
const TambahKriteria = React.lazy(() => import('./views/Kriteria/TambahKriteria'));

const SubKriteria = React.lazy(() => import('./views/SubKriteria/SubKriteria'));
const TambahSubKriteria = React.lazy(() => import('./views/SubKriteria/TambahSubKriteria'));

const BobotKriteria = React.lazy(() => import('./views/Bobot/BobotKriteria'));
const BobotSubKriteria = React.lazy(() => import('./views/Bobot/BobotSubKriteria'));

const Pengguna = React.lazy(() => import('./views/Pengguna/Pengguna'));
const Perhitungan = React.lazy(() => import('./views/Perhitungan/Perhitungan'));

// user
const UserAlternatif = React.lazy(() => import('./views/User/Alternatif'));
const UserPerhitungan = React.lazy(() => import('./views/User/Perhitungan'));



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  // { path: '/', name: 'Home' },
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // Alternatif
  { path: '/alternatif', name: 'Alternatif', component: Alternatif, exact:true },
  { path: '/alternatif/tambah', name: 'Tambah', component: TambahAlternatif },
  // Kriteria
  { path: '/kriteria', name: 'Kriteria', component: Kriteria, exact:true },
  { path: '/kriteria/tambah', name: 'Tambah', component: TambahKriteria },
  // Sub Kriteria
  { path: '/subkriteria/:idkriteria', name: 'Sub Kriteria', component: SubKriteria, exact:true },
  { path: '/subkriteria/tambah/:idKriteria', name: 'Tambah', component: TambahSubKriteria },
  // Bobot Kriteria
  { path: '/bobotkriteria', name: 'Bobot Kriteria', component: BobotKriteria, exact:true },
  { path: '/bobotsubkriteria', name: 'Bobot Sub Kriteria', component: BobotSubKriteria, exact:true },

  // pengguna
  { path: '/pengguna', name: 'Pengguna', component: Pengguna, exact:true },

  // perhitungan
  { path: '/perhitungan', name: 'Perhitungan', component: Perhitungan, exact:true },

  // user
  { path: '/user/alternatif', name: 'Alternatif', component: UserAlternatif, exact:true },
  { path: '/user/perhitungan', name: 'Perhitungan', component: UserPerhitungan, exact:true },
];

export default routes;
