import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
    return <main className="container mx-auto">
      {children}
  </main>;
}

export default Layout;
