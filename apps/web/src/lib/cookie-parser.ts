type CookieObject = {[key: string]: string};

export const CookieParser = (cookieString: string): CookieObject => {
  return cookieString.split("; ").reduce((acc: CookieObject, cookie: string) => {
    const [key, value] = cookie.split("=");
    acc[key] = decodeURIComponent(value);
    return acc;
  }, {});
};
