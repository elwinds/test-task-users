import axios from "axios";

const endpoints = {
  urlAllUsers: "https://reqres.in/api/users",
};

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type NewUser = {
  email: string;
  firstname: string;
  lastname: string;
};

class UsersApi {
  static async fetchAllUsers(page: number) {
    const response = await axios.get(
      `${endpoints.urlAllUsers}?page=${page}&per_page=5`
    );
    return response;
  }

  static async fetchOneUserById(id: string) {
    const response = await axios.get(endpoints.urlAllUsers + "/" + id);
    return response;
  }

  static async addNewUser(data: NewUser) {
    const response = await axios.post(endpoints.urlAllUsers, data);
    return response;
  }

  static async deleteUser(id: any) {
    const response = await axios.delete(endpoints.urlAllUsers, id);
    return response;
  }
}

export { UsersApi };
