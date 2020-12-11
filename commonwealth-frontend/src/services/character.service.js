import http from "../http-common";
import authHeader from './auth-header';

class CharacterDataService {
  getAll() {
    
    return http.get("/characters", { headers: authHeader() });
  }

  get(character_id) {
    return http.get(`/characters/${character_id}`, { headers: authHeader() });
  }

  create(data) {
    return http.post("/characters", data, { headers: authHeader() });
  }

  update(character_id, data) {
    return http.put(`/characters/${character_id}`, data, { headers: authHeader() });
  }

  delete(character_id) {
    return http.delete(`/characters/${character_id}`, { headers: authHeader() });
  }

  findCharactersByUser(user_id) {
    return http.get(`/characters/oneuser/${user_id}`, { headers: authHeader() });
  }

  findAllByApproved(approved){
    return http.get(`/characters/approved/${approved}`, { headers: authHeader() });
  }

  findAllByName(character_name) {
    return http.get(`/characters/byname/${character_name}`, { headers: authHeader() });
  }
}

export default new CharacterDataService();