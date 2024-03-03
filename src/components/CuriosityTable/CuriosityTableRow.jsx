import { Cell, Row } from '@zendeskgarden/react-tables';

const CuriosityTableRow = (props) => {
  const { item, toggleModal, handleTitleClick } = props;

  const nasaId = item.data[0]["nasa_id"];
  const imgSrc = item.links[0].href;
  const secondaryCreator = item.data[0]["secondary_creator"];

  const handleClick = (nasaId) => {
    toggleModal();
    handleTitleClick(nasaId);
  };

  return (
    <Row>
      <Cell>{nasaId}</Cell>
      <Cell>{secondaryCreator}</Cell>
      <Cell className="clickable" onClick={() => handleClick(nasaId)}>{imgSrc}</Cell>
    </Row>
  );

};

export default CuriosityTableRow;

