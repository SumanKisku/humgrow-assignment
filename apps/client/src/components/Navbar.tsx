import { Button } from "./ui/button";

const Navbar = ({
  name,
  handleLogout,
}: {
  name: { email: string; role: string };
  handleLogout: () => void;
}) => {
  return (
    <div className="w-screen flex h-10 justify-end items-center gap-4 bg-blue-100 p-8">
      {name.email}
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Navbar;
