import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
   background-color: ${props => props.inverse ? 
        props.theme.primaryColor :
        'white'
   }
   font-size: 1.1rem;
   padding: 0.57rem 0.75rem 0.5rem;
   border: 2px solid ${props => props.theme.secondaryColors};
   color: ${props => props.inverse ? 
        'white' :
        props.theme.font.color
   }
   cursor: pointer;

   :hover,
   :focus {
       background-color: ${props => props.inverse ? 
            'white' :
            props.theme.primaryColor
        }

        color: ${props => props.inverse ? 
            props.theme.font.color :
            'white' 
        }
   }
`;

export default Button;