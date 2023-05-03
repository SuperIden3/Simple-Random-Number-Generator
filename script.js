const range = (start, end, step = 1) => {
  if (
    start !== end &&
    typeof start === "number" &&
    typeof end === "number" &&
    step !== Infinity &&
    start !== Infinity &&
    end !== Infinity
  ) {
    let array = [];
    if (start < end) {
      for (let i = start; i <= end; i += step) {
        array.push(i);
      }
    } else {
      for (let j = start; j >= end; j -= step) {
        array.push(j);
      }
    }
    return array;
  } else {
    if (start === end) {
      return new RangeError("Arguments are the same.");
    } else if (typeof start !== "number" || typeof end !== "number") {
      return new RangeError("Arguments are not type of number.");
    } else if (start === Infinity || end === Infinity || step === Infinity) {
      return new RangeError("Arguments are Infinity.");
    } else {
      return new Error(undefined);
    }
  }
};
function pickRandom(vals) {
  return vals[(Math.random() * vals.length) | 0];
}
const func = (e) => {
  console.log("Event:", e);
  if (min.value !== "" && max.value !== "") b.removeAttribute("disabled");
  else b.setAttribute("disabled", "");
};
min.addEventListener("change", func);
max.addEventListener("change", func);
b.addEventListener("click", (e) => {
  console.log("Event:", e);
  const val = pickRandom(range(Number(min.value), Number(max.value)));
  num.innerText = val;
});