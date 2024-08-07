import { BaseProps } from "@/types/theme";

export interface FormProps extends BaseProps {
  open?: boolean;
  setOpen?: (value: boolean) => void;
  setAction?: (value: "signup" | "login") => void;
}
