import CollageStyles from './styles/Collage';

const Collage = props => (
  <CollageStyles>
    <img className="image--center" src="/static/corse2.jpg" />
    <img className="image--top-left" src="/static/edinburgh.jpg" />
    <img className="image--left" src="/static/biere.jpg" />
    <img className="image--bottom-left" src="/static/phare2.jpg" />
    <img className="image--top-right" src="/static/Cheviers.jpg" />
    <img className="image--right" src="/static/nyc.jpg" />
    <img className="image--bottom-right" src="/static/ourcq2.jpg" />
  </CollageStyles>
);

export default Collage;
