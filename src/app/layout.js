export const metadata = {
  title: "Create Next App",
  description: "Uma rede social para devs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
