import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));

const Alternatif = React.lazy(() => import('./views/Alternatif/Alternatif'));
const TambahAlternatif = React.lazy(() => import('./views/Alternatif/TambahAlternatif'));

const Kriteria = React.lazy(() => import('./views/Kriteria/Kriteria'));
const TambahKriteria = React.lazy(() => import('./views/Kriteria/TambahKriteria'));

const SubKriteria = React.lazy(() => import('./views/SubKriteria/SubKriteria'));
const TambahSubKriteria = React.lazy(() => import('./views/SubKriteria/TambahSubKriteria'));

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

];

export default routes;
