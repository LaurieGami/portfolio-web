import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledSubheading = styled.h2`
    font-size: 30px;
`

function Subheading({children}) {
    return (
        <StyledSubheading>{children}</StyledSubheading>
    );
}

export default Subheading;

Subheading.propTypes = {
    children: PropTypes.string
}
