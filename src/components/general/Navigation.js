import { NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { device } from "../../device";

const StyledNav = styled.nav`
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    background-color: black;
    border: 1px solid white;
    width: ${props => props.open ? '90vw' : 'auto'};
    height: ${props => props.open ? '100vh' : 'auto'};

    @media ${device.laptop} { 
        width: ${props => props.open ? '20vw' : 'auto'};
    }
`

const ButtonContainer = styled.div`
    display: flex;
`

const Button = styled.button`
    border: 1px solid white;
    margin: -1px;
    color: white;
    background-color: black;
    padding: 10px 20px;
    min-width: 80px;
`

const StyledList = styled.ul`
    list-style: none;   
    display: flex;
    flex-direction: column;
`

const StyledListItem = styled.li`
    display: flex;
    border: 1px solid white;
    margin: 0 -1px -1px;
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    display: flex;
    width: 100%;
    padding: 10px;
    color: white;

    &.active {
        color: black;
        background-color: white;
    }
`

function Navigation() {
    const [open, setOpen] = useState(false);

    return (
        <StyledNav open={open}>
            <ButtonContainer>
                {open ? <Button onClick={() => setOpen(!open)}>X</Button> : <Button onClick={() => setOpen(!open)}>|||</Button>}
            </ButtonContainer>
            {open && (
                <StyledList>
                    <StyledListItem>
                        <StyledNavLink
                            exact
                            to="/"
                        >
                            Home
                        </StyledNavLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledNavLink exact to="/projects">Projects</StyledNavLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledNavLink exact to="/contact">Contact</StyledNavLink>
                    </StyledListItem>
                </StyledList>
            )}
        </StyledNav>
    );
}

export default Navigation;
