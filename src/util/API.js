import axios from "axios";

const URL = "https://randomuser.me/api/?results=100&nat=us";

// Export an object with a "search" method that searches the RandomUser API for the passed query
export default {
  getEmployees: function() {
      return axios.get(URL);
  }
}
