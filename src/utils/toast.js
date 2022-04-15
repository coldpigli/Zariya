import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ({ message, type }) {
  return toast(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 1000,
    type: type,
    transition: Bounce,
    theme: "colored",
    closeOnClick: true,
    pauseOnHover: false,
  });
}