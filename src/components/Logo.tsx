import Image from "next/image";
import logo from "@/public/evento.png";

const Logo = () => {
  return <Image className="w-auto h-[12px]" src={logo} priority alt="EVENTO logo" width={53} height={12} />;
};

export default Logo;
