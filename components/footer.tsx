import Card from "./card"

export default function Footer (){
    return (
        <footer className="flex bg-gradient-to-b from-[#001633] to-[#000F22]">
            <Card title={"About us"} styles={"text-white"}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatum maxime repellendus nostrum ex accusamus! Aperiam incidunt, nostrum, amet doloremque fugiat eaque ducimus quos voluptas reprehenderit, exercitationem libero? Eaque, corrupti!</p>
            </Card>
            <Card title={"Company"} styles={"text-white"}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatum maxime repellendus nostrum ex accusamus! Aperiam incidunt, nostrum, amet doloremque fugiat eaque ducimus quos voluptas reprehenderit, exercitationem libero? Eaque, corrupti!</p>
            </Card>
            <Card title={"Popular categories"} styles={"text-white"}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptatum maxime repellendus nostrum ex accusamus! Aperiam incidunt, nostrum, amet doloremque fugiat eaque ducimus quos voluptas reprehenderit, exercitationem libero? Eaque, corrupti!</p>
            </Card>
            <Card title={"Connect with us"}>
                <p>Teste</p>
            </Card>
        </footer>
    )
}