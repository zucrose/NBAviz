export const arrMax = (arr, prop) => {
  let mx = 0;
  arr.map((element) => {
    //console.log(element, prop);
    mx = Math.max(element[prop], mx);
  });
  //console.log(mx);
  return mx;
};
export const arrMin = (arr, prop) => {
  let mini = 100000000;
  arr.map((element) => {
    mini = Math.min(element[prop], mini);
  });
  return mini;
};
export const Addlogo = (team) => {
  const teamsplit = team.split(" ");
  const last = teamsplit[teamsplit.length - 1].toLowerCase();
  const url = last + "logo.png";
  return url;
};

export const playerPercentileRgb = (val) => {
  if (val == null) return "33,37,41";
  let r,
    g,
    b = 0;

  if (val < 50) {
    r = Math.floor(255 * (val / 50));
    g = 255;
  } else {
    g = Math.floor(255 * ((100 - (val % 100)) / 100));
    r = 255;
  }
  const str = r + "," + g + "," + b;
  return str;
};
export const playerPercentileRgbRig = (val) => {
  if (val == null) return "33,37,41";
  let r,
    g,
    b = 0;

  if (val < 150) {
    r = Math.floor(255 * (val / 150));
    g = 255;
  } else {
    g = Math.floor(255 * ((150 - (val % 150)) / 150));
    r = 255;
  }
  const str = r + "," + g + "," + b;
  return str;
};
