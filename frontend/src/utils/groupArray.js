export default function groupArray(array, id) {
  const map = {};

  array.forEach((element) => {
    const group = element[id];

    if (!map[group]) {
      map[group] = [];
    }

    map[group].push(element);
  });

  return map;
}
