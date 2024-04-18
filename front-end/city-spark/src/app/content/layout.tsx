import Navigation from "@/components/Navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navigation/>
      {children}
    </div>
  );
}
