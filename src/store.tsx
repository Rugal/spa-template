import { proxy } from "valtio";

interface Store {
  token: string
}

export const store = proxy<Store>({ token: "" });
