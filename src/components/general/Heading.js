import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledHeading = styled.h2`
    font-size: 36px;
`

function Heading({children}) {
    return (
        <StyledHeading>{children}</StyledHeading>
    );
}

export default Heading;

Heading.propTypes = {
    children: PropTypes.string
}
