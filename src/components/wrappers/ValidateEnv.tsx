import { useCallback } from "react";
import { ComponentWithChildren } from "interface/html";

const ENV_KEYS: Array<keyof ImportMetaEnv> = [
  "VITE_EMAILJS_PUBLIC_KEY",
  "VITE_EMAILJS_SERVICE",
  "VITE_EMAILJS_TEMPLATE",
];

const ValidateEnv: ComponentWithChildren = ({ children }) => {
  const env = import.meta.env;

  const getIsValidEnv = useCallback(() => {
    const ENV_VALUES = ENV_KEYS.map((key) => env[key]);
    return ENV_VALUES.every((value) => !!value);
  }, [env]);

  return getIsValidEnv() ? (
    <>{children}</>
  ) : (
    <div className="px-6 py-4">
      <p>Psst...</p>
      <p>
        Someone screwed up in the environment variables department. Please
        contact support if youre seeing this page.
      </p>
      <p>Regards, DevOps Luis</p>
    </div>
  );
};

export default ValidateEnv;
