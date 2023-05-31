import { getDoc } from '@firebase/firestore';

export const doesPersonExist = async (docRef: any, setError?: (msg: string) => void) => {
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    setError && setError('Person already exists.');
    return;
  }
};
