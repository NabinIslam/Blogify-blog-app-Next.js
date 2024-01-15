'use client';

import { Footer } from 'flowbite-react';
import React from 'react';

const FooterComponent = () => {
  return (
    <div>
        <Footer container={true} className="shadow-none">
          <div className="w-full text-center">
           
            <Footer.Divider />
            <Footer.Copyright href="#" by="Blogify" year={2024} />
          </div>
        </Footer>
   
    </div>
  );
};

export default FooterComponent;
