function addCommas(nStr) {
  nStr += "";
  let x = nStr.split(".");
  let x1 = x[0];
  let x2 = x.length > 1 ? "." + x[1] : "";
  let regEx = /(\d+)(\d{3})/;
  while (regEx.test(x1)) {
    x1 = x1.replace(regEx, "$1" + "," + "$2");
  }
  return x1 + x2;
}

export default addCommas;
