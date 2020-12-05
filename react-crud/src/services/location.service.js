import http from "../http-common";

class LocationDataService {
  getAll() {
    return http.get("/locations");
  }

  get(location_id) {
    return http.get(`/locations/${location_id}`);
  }

  create(data) {
    return http.post("/locations", data);
  }

  update(location_id, data) {
    return http.put(`/locations/${location_id}`, data);
  }

  delete(location_id) {
    return http.delete(`/locations/${location_id}`);
  }

  deleteAll() {
    return http.delete(`/locations`);
  }

  findByName(location_name) {
    return http.get(`/locations?name=${location_name}`);
  }
}

export default new LocationDataService();