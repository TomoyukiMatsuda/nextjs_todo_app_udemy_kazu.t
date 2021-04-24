import { userRouter } from "next/router";
import Cookie from "universal-cookie";

const cookie = new Cookie();

export default function MainPage() {
  const router = userRouter();
  const logout = () => {
    cookie.remove("access_token");
    router.push("/");
  };
  
  return (
    <svg
      className="w-6 h-6 mt-10 cursor-pointer"
      onClick={logout}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
    </svg>
  )
}