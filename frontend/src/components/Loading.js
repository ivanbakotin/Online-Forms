import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const Border = styled.div`
    border: 2rem solid #f3f3f3;
    border-top: 2rem solid #3498db;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const Loading = () => (
    <Wrapper>
        <Border />
    </Wrapper >
);

export default Loading;
