import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 The Trucker Pro Pvt. Ltd.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/eula" className="text-primary hover:underline">
              EULA
            </Link>
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary hover:underline">
              Terms & Conditions
            </Link>
            <Link to="/disclaimer" className="text-primary hover:underline">
              Disclaimer
            </Link>
            <Link to="/aup" className="text-primary hover:underline">
              AUP
            </Link>
            <Link to="/faq" className="text-primary hover:underline">
              FAQ
            </Link>
            <Link to="/cookie-policy" className="text-primary hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
