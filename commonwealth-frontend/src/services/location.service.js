import http from "../http-common";
import authHeader from './auth-header';

class LocationDataService {
  getAll() {
    return http.get("/locations", { headers: authHeader() });
  }

  get(location_id) {
    return http.get(`/locations/${location_id}`, { headers: authHeader() });
  }

  create(data) {
    return http.post("/locations", data, { headers: authHeader() });
  }

  update(location_id, data) {
    return http.put(`/locations/${location_id}`, data, { headers: authHeader() });
  }

  delete(location_id) {
    return http.delete(`/locations/${location_id}`, { headers: authHeader() });
  }

  findByLocationName(location_name) {
    return http.get(`/locations?location_name=${location_name}`, { headers: authHeader() });
  }
}

export default new LocationDataService();