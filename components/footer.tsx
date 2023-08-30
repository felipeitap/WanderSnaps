import Card from "./card";
import FacebookLogo from "../public/FacebookLogo.png"
import InstagramLogo from "../public/InstagramLogo.png"
import TwitterLogo from "../public/TwitterLogo.png"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex bg-gradient-to-b from-[#001633] to-[#000F22] flex-wrap md:flex-nowrap">
      <div className="flex flex-wrap	md:flex-nowrap">
        <Card title={"About us"} styles={"text-white text-xs"}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
            voluptatum maxime repellendus nostrum ex accusamus! Aperiam
            incidunt, nostrum, amet doloremque fugiat eaque ducimus quos
            voluptas reprehenderit, exercitationem libero? Eaque, corrupti!
          </p>
        </Card>
        <Card title={"Company"} styles={"text-white text-xs"}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
            voluptatum maxime repellendus nostrum ex accusamus! Aperiam
            incidunt, nostrum, amet doloremque fugiat eaque ducimus quos
            voluptas reprehenderit, exercitationem libero? Eaque, corrupti!
          </p>
        </Card>
        <Card title={"Popular categories"} styles={"text-white text-xs"}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
            voluptatum maxime repellendus nostrum ex accusamus! Aperiam
            incidunt, nostrum, amet doloremque fugiat eaque ducimus quos
            voluptas reprehenderit, exercitationem libero? Eaque, corrupti!
          </p>
        </Card>
      </div>

      <Card title={"Connect with us"} styles={"text-white text-xs flex flex-col items-end"}>
        <div className="flex justify-end gap-2">
            <Image src={FacebookLogo} alt="Logo Facebook"/>
            <Image src={InstagramLogo} alt="Logo Instagram"/>
            <Image src={TwitterLogo} alt="Logo Twitter"/>
        </div>
      </Card>
    </footer>
  );
}
