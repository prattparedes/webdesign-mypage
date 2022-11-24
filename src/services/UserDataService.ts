import http from "../http-common";

class UserDataService {
  // getAll() {
  //   return http.get("/user");
  // }

  // get(id: number) {
  //   return http.get(`/user/${id}`);
  // }

  create(data: any) {
    return http.post("/users", data);
  }

  // update(id: number, data: any) {
  //   return http.put(`/user/${id}`, data);
  // }

  // delete(id: number) {
  //   return http.delete(`/user/${id}`);
  // }

  // deleteAll() {
  //   return http.delete(`/user`);
  // }

  // findByTitle(title: string) {
  //   return http.get(`/user?title=${title}`);
  // }
}

export default new UserDataService();