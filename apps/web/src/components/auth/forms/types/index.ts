import { BaseProps } from "@/types/theme";

export interface FormProps extends BaseProps {
  setAction?: (value: "signup" | "login") => void;
  setOpen?: (value: boolean) => void;
}
