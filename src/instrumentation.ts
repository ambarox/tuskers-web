export async function register() {
  // Node 22+ ships an experimental Web Storage API (localStorage/sessionStorage)
  // that requires a backing file (--localstorage-file flag). Without it the
  // object exists but its methods are broken, crashing Next.js SSR.
  // Patch it with a no-op in-memory shim so client libraries don't blow up.
  if (
    process.env.NEXT_RUNTIME === "nodejs" &&
    typeof (globalThis as Record<string, unknown>).localStorage !== "undefined"
  ) {
    const store: Record<string, string> = {};
    Object.defineProperty(globalThis, "localStorage", {
      value: {
        getItem: (k: string) => store[k] ?? null,
        setItem: (k: string, v: string) => { store[k] = String(v); },
        removeItem: (k: string) => { delete store[k]; },
        clear: () => { for (const k in store) delete store[k]; },
        key: (n: number) => Object.keys(store)[n] ?? null,
        get length() { return Object.keys(store).length; },
      },
      writable: true,
      configurable: true,
    });
    Object.defineProperty(globalThis, "sessionStorage", {
      value: {
        getItem: (k: string) => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
        key: () => null,
        length: 0,
      },
      writable: true,
      configurable: true,
    });
  }
}
