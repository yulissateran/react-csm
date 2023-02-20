export interface StorageMockInterface {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  clear: () => void;
}

export const MOCK_STORAGE: StorageMockInterface = (() => {
  let store: { [key: string]: string } = {};

  const getItem = (key: string) => {
    return store[key] || null;
  };

  const setItem = (key: string, value: string) => {
    store[key] = value.toString();
  };

  const removeItem = (key: string) => {
    delete store[key];
  };

  const clear = () => {
    store = {};
  };

  return {
    getItem,
    setItem,
    removeItem,
    clear,
  };
})();
