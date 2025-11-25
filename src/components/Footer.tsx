const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">

      {/* COPYRIGHT SECTION */}
      <div className="py-6 text-center text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Pravin Mourya. All
          rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
