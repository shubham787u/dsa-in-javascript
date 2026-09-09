//! Nested obj - find key : value, link- https://www.youtube.com/watch?v=m1oJZNWsiDk&list=PL8p2I9GklV469rQUJL9o6Yj-0Z1aCzA1K&index=3

const company = {
  name: "Qspider",
  department: {
    name: "Engineering",
    employee: {
      empId: 101,
      role: "Frontend Developer",
      address: {
        city: "noida",
        country: "india",
      },
    },
  },
};
function extract(obj) {
  for (key in obj) {
    if (typeof obj[key] == "object") {
      extract(obj[key]);
    } else {
      console.log(key, ":", obj[key]);
    }
  }
}
extract(company);
