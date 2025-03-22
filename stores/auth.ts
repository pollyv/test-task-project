import { defineStore } from 'pinia';
import md5 from 'md5';
import type { User } from '~/types/user';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as User | null,
        isAuthenticated: false,
    }),
    actions: {
        async login(username: string, password: string) {
            const response = await $fetch('/api/users', { method: 'GET' });
            const users: User[] = response as User[];
            const user = users.find(
                (u) => u.credentials.username === username && u.credentials.passphrase === md5(password)
            );

            if (user) {
                this.user = user;
                this.isAuthenticated = true;
                localStorage.setItem('auth', JSON.stringify({ user, isAuthenticated: true }));
                await navigateTo('/account');
            } else {
                throw new Error('Введены неверные данные авторизации. Попробуйте ещё раз');
            }
        },
        logout() {
            this.user = null;
            this.isAuthenticated = false;
            localStorage.removeItem('auth');
            navigateTo('/');
        },
        restoreSession() {
            const authData = localStorage.getItem('auth');
            if (authData) {
                const { user, isAuthenticated } = JSON.parse(authData);
                this.user = user;
                this.isAuthenticated = isAuthenticated;
            }
        },
    },
});