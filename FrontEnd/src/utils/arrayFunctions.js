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
