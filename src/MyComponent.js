import React from 'react'

const MyComponent = (props) => {
    return <div>Hello, {props.name}!</div>;
};

MyComponent.defaultProps = {
    name : '기본 이름'
}
export default MyComponent;