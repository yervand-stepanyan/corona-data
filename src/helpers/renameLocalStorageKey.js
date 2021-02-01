import { loadState, saveState } from './localStorage';

export const renameLocalStorageKey = (oldName, newName) => {
  if (
    oldName &&
    newName &&
    typeof oldName === 'string' &&
    typeof newName === 'string'
  ) {
    const oldKeyData = loadState(oldName);

    if (oldKeyData) {
      saveState(newName, oldKeyData);
      localStorage.removeItem(oldName);

      return true;
    }
    return false;
  }
  return false;
};
