import {Container, Navbar} from "react-bootstrap";

function Footer() {
    return (
        <>
            <div className="fixed-bottom">
                <Navbar color="dark" dark>
                    <Container>
                        Footer
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Footer;