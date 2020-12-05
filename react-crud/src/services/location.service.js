import http from "../http-common";

class LocationDataService {
  getAll() {
    return http.get("/locations");
  }

  get(id) {
    return http.get(`/locations/${id}`);
  }

  create(data) {
    return http.post("/locations", data);
  }

  update(id, data) {
    return http.put(`/locations/${id}`, data);
  }

  delete(id) {
    return http.delete(`/locations/${id}`);
  }

  deleteAll() {
    return http.delete(`/locations`);
  }

  findByName(name) {
    return http.get(`/locations?name=${name}`);
  }
}

export default new LocationDataService();