export function findMaxSub(array) {
  if (!array) return 0;
  if (!array.length) return 0;

  let max = array[0].qq_id;

  array.forEach((element) => {
    if (element.qq_id > max) max = element.qq_id;
  });

  return max + 1;
}

export function findMaxMain(array) {
  if (!array) return 0;
  if (!array.length) return 0;

  let max = array[0].question_id;

  array.forEach((element) => {
    if (element.question_id > max) max = element.question_id;
  });

  return max + 1;
}
