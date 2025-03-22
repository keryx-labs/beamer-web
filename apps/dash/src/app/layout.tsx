import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xre5wlr.css" />
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
