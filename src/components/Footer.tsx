function Footer() {
  return (
    <footer className="w-full border-t-2 border-neutral-800 absolute bottom-0 left-0 right-0 py-4 bg-background text-neutral-400 text-xs lg:text-sm select-none">
      <div className="max-w-[500px] lg:max-w-[750px] mx-auto flex items-center justify-between">
        <p>Aman Chand © {new Date().getFullYear()}</p>
        <p>
          {new Date().getHours() >= 5 && new Date().getHours() < 12
            ? "Good Morning"
            : new Date().getHours() >= 12 && new Date().getHours() < 18
              ? "Good Afternoon"
              : "Good Evening"}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
