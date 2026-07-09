import { useState, type FormEvent } from "react";
import { FirebaseError } from "firebase/app";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { IcBolt, IcMoon, IcSun } from "./icons";

const errorText: Record<string, string> = {
  "auth/invalid-email": "El correo no es válido.",
  "auth/missing-password": "Ingresá una contraseña.",
  "auth/invalid-credential": "Correo o contraseña incorrectos.",
  "auth/wrong-password": "Correo o contraseña incorrectos.",
  "auth/user-not-found": "No existe una cuenta con ese correo.",
  "auth/email-already-in-use": "Ya existe una cuenta con ese correo.",
  "auth/weak-password": "La contraseña debe tener al menos 6 caracteres.",
  "auth/too-many-requests": "Demasiados intentos. Probá de nuevo más tarde.",
};

export default function Login() {
  const { signIn, signUp } = useAuth();
  const { theme, toggle } = useTheme();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      if (mode === "login") await signIn(email.trim(), password);
      else await signUp(name.trim(), email.trim(), password);
    } catch (err) {
      const code = err instanceof FirebaseError ? err.code : "";
      setError(errorText[code] || "No se pudo completar la operación. Intentá de nuevo.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="auth-wrap">
      <button className="icon-btn auth-top-toggle" onClick={toggle} title="Cambiar tema">
        {theme === "light" ? <IcMoon width={17} height={17} /> : <IcSun width={17} height={17} />}
      </button>

      <div className="auth-card">
        <div className="auth-brand">
          <div className="brand-logo">
            <IcBolt width={20} height={20} />
          </div>
          <div>
            <div className="brand-name" style={{ fontSize: 16 }}>
              Centro de Control
            </div>
            <div className="brand-sub">Panel del desarrollador</div>
          </div>
        </div>

        <h1>{mode === "login" ? "Iniciá sesión" : "Creá tu cuenta"}</h1>
        <p className="sub">
          {mode === "login"
            ? "Accedé a todos tus sistemas desde un solo lugar."
            : "Registrate para centralizar tus sistemas y cobros."}
        </p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={submit}>
          {mode === "signup" && (
            <div className="field">
              <label>Nombre</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" autoComplete="name" />
            </div>
          )}
          <div className="field">
            <label>Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="field">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              required
            />
          </div>
          <button className="btn btn-primary auth-btn" disabled={busy}>
            {busy ? "Un momento…" : mode === "login" ? "Ingresar" : "Crear cuenta"}
          </button>
        </form>

        <div className="auth-alt">
          {mode === "login" ? "¿No tenés cuenta? " : "¿Ya tenés cuenta? "}
          <button
            onClick={() => {
              setMode(mode === "login" ? "signup" : "login");
              setError("");
            }}
          >
            {mode === "login" ? "Registrate" : "Iniciá sesión"}
          </button>
        </div>
      </div>
    </div>
  );
}
