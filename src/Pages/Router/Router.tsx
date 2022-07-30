import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import About from '../About';
import Home from '../Home';
import News from '../News/News';

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    )
}

export default Router;