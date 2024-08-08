import React, {useState} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useDispatch} from "react-redux";
import {logout, setStatus} from "@/store/slices/user.slice";

interface LogoutProps {
  children?: React.ReactNode;
  triggerStyles?: string;
}

export const LogoutForm = ({children, triggerStyles}: LogoutProps) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  async function handleLogout(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    try {
      dispatch(logout());
      dispatch(setStatus("rejected"));
      localStorage.removeItem("accessToken");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleLogout}>
      {children ? (
        children
      ) : (
        <Button
          type="submit"
          variant="primary"
          rounded={"full"}
          className={cn("Trigger", triggerStyles)}
          disabled={loading}
        >
          {loading ? "Logging out..." : "Logout"}
        </Button>
      )}
    </form>
  );
};
