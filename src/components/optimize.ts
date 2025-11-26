// src/utils/optimize.ts
const optimize = (url: string) =>
  url.replace("/upload/", "/upload/f_auto,q_auto/");

export default optimize;
