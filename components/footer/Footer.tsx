import { FaGamepad } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
const Footer:React.FC = () => {
    return (<footer className="w-full bg-surface py-5">
        <div className="w-[80vw] mx-auto grid grid-cols-4 gap-5 mt-5 pb-4 border-b border-border">
            <div className="col-span-1 flex flex-col gap-4 ">
                <div className="flex items-center gap-3">
                    <FaGamepad className="text-4xl text-brand"/> <span className="text-xl">Taiyuken Dev</span>
                </div>
                <p className="text-text-subtle">Working hard to create amazing games, one experience at a time!</p>
                <AiFillTikTok className="text-3xl text-text-muted cursor-pointer"/>
            </div>
            <div>
                <p className="text-xl">Products</p>
                <ul className="mt-4 flex flex-col gap-2 text-text-muted">
                    <li>Videogames</li>
                    <li>Board Games</li>
                    <li>Mobile games</li>
                    <li>Other Projects</li>
                </ul>
            </div>
            <div>
                <p className="text-xl">Team</p>
                <ul className="mt-4 flex flex-col gap-2 text-text-muted">
                    <li>About Us</li>
                    <li>Work Together</li>
                </ul>
            </div>
            <div>
                <p className="text-xl">Support</p>
                <ul className="mt-4 flex flex-col gap-2 text-text-muted">
                    <li>Help Center</li>
                    <li>FAQ</li>
                    <li>Requests</li>
                </ul>
            </div>
        </div>
        <div className="w-[80vw] mx-auto flex justify-between text-text-muted mt-2">
            <p>&copy; 2026. Taiyuken Dev. All rights reserved.</p>
            <div className="flex gap-5">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>
        </div>
    </footer>)
}

export default Footer;