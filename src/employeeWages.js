//uc1
const isPresent = Math.random() < 0.5 ? "Absent" : "Present";
//uc2
const getDailyWage = () => {
  let empCheck = Math.floor(Math.random() * 3);
  let empHours = 0;
  switch (empCheck) {
    case 1:
      empHours = 4;
      break;
    case 2:
      empHours = 8;
      break;
    default:
      empHours = 0;
  }
  return empHours * 20;
};
//uc1
console.log(isPresent);
// uc2
console.log(getDailyWage());