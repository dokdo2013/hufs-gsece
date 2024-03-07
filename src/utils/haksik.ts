import axios from "axios";
import qs from "qs";

// https://wis.hufs.ac.kr/jsp/HUFS/cafeteria/viewWeek.jsp?startDt=20240304&endDt=20240310&caf_name=%EC%9D%B8%EB%AC%B8%EA%B4%80%EC%8B%9D%EB%8B%B9&caf_id=h101

const baseUrl = "https://wis.hufs.ac.kr/jsp/HUFS/cafeteria/viewWeek.jsp";

export enum Cafeteria {
  "인문관식당" = "h101",
  "교수회관식당" = "h102",
  "스카이라운지" = "h103",
  "국제사회교육원식당" = "h201",
  "후생관_교직원식당" = "h202",
  "후생관_학생식당" = "h203",
  "어문관" = "h204",
  "HufsDorm 식당" = "h205",
}

export type HaksikParameter = {
  /**
   * @example "20240304"
   */
  startDt: string;

  /**
   * @example "20240310"
   */
  endDt: string;

  /**
   * @example "인문관식당"
   */
  caf_name: string;

  /**
   * @example "h101"
   */
  caf_id: Cafeteria;
};

export const getHaksik = async (parameter: HaksikParameter) => {
  const url = `${baseUrl}?${qs.stringify(parameter)}`;
  const response = await axios.get(url);

  console.log(response.data);

  // copy to clipboard

  return response.data;
};
