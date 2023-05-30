import PropTypes from 'prop-types';
const Section = ({ title, children }) => (
  <div className="section-container">
    <h2 className="section-title">{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
