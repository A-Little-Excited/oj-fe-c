import service from "@/utils/request";

export function getExamListService(params) {
  return service({
    url: "/exam/semiLogin/redis/list",
    method: "get",
    params,
  });
}
