export default defineNuxtRouteMiddleware((to) => {
    const authStore = useAuthStore();
    authStore.restoreSession();

    if (to.path === '/' && authStore.isAuthenticated) {
        return navigateTo('/account');
    }
    if (to.path === '/account' && !authStore.isAuthenticated) {
        return navigateTo('/');
    }
});