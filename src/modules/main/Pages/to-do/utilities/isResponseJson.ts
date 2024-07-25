export const isResponseJson = <T>(response: unknown): response is T => {
  return response !== null && typeof response === 'object';
};
