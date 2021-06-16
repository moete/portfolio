import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center >
        Hello There ! <br/>
        They call me Taz
      </SectionTitle>
      <SectionText> 
        a Freelancer who aim to help humans achieve thier buisness target 
         without a hussle . 
      </SectionText>
     <Button onClick={()=> window.location = 'https://www.linkedin.com' }> Learn More</Button>
    </LeftSection>
  </Section>

  </>
);

export default Hero;