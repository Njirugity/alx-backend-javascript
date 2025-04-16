export default function createReportObject(employeesList) {
  const fullObj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };

  return fullObj;
}
