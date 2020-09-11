const baseUrl = "https://react-tutorial-burger-bu-7559f.firebaseio.com";

export const firebaseDBFetch = (
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> => {
  if (typeof input === "string" && input.startsWith("/")) {
    return fetch(baseUrl + input, init);
  }

  return fetch(input, init);
};
