import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledText = styled.p`
`

function Text({children}) {
    return (
        <StyledText>{children}</StyledText>
    );
}

export default Text;

Text.propTypes = {
    children: PropTypes.string
}
