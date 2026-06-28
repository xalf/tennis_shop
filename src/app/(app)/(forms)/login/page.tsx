"use client";

import { useActionState, useEffect } from "react";
import loginAction from "./login-action";

export default function LoginPage() {
  const [state, dispatch, isPending] = useActionState(loginAction, {
    error: false,
  });

  useEffect(() => {
    if (state.redirectUrl) {
      document.location.assign(state.redirectUrl);
    }
  }, [state.redirectUrl]);

  return (
    <form className="p-2" action={dispatch}>
      <div>
        <label htmlFor="login">Логин</label>
        <input
          type="text"
          id="login"
          name="login"
          defaultValue={state.previousValue?.login}
        />
      </div>

      <div>
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          defaultValue={state.previousValue?.password}
        />
      </div>

      {state.error && <p className="text-red-900">Ошибка</p>}
      <div>
        <button type="submit" disabled={isPending}>
          Войти
        </button>
      </div>
    </form>
  );
}
