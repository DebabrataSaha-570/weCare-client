import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";

import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
import { Toaster } from "react-hot-toast";
import "sweetalert2/dist/sweetalert2.min.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
      </PersistGate>
    </Provider>
    <Toaster toastOptions={{ duration: 5000 }} />
  </React.StrictMode>
);
