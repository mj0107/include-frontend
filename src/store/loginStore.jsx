import axios from 'axios';
import { create } from 'zustand';

export const useLoginStore = create((set) => ({
  // activityList: [],
  // fetchActivityList: async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:8080/activity/list`);
  //     set((state) => ({
  //       activityList: (state.activityList = response.data)
  //     }));
  //   } catch (err) {
  //     console.log('fetch error occured!');
  //   }
  // },
  isLoggedIn: false,
  login: async () => {
    try {
      const response = await axios.get(`http://localhost:8080/login`);
      set((state) => ({
        isLoggedIn: (state.isLoggedIn = response)
      }))
    } catch(err) {
      console.log('login error!');
    }
  }
}));
