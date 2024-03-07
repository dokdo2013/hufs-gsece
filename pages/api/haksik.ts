import parse from "node-html-parser";
import { Cafeteria, HaksikParameter, getHaksik } from "../../src/utils/haksik";

export default async function handler(req, res) {
  const param: HaksikParameter = {
    startDt: "20240307",
    endDt: "20240307",
    caf_name: "인문관식당",
    caf_id: Cafeteria["인문관식당"],
  };

  const haksik = await getHaksik(param);

  const root = parse(haksik);

  // res.status(200).json({ text: "Hello" });

  console.log(root);

  const josik = root.querySelector(
    "body > form > table > tbody > tr:nth-child(2) > td.headerStyle"
  );

  // console.log(josik);

  // 응답의 Content-Type을 text/plain으로 설정
  res.setHeader("Content-Type", "text/html");
  res.setHeader("encoding", "utf-8");

  // 응답으로 보낼 텍스트 내용
  res.end(haksik);
}
