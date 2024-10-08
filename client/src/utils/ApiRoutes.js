export const Host = process.env.NEXT_PUBLIC_HOST;

export const authRoute = `${Host}/api/auth`;

export const checkUser = `${authRoute}/checkUser`;
