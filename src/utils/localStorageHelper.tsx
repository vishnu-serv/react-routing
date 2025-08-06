export const setStorageItem = ({
  key,
  value,
}: {
  key: string;
  value: unknown;
}) => {
  try {
    const storedItem = JSON.stringify(value);
    localStorage.setItem(key, storedItem);
  } catch (err) {
    console.error("Error setting localStorage item", err);
  }
};

export const getStorageItem = ({ key }: { key: string }) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (err) {
    console.error("Error getting localStorage item", err);
    return null;
  }
};

export const removeStorageItem = ({ key }: { key: string }) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error("Error removing localStorage item", err);
  }
};
