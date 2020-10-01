import { getRole } from "./utils/token";

let nav;

if (getRole() && getRole() === "admin") {
  nav = {
    items: [
      {
        name: "Dashboard",
        url: "/dashboard",
        icon: "icon-speedometer",
      },
      {
        name: "Alternatif",
        url: "/alternatif",
        icon: "fa fa-archive",
        children: [
          {
            name: "Data Alternatif",
            url: "/alternatif",
            icon: "fa fa-list-ul",
          },
          {
            name: "Tambah Alternatif",
            url: "/alternatif/tambah",
            icon: "fa fa-plus",
          },
        ],
      },
      {
        name: "Kriteria",
        url: "/kriteria",
        icon: "fa fa-archive",
      },
      // {
      //   name: 'Sub Kriteria',
      //   url: '/subkriteria',
      //   icon: 'fa fa-archive',
      // },
      {
        name: "Nilai Bobot",
        url: "/bobot",
        icon: "fa fa-archive",
      },
      {
        name: "Perhitungan",
        url: "/perhitungan",
        icon: "fa fa-archive",
      },
      {
        name: "Pengguna",
        url: "/pengguna",
        icon: "fa fa-user",
      },
    ],
  };
}

if (getRole() && getRole() === "user") {
  nav = {
    items: [
      {
        name: "Dashboard",
        url: "/dashboard",
        icon: "icon-speedometer",
      },
      {
        name: "Alternatif",
        url: "/user/alternatif",
        icon: "fa fa-archive",
      },
      {
        name: "Perhitungan",
        url: "/user/perhitungan",
        icon: "fa fa-archive",
      },
    ],
  };
}

export default nav;
