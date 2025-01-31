export const GetUserByEmail = (email) => {
    return fetch(`http://localhost:9000/users?email=${email}&_expand=verse`).then((res) =>
      res.json()
    )
  }