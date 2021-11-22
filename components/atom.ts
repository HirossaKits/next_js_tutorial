import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: typeof window === 'undefined' ? undefined : window.sessionStorage,
});

// count
export const countState = atom({
  key: "count",
  default: 0,
  effects_UNSTABLE: [persistAtom]
});