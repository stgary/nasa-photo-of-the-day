import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #d4d4d49e;
    margin-right: 2%;
`;

const ParaDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ApodImage = styled.img`
    width: 40%;
    border-radius: 10px;
    margin: 2%;
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ApodTitle = styled.h2`
    font-size: 2rem;
`;

const ApodParagraph = styled.p`
    width: 80%;
`;

const ApodDate = styled.span`
    font-size: 1rem;
`;


const NasaCard = props => {
    return (
        <div>
            <WrapperDiv key="">
                <ApodImage src={props.image} alt="APOD"/>
                <ContainerDiv>
                    <ApodTitle>{props.title}</ApodTitle>
                    <ApodDate>{props.date}</ApodDate>
                </ContainerDiv>
            </WrapperDiv>
            <ParaDiv> 
                <ApodParagraph>{props.explanation}</ApodParagraph>  
            </ParaDiv>
        </div>
    );
};
export default NasaCard;