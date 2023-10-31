import { defineStore } from 'pinia'

// Vue 3 composition API
function getInitialLoginData() {
  return {
    email: '',
    accessToken: '',
    auth: {},
    displayName: '',
    emailVerified: false,
    isAnonymous: false,
    metadata: {},
    phoneNumber: null,
    photoURL: null,
    proactiveRefresh: {},
    providerData: [],
    providerId: '',
    reloadListener: null,
    reloadUserInfo: {},
    stsTokenManager: {},
    tenantId: null,
    uid: '',
  };
}
const loginData = reactive(getInitialLoginData());

export const useUserStore = defineStore('userStore', () => {

  function setLoginData(newLoginData) {
    Object.assign(loginData, newLoginData);
  }

  function resetLoginData() {
    setLoginData(getInitialLoginData());
  }
  const isLoggedIn = computed(() => Boolean(loginData.email));
  return { loginData, setLoginData, isLoggedIn, resetLoginData }
})
