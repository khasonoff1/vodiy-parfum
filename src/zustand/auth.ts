import request from "@/server";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { create } from "zustand";
import { TOKEN, ROLE } from "@/constants";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';

interface initialState {
  loading: boolean;
  isAuth: boolean;
  role: string | null;
  login: (values: object, router: AppRouterInstance) => void;
  signUp: (values: object, router: AppRouterInstance) => void;
  logout: (router: AppRouterInstance) => void;
}

const useAuth = create<initialState>()((set) => ({
  loading: false,
  isAuth: Boolean(Cookies.get(TOKEN)),
  role: Cookies.get(ROLE) || null,
  login: async (values, router) => {
    try {
      set({ loading: true });
      const {
        data: {
          user: { role },
          accesstoken,
        },
      } = await request.post("auth/login", values);

      Cookies.set(ROLE, role);
      Cookies.set(TOKEN, accesstoken);

      set({ isAuth: true, role });

      request.defaults.headers.Authorization = `Bearer ${accesstoken}`;

      if (role === 0) {
        router.push("/");
        toast.success("Muvaffaqqiyatli Kirish");
      } else {
        router.push("/admin/dashboard");
        toast.success("Muvaffaqqiyatli Kirish");
      }
    } finally {
      set({ loading: false });
    }
  },
  signUp: async (values, router) => {
    try {
      set({ loading: true });
      const {
        data: {
          user: { role },
          accesstoken,
        },
      } = await request.post("auth/register", values);

      Cookies.set(ROLE, role);
      Cookies.set(TOKEN, accesstoken);

      set({ isAuth: true, role });

      request.defaults.headers.Authorization = `Bearer ${accesstoken}`;

      router.push("/");
      toast.success("Ro'yxatdan otdingiz");
    } finally {
      set({ loading: false });
    }
  },
  logout: (router) => {
    Cookies.remove(ROLE);
    Cookies.remove(TOKEN);

    router.push("/");
  },
}));

export default useAuth;
