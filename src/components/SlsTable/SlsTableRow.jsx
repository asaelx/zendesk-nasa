import { Cell, Row } from '@zendeskgarden/react-tables';
import { formatDate } from '../../utils';

const SlsTableRow = (props) => {
  const { item, toggleModal, handleTitleClick } = props;

  const nasaId = item.data[0]["nasa_id"];
  const imageTitle = item.data[0].title;
  const dateCreated = formatDate(item.data[0]["date_created"]);

  const handleClick = (nasaId) => {
    toggleModal();
    handleTitleClick(nasaId);
  };

  return (
    <Row>
      <Cell className="clickable" onClick={() => handleClick(nasaId)}>{imageTitle}</Cell>
      <Cell>{dateCreated}</Cell>
    </Row>
  );

};

export default SlsTableRow;

