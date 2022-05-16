import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledTitle = styled.h1`
    font-size: 36px;
`

function Title({children}) {
    return (
        <StyledTitle>{children}</StyledTitle>
    );
}

export default Title;

Title.propTypes = {
    children: PropTypes.string
}
