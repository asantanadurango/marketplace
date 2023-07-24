export default function (path1, path2) {
  const normalizedPath1 = path1.endsWith('/') ? path1.slice(0, -1) : path1;
  const normalizedPath2 = path2.endsWith('/') ? path2.slice(0, -1) : path2;
  return normalizedPath1 === normalizedPath2;
}