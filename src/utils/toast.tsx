import { toast, ToastContainer } from "react-toastify";
import type { ToastOptions } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const toastOptions: ToastOptions = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  icon: false,
};

export const messageSuccess = (message: string, sub?: string) => {
  toast.success(
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          border: "1px solid #fff",
          borderRadius: "50%",
          padding: "8px",
          marginRight: "10px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      </div>
      <div>
        <strong style={{ fontSize: 16, fontWeight: 600 }}>{message}</strong>
        <p style={{ fontSize: 14, marginTop: 5, fontWeight: 400 }}>
          {sub ? sub : "Verifique na sua lista"}
        </p>
      </div>
    </div>,
    {
      ...toastOptions,
      style: {
        backgroundColor: "#007A3D",
        color: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  );
};
export const messageSuccessCSV = (message: string) => {
  toast.success(
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          border: "1px solid #fff",
          borderRadius: "50%",
          padding: "8px",
          marginRight: "10px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      </div>
      <div>
        <strong style={{ fontSize: 16, fontWeight: 600 }}>{message}</strong>
        <p style={{ fontSize: 14, marginTop: 5, fontWeight: 400 }}>
          Enviamos uma cópia também para o seu email.
        </p>
      </div>
    </div>,
    {
      ...toastOptions,
      style: {
        backgroundColor: "#007A3D",
        color: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  );
};

export const messageError = (message: string) => {
  toast.error(
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          border: "1px solid #fff",
          borderRadius: "50%",
          padding: "8px",
          marginRight: "10px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 9v6M12 15h0M21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9 9-4.03 9-9z"></path>
        </svg>
      </div>
      <div>
        <strong style={{ fontSize: 16, fontWeight: 600 }}>{message}</strong>
        <p style={{ fontSize: 14, marginTop: 5, fontWeight: 400 }}>
          Verifique com suporte
        </p>
      </div>
    </div>,
    {
      ...toastOptions,
      style: {
        backgroundColor: "#D15951",
        color: "#2B2B2B",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  );
};

export const messageWarning = (message: string) => {
  toast.warn(
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          border: "1px solid #fff",
          borderRadius: "50%",
          padding: "8px",
          marginRight: "10px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 16v2M12 8v4M10 19h4c1.1 0 1.99-.9 1.99-2L18 5c0-1.1-.89-2-1.99-2H6c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2z"></path>
        </svg>
      </div>
      <div>
        <strong style={{ fontSize: 16, fontWeight: 600 }}>{message}</strong>
        <p style={{ fontSize: 14, marginTop: 5, fontWeight: 400 }}>
          Verifique sua internet
        </p>
      </div>
    </div>,
    {
      ...toastOptions,
      style: {
        backgroundColor: "#D1BC50",
        color: "#2B2B2B",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  );
};

export const ToastNotifications = () => {
  return <ToastContainer icon={false} />;
};
