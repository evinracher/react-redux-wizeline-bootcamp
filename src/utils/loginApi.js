const mockedUser = {
  id: "123",
  username: "Wizeline",
};

export default async function loginApi(username, password) {
  console.log("starting request", username, password);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "wizeline" && password === "Rocks!") {
        console.log("ending request");
        return resolve(mockedUser);
      }
      console.log("failed request");
      return reject(new Error("Username or password invalid"));
    }, 500);
  });
}
