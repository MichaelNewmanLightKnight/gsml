import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

const SITE_PASSWORD = "singularity666";

const PasswordGate = ({ children }: { children: React.ReactNode }) => {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem("site_unlocked") === "true");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      sessionStorage.setItem("site_unlocked", "true");
      setUnlocked(true);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center">
      <div className="text-center max-w-md w-full px-6">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <Lock className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Site Under Maintenance</h1>
        <p className="text-muted-foreground mb-8">This site is currently restricted. Please enter the password to continue.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            className={error ? "border-destructive" : ""}
            autoFocus
          />
          {error && <p className="text-sm text-destructive">Incorrect password. Try again.</p>}
          <Button type="submit" className="w-full">Access Site</Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;
