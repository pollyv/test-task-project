import users from '~/users.json';

export default defineEventHandler(() => {
    return users.map((user: any, index: number) => ({
        ...user,
        id: index + 1,
    }));
});