export const GetUserByEmail = (email) => {
    return fetch(`http://localhost:8001/users?email=${email}&_expand=verse`).then((res) =>
      res.json()
    )
  }