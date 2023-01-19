import Head from "next/head";
import Link from "next/link";
import AllCmuccdcSmall from "../components/AllCmuccdcSmall";
import AllYakkawSmall from "../components/AllYakkawSmall";
import CmuccdcMedianWidget from "../components/CmuccdcMedianWidget";

import YakkawMedianWidget from "../components/YakkawMedianWidget";
export default function Home() {
  return (
    <>
      <Head>
        <title>YakLek Dust View</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container px-2 xl:px-0">
        <section className="mt-4 mb-8 ">
          <div className="my-4">
            <h2 className="text-3xl">Yakkaw</h2>
            <p className="my-1">
              ข้อมูลเฉลี่ย 6 ชั่วโมงต่อเนื่อง <wbr />
              แสดงตัวเลขค่าฝุ่น PM2.5 หน่วย{" "}
              <span>
                μg/m<sup>3</sup>
              </span>
            </p>
            <div>
              ค่ามัธยฐานชั่วโมงที่แล้ว: <YakkawMedianWidget />
            </div>

            <Link href={"/yakkaw"}>
              <a className="text-blue-700 hover:text-blue-500">ดูเพิ่มเติม</a>
            </Link>
          </div>

          <AllYakkawSmall />
        </section>

        <section className="mt-4 mb-8">
          <div className="my-4">
            <h2 className="text-3xl">CMU CCDC</h2>
            <p className="my-1">
              ข้อมูลรายชั่วโมง <wbr />
              แสดงตัวเลขค่าฝุ่น PM2.5 หน่วย{" "}
              <span>
                μg/m<sup>3</sup>
              </span>
            </p>
            <div>
              ค่ามัธยฐานชั่วโมงที่แล้ว: <CmuccdcMedianWidget />
            </div>

            <Link href={"/cmuccdc"}>
              <a className="text-blue-700 hover:text-blue-500">ดูเพิ่มเติม</a>
            </Link>
          </div>
          <AllCmuccdcSmall />
        </section>
      </main>
    </>
  );
}
