import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

HeaderOnly.propTypes = {
  children: PropTypes.node,
};

export default HeaderOnly;
