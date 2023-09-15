import Layout from "../../components/layout";
import styles from "../../styles/login.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function formBeras() {
  const [nama, setNama] = useState(null);
  const [detail, setDetail] = useState(null);
  const router = useRouter();

  const {
    query: { idx },
  } = router;

  useEffect(() => {
    fetchDataJenisBerasByID();
    getItem();
  }, []);

  async function fetchDataJenisBerasByID() {
    const tokenx = localStorage.getItem("token");

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        x: tokenx,
        id: idx,
      },
    };
    const url = "../api/JenisBeras/detailJenisBerasHandler";
    const res = await fetch(url, options);
    const data = await res.json();
    const det = data.data.payload;
    console.log(det.nama);
    setNama(det.nama);
    setDetail(det);
  }

  async function getItem() {}

  async function handleSubmit() {
    const method = "POST";
    const tokenx = localStorage.getItem("token");
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        x: tokenx,
        id: idx,
      },
      body: JSON.stringify({
        nama: nama,
      }),
    };
    const url = "../api/JenisBeras/editJenisBerasHandler";
    const res = await fetch(url, options);
    const data = await res.json();
    const status = data.status;
    if (status) {
      router.push("/JenisBeras/getJenisBeras");
      alert("data berhasil dirubah");
    } else {
      alert(data.data.message);
    }
  }

  return (
    <>
      <Layout>
        <div className="rounded-sm border w-1/2 bg-white shadow">
          <div className="border-b py-4 px-6">
            <h1 className="font-medium">Form Input Jenis Beras</h1>
          </div>
          <div className="p-5">
            <label className="mb-2.5 block" htmlFor="Berat Beras">
              Nama Jenis Beras
            </label>
            <input
              className="w-full rounded border-[1.5px] border-stroke bg-transparent mb-4 py-3 px-5 font-medium outline-none transition focus:border-blue-500 active:border-blue-500"
              type="text"
              name="Nama Jenis Beras"
              placeholder="Nama Jenis Beras"
              value={nama}
              onChange={(event) => setNama(event.target.value)}
            />
            <button
              className="flex w-full justify-center rounded bg-blue-500 hover:opacity-80 active:bg-blue-700 p-3 font-medium text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>{" "}
          </div>
        </div>
      </Layout>
    </>
  );
}