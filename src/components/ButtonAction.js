import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const sizeMap = {
    sm: {
        padding: '16px',
        borderRadius: '4px',
        fontSize: '14px',
        height: '27px',
    },
    md: {
        padding: '32px',
        borderRadius: '10px',
        fontSize: '16px',
        height: '40px',
    },
    xl: {
        padding: '48px',
        borderRadius: '16px',
        fontSize: '18px',
        height: '60px',
    },
};

const styleMap = {
    primary: {
        color: '#FFF',
        backgroundColor: '#23A3FF'
    },
    secondary: {
        color: '#4D4D4D',
        backgroundColor: '#F2F2F2'
    },
};

const ButtonContainer = styled.TouchableOpacity`
    padding-left: ${props => sizeMap?.[props.size]?.padding};
    padding-right: ${props => sizeMap?.[props.size]?.padding};
    border-radius: ${props => sizeMap?.[props.size]?.borderRadius};
    background-color: ${props => styleMap?.[props.variant]?.backgroundColor};
    height: ${props => sizeMap?.[props.size]?.height};
`;

const ButtonText = styled.Text`
    font-size: ${props => sizeMap?.[props.size]?.fontSize};
    color: ${props => styleMap?.[props.variant]?.color};
    line-height: ${props => sizeMap?.[props.size]?.height};
    text-align: center;
`;

const ButtonAction = ({ onPress, size, variant, content }) => (
    <ButtonContainer onPress={onPress} size={size} variant={variant}>
        <ButtonText size={size} variant={variant}>{content}</ButtonText>
    </ButtonContainer>
);

ButtonAction.propTypes = {
    onPress: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'md', 'xl']),
    variant: PropTypes.oneOf(['primary', 'secondary']),
    content: PropTypes.node.isRequired
};

ButtonAction.defaultProps = {
    size: 'md',
    variant: 'primary'
}

export default ButtonAction;