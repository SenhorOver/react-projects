import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

export default function TemplateDefault({ Component }) {
  return (
    <>
      <Header />
      {Component ? <Component /> : <Outlet />}
    </>
  );
}

TemplateDefault.defaultProps = {
  Component: false,
};

TemplateDefault.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.bool,
  ]),
};
