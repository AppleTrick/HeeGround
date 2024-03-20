"use client";

import { useFormState } from "react-dom";
import styles from "./registerForm.module.css";
import { register } from "@/lib/action";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input type="password" placeholder="password" name="passwordRepeat" />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        계정이 있으신가요? <b>로그인하기</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
