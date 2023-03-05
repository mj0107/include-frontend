import axios from 'axios';
import { create } from 'zustand';

const useLoginStore = create((set) => ({
  isLoggedIn: false,
  actions: {
    login: async (loginData) => {
      await axios
        .post(`http://localhost:8080/login`, loginData, {
          withCredentials: true,
        })
        .then((res) => {
          console.log('login success!');
          set((state) => ({
            isLoggedIn: (state.isLoggedIn = res.status === 200 ? true : false),
          }));
        });
    },
  },
}));

export default useLoginStore;
