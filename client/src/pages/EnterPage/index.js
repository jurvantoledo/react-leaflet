import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import video from "../../assets/forest_video.mp4"
import './style.scss'

export default function TestPage() {
    return (
        <section className="parallax" style={{
            height: '100vh',
            overflow: 'hidden'
        }}>
            <div className="parallax-background">
                <video className='videoTag' autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                </video>
                <div className="parallax-button">
                    <Link to={"/"}>
                        <Button variant="outlined" style={{ color: '#fff', borderColor: '#fff' }}>
                            Enter the secret garden
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
