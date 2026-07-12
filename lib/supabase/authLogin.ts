import { supabase } from "./client";

export async function LoginGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (error) {
    console.log(error);
  }
}

export async function loginEmail(email: string, password: string) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signUpEmail(
  nome: string,
  email: string,
  password: string,
) {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nome: nome,
      },
    },
  });
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  window.location.href = "/login";
}
