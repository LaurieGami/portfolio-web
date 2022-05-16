import PropTypes from 'prop-types';
// import styled from "styled-components";

import Heading from "../general/Heading";
import Text from "../general/Text";

function MainPage() {
    return (
        <>
            <Heading>Hello, I'm Laurie Villeton</Heading>
            <Text>Text, eheh.</Text>
        </>
    );
}

export default MainPage;

MainPage.propTypes = {
    children: PropTypes.string
}
