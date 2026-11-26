/* Konfigurasi Pembinaan Disiplin — ubah file ini saja, tidak perlu menyentuh index.html */
window.APP_CONFIG = {
  // URL Web App Google Apps Script DIKO (sama dengan APP_CONFIG.API_URL di config.js DIKO)
  API_URL: 'https://script.google.com/macros/s/AKfycbwLeWoTUL7AaKJko5PMQ_o65ZTFFUM9qJui_hfV35xeGYDheSe20coMpnZKiOlNlVN83w/exec',

  // Kop & kota surat (nilai awal; dapat diubah di menu Penandatangan)
  KOTA: 'Sampit',
  KOP1: 'PEMERINTAH KABUPATEN KOTAWARINGIN TIMUR',
  KOP2: 'DINAS PENDIDIKAN',
  ALAMAT: '',

  // Penandatangan surat dinas (nilai awal)
  PENANDATANGAN: {
    nama: 'Yolanda Lonita Fenisia, S.STP., M.Si',
    nip: '198104141999122001',
    pangkat: 'Pembina Tingkat I',
    jabatan: 'Kepala Dinas Pendidikan'
  },

  // Pewawancara BAP (nilai awal di form BAP)
  PEWAWANCARA: {
    nama: 'EDIE SUCIPTO, S.Pd.I.,M.Pd',
    nip: '19810903 200904 1 001',
    jabatan: 'Kepala Bidang Pembinaan Ketenagaan'
  },

  // Isian awal lain
  TEMPAT: 'Kantor Dinas Pendidikan',
  KEPADA_PELIMPAHAN: 'Kepala BKPSDM Kabupaten Kotawaringin Timur'
};
